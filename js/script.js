$(document).ready(function () {
	const searchButton = document.querySelector('#search-button');
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');
	const body = document.body;
	const closeArea = document.querySelector('.header__close-area');


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