import { addBeforeBegin, insertItem } from '../utils';
import '../css/components/header.scss';

// Initialize Header
insertItem('content', null, 'header', 'site-header');

insertItem('site-header', null, 'nav', 'site-navbar');

insertItem('site-navbar', null, 'ul', 'site-nav-wrapper');

// Initialize site name
addBeforeBegin('site-nav-wrapper', 'Site Name', 'span', 'site-name');

// Create Nav items
function makeNavLink(name) {
  const navItemLi = document.createElement('li');
  const navItemLink = document.createElement('a');
  navItemLink.innerText = name;
  // navItemLink.href = `/${name.toLowerCase()}`;
  navItemLi.setAttribute('id', 'nav-btn-' + name.toLowerCase());
  navItemLi.setAttribute('class', 'nav-item');
  navItemLi.appendChild(navItemLink);
  return { navItemLi };
}

// Create nav items dynamically
(function () {
  const pages = ['Home', 'Menu', 'About', 'Contact'];
  for (let page of pages) {
    document.getElementById('site-nav-wrapper').insertAdjacentElement('beforeend', makeNavLink(page).navItemLi);
  }
})();

export const header = document.getElementById('site-header');
