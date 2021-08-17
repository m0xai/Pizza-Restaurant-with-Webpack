import { addAfter, insertItem, makeButton, makeImage } from '../utils';
import homeAboutImg1 from '../img/pexels-daria-shevtsova-1260968.jpg';
import homeAboutImg2 from '../img/pexels-christina-voinova-7368032.jpg';
import homeAboutImg3 from '../img/pexels-brett-jordan-825661.jpg';
import '../css/pages/home.scss';
import header from '../components/header';

addAfter('site-header', null, 'div', 'home-main');

// Create Hero in home page
insertItem('home-main', null, 'div', 'home-hero');
insertItem('home-hero', 'Sehr leckeres Essen', 'h1', 'hero-title');
insertItem(
  'home-hero',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
  'p',
  'hero-text'
);
makeButton('hero-text', 'Book Now', 'button', 'book-now-btn', 'btn-primary');

// Create About section on home page
insertItem('home-main', null, 'div', 'home-about-section-wrapper');
insertItem('home-about-section-wrapper', null, 'div', 'home-about-section');
insertItem('home-about-section', null, 'div', 'home-about-left');
makeImage('home-about-left', homeAboutImg1, 960, 640, null, 'home-about-image');
makeImage('home-about-left', homeAboutImg2, 265, 239, null, 'home-about-image');
makeImage('home-about-left', homeAboutImg3, 265, 239, null, 'home-about-image');
insertItem('home-about-section', null, 'div', 'home-about-right');

insertItem('home-main', null, 'div', 'home-menu-section-wrapper');
insertItem('home-menu-section-wrapper', null, 'div', 'home-menu-section');
insertItem('home-main', null, 'div', 'home-whyus-section-wrapper');
insertItem('home-whyus-section-wrapper', null, 'div', 'home-whyus-section');

export const homeMain = document.querySelector('#home-main');
