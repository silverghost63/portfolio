"use strict";

var gulp = require('gulp');
var notify = require('gulp-notify');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var prefix = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var imagemin = require('gulp-imagemin');
var wiredep = require('wiredep').stream;
var paths = {
  sass:['app/css/**/*.sass'],
	css:['app/libs/**/*.css'],
  script:['app/**/*.js'],
	images:['app/images/**/*']
};

// CSS

gulp.task('css', function () {
	var sassStream = gulp.src(paths.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('scss-files.sass'));
	var cssStream = gulp.src(paths.css)
		.pipe(concat('css-files.css'));
	var mergedStream = merge(sassStream, cssStream)
		.pipe(concat('styles.css'))
		.pipe(prefix({ browsers: ['> 15%', 'IE 9'], cascade: false }))
		.pipe(minifyCss())
		.pipe(gulp.dest('app/css'))
		.pipe(notify({
			onLast: true,
			message: 'Done! CSS...'
		}));
	return mergedStream;				
});

// BOWER

gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: 'app/bower_components',
      goes: 'here'
    }))
    .pipe(gulp.dest('./app'))
		.pipe(notify({
			onLast: true,
			message: 'Done! Bower...'
		}));	
});

// UNCSS

gulp.task('uncss', function () {
	gulp.src('build/css/styles.css')
	.pipe(uncss({
		html: ['build/index.html']
	}))
	.pipe(minifyCss())
	.pipe(gulp.dest('build/css/styles.min.css'));
});

//HTML

gulp.task('html', function () {
	
});

// Compress Task

gulp.task('compress', function() {
  gulp.src(paths.images)
	.pipe(imagemin({
		progressive: true
	}))
  .pipe(gulp.dest('build/images'))
	.pipe(notify({
		onLast: true,
		message: 'Done! Images...'
	}));	
});

gulp.task('watcher',function(){
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.sass, ['css']);
	//gulp.watch(paths.images, ['compress']);
	gulp.watch('bower.json', ['bower']);
});

gulp.task('default', ['css', 'compress', 'watcher'] );