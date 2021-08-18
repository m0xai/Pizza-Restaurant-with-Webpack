import { addAfter, insertItem, makeButton, makeImage } from '../utils';
import { headerImages, homeMenuItemImgs } from '../imageUrls';
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
makeImage('home-about-left', headerImages[0], null, 'home-about-image');
makeImage('home-about-left', headerImages[1], null, 'home-about-image');
makeImage('home-about-left', headerImages[2], null, 'home-about-image');
insertItem('home-about-section', null, 'div', 'home-about-right');
insertItem('home-about-right', 'About Us', 'h2', null, 'section-title');
insertItem('home-about-right', null, 'span', null, 'hr-left');
insertItem(
  'home-about-right',
  'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,',
  'p',
  null,
  'section-paragraph'
);
insertItem(
  'home-about-right',
  'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is',
  'p',
  null,
  'section-paragraph'
);
insertItem('home-about-right', 'Learn More', 'button', null, 'btn-primary');

// Create menu section in home
insertItem('home-main', null, 'div', 'home-menu-section-wrapper');
insertItem('home-menu-section-wrapper', null, 'div', 'home-menu-section');
insertItem('home-menu-section', null, 'div', 'home-menu-header');
insertItem('home-menu-header', 'Our Menu', 'h2', null, 'section-title');
insertItem(
  'home-menu-header',
  'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human',
  'p',
  null,
  'section-paragraph'
);
insertItem('home-menu-header', null, 'hr');
insertItem('home-menu-section', null, 'div', 'home-menu-items-section');
const menuItemImageUrls = [];
for (let i = 0; i < 8; i++) {
  insertItem('home-menu-items-section', null, 'div', 'home-menu-item-wrapper' + i, 'home-menu-item-wrapper');
  makeImage('home-menu-item-wrapper' + i, homeMenuItemImgs[i], null, 'home-menu-image');
  // Home Menu Item Meta Section
  insertItem('home-menu-item-wrapper' + i, null, 'div', 'home-menu-item-meta' + i, 'home-menu-item-meta');
  insertItem('home-menu-item-meta' + i, null, 'div', 'home-menu-item-title-price' + i, 'home-menu-item-title-price');
  insertItem('home-menu-item-title-price' + i, 'Pizza Margaritta', 'span', null, 'home-menu-item-title');
  insertItem('home-menu-item-title-price' + i, '€10', 'span', null, 'home-menu-item-price');
  insertItem(
    'home-menu-item-meta' + i,
    'Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque',
    'p',
    null,
    'home-menu-item-description'
  );
  insertItem('home-menu-item-meta' + i, 'Jetzt Bestellen', 'button', null, 'home-menu-item-order-btn');
}
// Menu Itens List After
insertItem('home-menu-section', 'See More', 'button', null, 'btn-primary');

insertItem('home-main', null, 'div', 'home-whyus-section-wrapper');
insertItem('home-whyus-section-wrapper', null, 'div', 'home-whyus-section');

export const homeMain = document.querySelector('#home-main');
