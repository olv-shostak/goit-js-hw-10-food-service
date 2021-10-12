import './sass/main.scss';
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