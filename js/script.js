$(document).ready(function () {
	const searchButton = document.querySelector('#search-button');
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');
	const body = document.body;
	const closeArea = document.querySelector('.header__close-area');

	//dropdown menu
	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	if (isMobile.any()) {
		body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');
		for (i = 0; i < arrow.length; i++) {
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	} else {
		body.classList.add('mouse');
	}


	//header search
	searchButton.onclick = function () {
		if (document.documentElement.clientWidth < 768) {
			$('.header__logo').fadeOut(200);
			$('#search-form').delay(200).fadeIn(200);
			$('.header__open-search-button').fadeOut(200);
			$('.header__close-search-button').delay(200).fadeIn(200);
		} else {
			$('#header-menu').fadeOut(200);
			$('#search-form').delay(200).fadeIn(200);
			$('.header__open-search-button').fadeOut(200);
			$('.header__close-search-button').delay(200).fadeIn(200);
		}
	}

	$('.header__close-search-button').on('click', function () {
		if (document.documentElement.clientWidth < 768) {
			$('#search-form').fadeOut(200);
			$('.header__logo').delay(200).fadeIn(200);
			$('.header__close-search-button').fadeOut(200);
			$('.header__open-search-button').delay(200).fadeIn(200);
		} else {
			$('#search-form').fadeOut(200);
			$('#header-menu').delay(200).fadeIn(200);
			$('.header__close-search-button').fadeOut(200);
			$('.header__open-search-button').delay(200).fadeIn(200);
		}
	});


	//burger
	burger.onclick = function () {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		closeArea.classList.toggle('active');
		body.classList.toggle('lock');
		$('.header__logo').fadeIn(200);
		$('#search-form').delay(200).fadeOut(200);
		$('#header-menu').slideDown(300);
		$('.header__close-search-button').fadeOut(200);
		$('.header__open-search-button').fadeIn(200);
		closeArea.onclick = function () {
			burger.classList.toggle('active');
			menu.classList.toggle('active');
			closeArea.classList.toggle('active');
		}
	}
});