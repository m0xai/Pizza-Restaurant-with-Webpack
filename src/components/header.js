import { makeTitle } from '../utils';
import '../css/components/header.scss';
import { content } from '../wrapper';

const header = document.createElement('header');
header.setAttribute('id', 'header');
content.appendChild(header);

const navbar = document.createElement('nav');
navbar.setAttribute('id', 'navbar');
header.appendChild(navbar);

// Make Site Title From utils.js
makeTitle(content, 'Site Name', 'h1');

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

(function () {
  const pages = ['Home', 'Menu', 'About', 'Contact'];
  for (let page of pages) {
    navItemsWrapper.appendChild(makeNavLink(page).navItemLi);
  }
})();

export default header;
