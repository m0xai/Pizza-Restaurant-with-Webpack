import { homeMain } from './pages/home';
import header from './components/header';
import { appendFooter } from './components/footer';
import { insertItem, makeImage } from './utils';
import './css/main.scss';

//? Dynamically Importing
// const dynFooter = () => import('./components/footer');
// const menuButton = document.getElementById('menu-button');
// menuButton.addEventListener('click', () => {
//   dynFooter()
//     .then(({ default: footer }) => content.appendChild(footer))
//     .catch((error) => 'An error occurred while loading the component');
// });

const showFooter = document.getElementById('book-now-btn');
showFooter.addEventListener('click', appendFooter);

insertItem('content', '', 'div', 'mdIci', 'kerem');
insertItem('mdIci', 'Merhaba Dunya', 'h2', 'merhabeDunya', 'none');
insertItem('content', 'Hello you all!', 'p', null, 'kerem');
insertItem('content', 'Katya', 'h1');
