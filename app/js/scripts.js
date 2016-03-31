$(document).ready(function() {
	
	$('.tag__item').click(function() {
		$('.tag__item').removeClass('tag__item--active');
		$(this).addClass('tag__item--active');		
	});	

	new WOW().init();
	
	// Instantiate MixItUp:
	$(function() {
		$('.portfolio__container').mixItUp();
	});	
	
	(function() {
		function animateElements() {
		$('.progressbar-item').each(function() {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle').circleProgress({
					size: 170,
					startAngle: -Math.PI / 2,
					value: percent / 100,
					thickness: 15,
					emptyFill: "rgba(255, 255, 255, .4)",	
					fill: { color: '#ffffff' }
				})
			}
		});
		}
		// Show animated elements
		animateElements();
		$(window).scroll(animateElements);
	})();
	
	/* Initialize Swiper */
	var swiper_team = new Swiper('#testimonial-swiper-container', {
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'		
	});		
		
	$(".sandwich").click(function() {
		$(".sandwich__wrap").toggleClass("sandwich__wrap--active");
		$('#path-logotype').toggleClass("svg__logotype--active");
		$('#navigation').fadeToggle();
	});	
	
});