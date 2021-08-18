import { homeMain } from '../pages/home';
import { addAfter, insertItem, makeButton } from '../utils';
import '../css/components/footer.scss';

addAfter(homeMain.id, null, 'div', 'footer-wrapper');
const footerWrapper = document.getElementById('footer-wrapper');
insertItem('footer-wrapper', null, 'div', 'footer-top-section');
insertItem('footer-top-section', null, 'div', 'footer-top-section-items');

for (let i = 0; i < 3; i++) {
  insertItem('footer-top-section-items', null, 'div', 'footer-part' + i, 'footer-part');
}

insertItem('footer-part0', 'Site Name', 'h3', 'footer-site-name', 'h3-title-cursiv');
insertItem(
  'footer-part0',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur',
  'p',
  'footer-about-p'
);

insertItem('footer-part1', 'Contact', 'h3', null, 'h3-title-cursiv');
const contactDetails = [
  'Call: +76 (094) 754 43 7I',
  'Timing: Everyday from 10am - 11pm',
  'Address: 817 N California Ave Chicago, IL 60622',
];
for (let i = 0; i < 3; i++) {
  insertItem('footer-part1', contactDetails[i], 'p');
}

insertItem('footer-part2', 'Subscribe', 'h3', 'subscribe-title', 'h3-title-cursiv');

// const subscribeLabel = document.createElement('label');
// subscribeLabel.innerText = 'E-Mail';
// subscribeLabel.htmlFor = 'email-input';
// document.getElementById('subscribe-title').insertAdjacentElement('afterend', subscribeLabel);
insertItem('footer-part2', null, 'input', 'email-input');
document.getElementById('email-input').placeholder = 'E-Mail';
insertItem('footer-part2', 'Subscribe', 'button', 'subscribe-button');

insertItem('footer-wrapper', null, 'div', 'footer-bottom-section');

export default footerWrapper;
