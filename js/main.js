const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	// effect: 'fade',
	slidesPerView: 1,
	spaceBetween: 60,
	slidesPerGroup: 1,
	initialSlide: 2,


	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickble: true,
		dynamicBullets: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		sensitivity: 1,

	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		989: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

console.log(typeof swiper);