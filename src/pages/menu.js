import { insertItem, makeImage } from '../utils';
import { homeMenuItemImgs } from '../imageUrls';
import '../css/pages/menu.scss';

function initMenu() {
  // Create menu section
  insertItem('home-main', null, 'div', 'home-menu-section-wrapper');
  insertItem('home-menu-section-wrapper', null, 'div', 'home-menu-section');
  insertItem('home-menu-section', null, 'div', 'home-menu-header', 'home-section-header');
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

  for (let i = 0; i < 8; i++) {
    insertItem('home-menu-items-section', null, 'div', 'home-menu-item-wrapper' + i, 'home-menu-item-wrapper');
    makeImage('home-menu-item-wrapper' + i, homeMenuItemImgs[i], null, 'home-menu-image');
    // Home Menu Item Meta Section
    insertItem('home-menu-item-wrapper' + i, null, 'div', 'home-menu-item-meta' + i, 'home-menu-item-meta');
    insertItem('home-menu-item-meta' + i, null, 'div', 'home-menu-item-title-price' + i, 'home-menu-item-title-price');
    insertItem('home-menu-item-title-price' + i, 'Pizza Margherita', 'span', null, 'home-menu-item-title');
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
  // Menu Items List After
  insertItem('home-menu-section', 'See More', 'button', null, 'btn-primary');
  return document.getElementById('home-menu-section-wrapper');
}
export default initMenu;
