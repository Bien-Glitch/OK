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
	prevScrollPos = window.scrollY;

$(mainBody).css({
	marginTop: `calc(${navbar_h}px)`
});

$(`${body} .hero`).css({
	height: '100vh'
})
