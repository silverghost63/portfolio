$(document).ready(function() {

	console.log('scripts.js!');
	
	$('.tag__item').click(function() {
		$('.tag__item').removeClass('tag__item--active');
		$(this).addClass('tag__item--active');
	});	
	
	// Instantiate MixItUp:
	$(function() {
		$('.portfolio__container').mixItUp();
	});	
	
	/* Circle progress */	
	$('.progressbar').each(function() {
		console.log(this);
		var percent = $(this).find('.circle').attr('data-percent');
		$(this).find('.circle').circleProgress({
			size: 170,
			startAngle: -Math.PI / 2,
			value: percent / 100,
			emptyFill: "rgba(255, 255, 255, .4)",
			thickness: 15,
			fill: {color: '#ffffff'}
		})		
	});
	
	
	$(".sandwich").click(function() {
		console.log('click');
		$(".sandwich__wrap").toggleClass("sandwich__wrap--active");
	});	
	
});