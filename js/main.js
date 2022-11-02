const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	// effect: 'fade',
	slidesPerView: 1,
	spaceBetween: 60,
	slidesPerGroup: 1,
	initialSlide: 3,


	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickble: true,
		dynamicBullets: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// mousewheel: {
	// 	sensitivity: 1,

	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		960: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});







const swiperComfort = new Swiper('.swiper-zone', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 60,
	initialSlide: 1,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickble: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

let form = document.querySelector('.js-form'),
	formInputs = document.querySelectorAll('.js-input'),
	// inputName = document.querySelectorAll('.input__name'),
	inputPhone = document.querySelector('.input__tel'),
	inputCheckbox = document.querySelector('.checkox-input');


function validatePhone(phone) {
	let re = /^[1-9]+[0-9]*$/;
	return re.test(String(phone));
}

form.onsubmit = function () {

	let phoneValue = inputPhone.value;
	let emptyInputs = Array.from(formInputs).filter(input => input.value === '');


	formInputs.forEach(function (input) {
		if (input.value === '') {
			input.classList.add('error')
		} else {
			input.classList.remove('error')
		}
	});

	if (emptyInputs.length !== 0) {
		return false;
	}

	if (!validatePhone(phoneValue)) {
		inputPhone.classList.add('error');
		return false;
	} else {
		inputPhone.classList.remove('error');
	}


	if (!inputCheckbox.checked) {
		document.querySelector('.checkbox__label').classList.add('error__checked');
		return false;
	} else {
		document.querySelector('.checkbox__label').classList.remove('error__checked');
	}

}
