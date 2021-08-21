import homeMain from './pages/home';
import './css/main.scss';

//TODO Split Menu and About Pagea(keep first about seciton as its)

const menuButtons = document.querySelectorAll('.nav-item');
menuButtons.forEach((button) => button.addEventListener('click', router));

function router() {
  const thisElement = this;
  const getPageName = this.id.split('-')[2];
  setMenuItems(thisElement);
  dynamicImport(getPageName, thisElement);
  switchStyles(getPageName, thisElement);
}

function setMenuItems(thisElement) {
  menuButtons.forEach((item) => item.classList.remove('aktiv'));
  thisElement.classList.add('aktiv');
  thisElement.className.includes('aktiv') ? thisElement.removeEventListener('click', router) : null;
  menuButtons.forEach((item) => (!item.className.includes('aktiv') ? item.addEventListener('click', router) : null));
}

function dynamicImport(page) {
  import(`./pages/${page}`)
    .then(({ default: initPage }) => homeMain.appendChild(initPage()))
    .catch((error) => 'An error occurred while loading the component');
}

//? Hides other page contents and changes hero style
function switchStyles(page, thisElement) {
  const homeHero = document.getElementById('home-hero');
  const heroText = document.getElementById('hero-text');
  const heroTitle = document.getElementById('hero-title');
  const heroBtn = document.getElementById('book-now-btn');
  const menuWrapper = document.getElementById('home-menu-section-wrapper');
  const aboutWrapper = document.getElementById('home-about-section-wrapper');
  const contactWrapper = document.getElementById('home-contact-section-wrapper');

  function shrinkHero(param) {
    if (param) {
      homeHero.style.height = '50vh';
      heroText.style.display = 'none';
      heroBtn.style.display = 'none';
    } else {
      homeHero.style.height = '100vh';
      heroText.style.display = 'unset';
      heroBtn.style.display = 'unset';
    }
  }

  if (page == 'home') {
    shrinkHero(false);
    aboutWrapper ? homeMain.removeChild(aboutWrapper) : false;
    menuWrapper ? homeMain.removeChild(menuWrapper) : false;
    heroTitle.innerText = 'Pizzalieber Wilkommen!';

    // homeMain.removeChild(contactWrapper);
  }
  if (page == 'about') {
    shrinkHero(true);
    homeMain.removeChild(menuWrapper);
    // homeMain.removeChild(contactWrapper);
    heroTitle.innerText = 'Wir verstehen von Pizzas';
  }
  if (page == 'menu') {
    shrinkHero(true);
    aboutWrapper ? homeMain.removeChild(aboutWrapper) : false;
    heroTitle.innerText = 'Wähle nach dein Geschmack';
    // homeMain.removeChild(contactWrapper);
  }
}
//? Dynamically Importing
// const dynMenu = () => import('./pages/menu');
// const menuButton = document.getElementById('nav-btn-menu');
// menuButton.addEventListener('click', () => {
//   dynMenu()
//     .then(({ default: initMenu }) => initMenu())
//     .catch((error) => 'An error occurred while loading the component');
// });
// // Import About page dynamically
// const dynAbout = () => import('./pages/about');
// const aboutButton = document.getElementById('nav-btn-about');
// aboutButton.addEventListener('click', () => {
//   dynAbout()
//     .then(({ default: initAbout }) => initAbout())
//     .catch((error) => 'An error occurred while loading the component');
// });

// const showFooter = document.getElementById('book-now-btn');
// showFooter.addEventListener('click', initMenu);
