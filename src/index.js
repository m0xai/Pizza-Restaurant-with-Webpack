import { content, button } from './wrapper';
import header from './components/header';
import home from './pages/home';
import { makeNodeItem, makeImage } from './utils';
import './css/main.scss';

// Initialize main wrapper
document.body.appendChild(content);

//? Dynamically Importing
// const dynFooter = () => import('./components/footer');
// const menuButton = document.getElementById('menu-button');
// menuButton.addEventListener('click', () => {
//   dynFooter()
//     .then(({ default: footer }) => content.appendChild(footer))
//     .catch((error) => 'An error occurred while loading the component');
// });

makeNodeItem(content, '', 'div', 'mdIci', 'kerem');
const mdIci = document.getElementById('mdIci');
makeNodeItem(mdIci, 'Merhaba Dunya', 'h2', 'merhabeDunya', 'none');
makeNodeItem(content, 'Hello you all!', 'p', null, 'kerem');
makeNodeItem(content, 'Katya', 'h1');
