import translations from '../i18n/translations.js';

const STORAGE_KEY = 'lorem-ipsu-lang';
const DEFAULT_LANG = 'en';

function getInitialLang() {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved && translations[saved]) return saved;
	return DEFAULT_LANG;
}

function applyTranslations(lang) {
	const dict = translations[lang];
	if (!dict) return;

	document.documentElement.lang = lang;

	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.dataset.i18n;
		if (dict[key] != null) {
			el.textContent = dict[key];
		}
	});

	document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
		const key = el.dataset.i18nAria;
		if (dict[key] != null) {
			el.setAttribute('aria-label', dict[key]);
		}
	});

	const languageEl = document.querySelector('.language');
	if (languageEl) {
		languageEl.textContent = dict.lang_label;
	}
}

function languageRename() {
	const btnLang = document.querySelector('.btn-lang');
	if (!btnLang) return;

	let currentLang = getInitialLang();
	applyTranslations(currentLang);

	btnLang.addEventListener('click', () => {
		currentLang = currentLang === 'en' ? 'ru' : 'en';
		localStorage.setItem(STORAGE_KEY, currentLang);
		applyTranslations(currentLang);
		btnLang.classList.add('is-expanded');
	});
}

export default languageRename;
