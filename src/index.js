import { content, button } from './wrapper';
import header from './components/header';
import { makeParagraph, makeTitle } from './utils';
import './css/main.scss';

// Initialize main wrapper
document.body.appendChild(content);

// import footer dynamically
const dynFooter = () => import('./components/footer');

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
  dynFooter()
    .then(({ default: footer }) => content.appendChild(footer))
    .catch((error) => 'An error occurred while loading the component');
});

makeParagraph(content, 'Hello you all!');
makeTitle(content, 'Katya', 'h1');
