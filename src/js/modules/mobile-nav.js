import translations from '../i18n/translations.js';

function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const html = document.documentElement;

	if (!navBtn || !nav || !menuIcon) return;

	navBtn.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		nav.style.visibility = 'visible';
		document.body.classList.toggle('no-scroll', isOpen);
		html.classList.toggle('no-scroll', isOpen);
		navBtn.setAttribute('aria-expanded', String(isOpen));

		const lang = html.lang === 'ru' ? 'ru' : 'en';
		const ariaKey = isOpen ? 'aria_menu_close' : 'aria_menu';
		navBtn.dataset.i18nAria = ariaKey;
		navBtn.setAttribute('aria-label', translations[lang][ariaKey]);
	});
}

export default mobileNav;
