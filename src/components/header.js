import { addAfter, addBefore, insertItem, makeNodeItem } from '../utils';
import '../css/components/header.scss';
import { content } from '../wrapper';

// Initialize Header
addBefore(content, null, 'header', 'site-header');
const siteHeader = document.getElementById('site-header');

insertItem(siteHeader, null, 'nav', 'site-navbar');
const siteNavbar = document.getElementById('site-navbar');

insertItem(siteNavbar, null, 'ul', 'site-nav-wrapper');
const siteNavWrapper = document.getElementById('site-nav-wrapper');

// Create Nav items
function makeNavLink(name) {
  const navItemLi = document.createElement('li');
  const navItemLink = document.createElement('a');
  navItemLink.innerText = name;
  navItemLink.href = `/${name.toLowerCase()}`;
  navItemLi.setAttribute('id', 'navItem' + name);
  navItemLi.setAttribute('class', 'nav-item');
  navItemLi.appendChild(navItemLink);
  return { navItemLi };
}

// Initialize site name
const siteName = document.createElement('span');
siteName.innerHTML = 'Site Name';
siteName.setAttribute('id', 'site-name');
siteNavbar.insertAdjacentElement('afterbegin', siteName);

(function () {
  const pages = ['Home', 'Menu', 'About', 'Contact'];
  for (let page of pages) {
    siteNavWrapper.insertAdjacentElement('beforeend', makeNavLink(page).navItemLi);
  }
})();

export { siteHeader };
