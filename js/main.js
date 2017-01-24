(function () {

	'use strict';

	$(function () {

		$('.testimonials .slider').slick({
			arrows: false,
			dots: true,
			appendDots: $('.paginators'),
			responsive: [{
				breakpoint: 992,
				settings: {
					dots: false
				}
			}]
		});

		$(document).on('click', '.menu-toggle a', function (e) {

			e.preventDefault();

			$('.nav-menu').toggleClass('active');
			if ($('.nav').css('height') !== '219px') {
				$('.nav').css('height', '219px');
			} else {
				$('.nav').css('height', '');
			}
		});

		$(document).on('click', '.nav-menu a', function (e) {
			$(this).closest('.nav-menu').removeClass('active');
			$('.nav').css('height', '');

			var elemId = $(this).attr('href');

			if (elemId.length > 2) {
				var top = $(elemId).offset().top;

				$('body').animate({
					scrollTop: top
				}, 1500);
			}

		});

	});

})();
