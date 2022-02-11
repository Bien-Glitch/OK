const page = 'html';
const body = 'body';
const mainBody = 'main.body';
const section = 'section';
const navbar = 'nav.navbar';

let client_h = window.innerHeight,
	client_w = window.innerWidth,
	screen_h = window.outerHeight,
	screen_w = window.outerWidth,
	navbar_h = $(navbar)[0].clientHeight,
	mainElement = $(mainBody).length ? mainBody : 'main',
	prevScrollPos = window.scrollY;

$(mainBody).css({
	marginTop: `calc(${navbar_h}px)`
});

alignHeroSection = () => {
	$(`${body} .hero`).css({
		height: client_h
	});
}

$(window).on({
	load: function () {
	},
	resize: function () {
		client_w = window.innerWidth;
		client_h = window.innerHeight;
		navbar_h = $(navbar)[0].clientHeight;
		alignHeroSection();
	},
	scroll: function () {
		let navbarRect = $(navbar)[0].getBoundingClientRect(),
			mainElementRect = ($('main > .hero').length ? $(`${mainElement} > section:first-child .content`)[0] : $(`${mainElement} > section:first-child`)[0]).getBoundingClientRect();
		
		if (mainElementRect.top <= navbarRect.bottom)
			$(navbar).removeClass('bg-transparent').addClass('bg-dark');
		else
			$(navbar).removeClass('bg-dark').addClass('bg-transparent');
		prevScrollPos = window.scrollY;
	}
});

alignHeroSection();
