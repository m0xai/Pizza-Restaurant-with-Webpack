import { makeNodeItem } from '../utils';
import '../css/components/header.scss';
import { content } from '../wrapper';

const header = document.createElement('header');
header.setAttribute('id', 'header');
content.appendChild(header);

const navbar = document.createElement('nav');
navbar.setAttribute('id', 'navbar');
header.appendChild(navbar);

const navItemsWrapper = document.createElement('ul');
navItemsWrapper.setAttribute('id', 'navbarUl');
navbar.appendChild(navItemsWrapper);

function makeNavLink(name) {
  const navItemLi = document.createElement('li');
  const navItemLink = document.createElement('a');
  navItemLink.innerText = name;
  navItemLink.href = `/${name.toLowerCase()}`;
  navItemLi.setAttribute('class', 'nav-item');
  navItemLi.appendChild(navItemLink);
  return { navItemLi };
}

// Initialize site name
const siteName = document.createElement('span');
siteName.innerHTML = 'Site Name';
siteName.setAttribute('id', 'site-name');
navbar.insertAdjacentElement('afterbegin', siteName);

(function () {
  const pages = ['Home', 'Menu', 'About', 'Contact'];
  for (let page of pages) {
    navItemsWrapper.insertAdjacentElement('beforeend', makeNavLink(page).navItemLi);
  }
})();

export default header;
