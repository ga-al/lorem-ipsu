# Lorem IPSU

Вёрстка лендинга по тестовому заданию: адаптивная шапка, бегущие иконки, блок новостей и футер.

**[Смотреть демо](https://ga-al.github.io/lorem-ipsu/)** · **[Исходники](https://github.com/ga-al/lorem-ipsu)**

## Стек

- Pug
- SCSS (BEM-подобные блоки, CSS-переменные, миксины брейкпоинтов)
- Gulp 4 (сборка, live reload, SVG sprite)
- Vanilla JS (ES-модули + простой i18n)

## Запуск

```bash
npm install
npm start
```

Сборка → `build/`, live reload открывается автоматически.

Только сборка без сервера:

```bash
npm run build
```

## Структура

```
src/
  pug/          # разметка и блоки
  scss/         # стили (base + blocks)
  js/           # модули: меню, i18n, активный пост, скролл
  img/          # изображения и svgicons для спрайта
gulp/           # задачи Gulp
.github/        # деплой демо на GitHub Pages
```

## Что реализовано

- Адаптив desktop → tablet → mobile (включая мобильное меню)
- SVG-sprite для иконок
- Sticky footer через flex
- EN/RU переключение (`src/js/i18n/translations.js`)
- Active-состояние постов, плавный скролл ленты новостей

## Деплой

При пуше в `main` GitHub Actions собирает проект и публикует `build/` на Pages.

В настройках репозитория: **Settings → Pages → Source → GitHub Actions**.
