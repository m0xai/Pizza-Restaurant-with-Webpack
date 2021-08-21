// R. Itarumirim, numero 48 - Paulo VI, Belo Horizonte - MG, 31998-060, Brezilya
import { insertItem, makeImage, insertFormEl } from '../utils';
import { mapImg } from '../imageUrls';
import '../css/pages/contact.scss';

function initContact() {
  insertItem('home-main', null, 'div', 'home-contact-section-wrapper');

  insertItem('home-contact-section-wrapper', null, 'div', 'home-contact-section');

  // Contact page left section
  insertItem('home-contact-section', null, 'div', 'home-contact-left-section');
  insertItem('home-contact-left-section', 'Contact', 'h2', 'contact-page-title', 'section-title');
  insertItem('home-contact-left-section', null, 'span', null, 'hr-left');
  insertItem(
    'home-contact-left-section',
    'R. Itarumirim, numero 48 - Paulo VI, Belo Horizonte - MG, 31998-060, Brasil',
    'adress',
    'contact-adress'
  );
  makeImage('home-contact-left-section', mapImg, 'contact-map');

  // Contact Page right section
  insertItem('home-contact-section', null, 'div', 'home-contact-right-section');
  insertItem('home-contact-right-section', null, 'form', 'contact-page-form');

  // Insert Form elements
  insertFormEl('contact-page-form', 'Name', 'label', 'contact-page-form-name-label', null, null, 'contact-page-form-name-input');
  insertFormEl('contact-page-form', null, 'input', 'contact-page-form-name-input', 'contact-input-element', 'name', null, 'name');

  insertFormEl('contact-page-form', 'Mail', 'label', 'contact-page-form-mail-label', null, null, 'contact-page-form-mail-input');
  insertFormEl('contact-page-form', null, 'input', 'contact-page-form-mail-input', 'contact-input-element', 'message', null, 'email');

  insertFormEl('contact-page-form', 'Message', 'label', 'contact-page-form-message-label', null, null, 'contact-page-form-message-input');
  insertFormEl('contact-page-form', null, 'textarea', 'contact-page-form-message-input', 'contact-input-element', null, null, 'message');

  insertItem('contact-page-form', 'Send Message', 'button', null, 'btn-primary');
}

export default initContact;
