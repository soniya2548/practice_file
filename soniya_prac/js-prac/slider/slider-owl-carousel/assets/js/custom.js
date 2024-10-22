$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 30,
	dots: false,
	nav: true,
	items: 4,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:1000,
	autoplaySpeed: 500,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 2,
		},
		900: {
			items: 4,
		},
	},
	navText: [
		"<div class='nav-btn swiper-button-prev'></div>",
		"<div class='nav-btn swiper-button-next'></div>",
	],
});