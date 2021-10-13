import './css/styles.css';
import markupTpl from './templates/markup.hbs';
import menu from './menu.json';



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const paletteContainer = document.querySelector('.js-menu');
  const cardsMarkup = createMarkup(menu);
  paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

  function createMarkup(menu) {
     return  menu.map(markupTpl).join('');
  }

  
  const toggleEl = document.querySelector('.theme-switch__toggle');
  toggleEl.addEventListener('change', onThemeSwitch);

  themeDefault();

  function onThemeSwitch(e) {
      if (e.target.checked) {
      localStorage.setItem('theme', Theme.DARK)
      document.body.classList.remove(Theme.LIGHT)
      document.body.classList.add(Theme.DARK)
   } else {
      localStorage.setItem('theme', Theme.LIGHT)
      document.body.classList.remove(Theme.DARK)
      document.body.classList.add(Theme.LIGHT)
   }
  }

  function themeDefault() {
     if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', Theme.LIGHT)
        document.body.classList.add(Theme.LIGHT)
     } else {
     document.body.classList.add(localStorage.getItem('theme'));
     if (localStorage.getItem('theme') === Theme.DARK) toggleEl.checked = true;
     }
  }