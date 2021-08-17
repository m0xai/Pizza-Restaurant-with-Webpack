import { addAfter, insertItem } from '../utils';
import { content } from '../wrapper';
import { siteHeader } from '../components/header';
import '../css/pages/home.scss';

insertItem(content, null, 'div', 'home-main');
const homeMain = document.querySelector('#home-main');

insertItem(siteHeader, null, 'div', 'home-hero');
const homeHero = document.getElementById('home-hero');

insertItem(homeHero, 'Sehr leckeres Essen', 'h1', 'hero-title');

export { homeMain, homeHero };
