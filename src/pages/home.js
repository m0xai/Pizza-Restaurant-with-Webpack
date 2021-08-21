import { addAfter, insertItem, makeButton } from '../utils';
import '../css/pages/home.scss';
import header from '../components/header';
import footer from '../components/footer';

addAfter('site-header', null, 'div', 'home-main');

// Create Hero in home page
insertItem('home-main', null, 'div', 'home-hero');
insertItem('home-hero', 'Sehr leckeres Pizza', 'h1', 'hero-title');
insertItem(
  'home-hero',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
  'p',
  'hero-text'
);
makeButton('hero-text', 'Book Now', 'button', 'book-now-btn', 'btn-primary');

const homeMain = document.querySelector('#home-main');
export default homeMain;
