import { headerImages, homeServiceItemImages, homeCustomersImages, starsIcon } from '../imageUrls';
import { insertItem, makeImage } from '../utils';

function initAbout() {
  // Create About section on home page
  // const aboutWrapper = document.createElement('div');
  // aboutWrapper.setAttribute('id', 'home-about-section-wrapper');

  insertItem('home-main', null, 'div', 'home-about-section-wrapper');
  insertItem('home-about-section-wrapper', null, 'div', 'home-about-us-section-wrapper');
  insertItem('home-about-us-section-wrapper', null, 'div', 'home-about-us-section');
  insertItem('home-about-us-section', null, 'div', 'home-about-us-left');
  makeImage('home-about-us-left', headerImages[0], null, 'home-about-us-image');
  makeImage('home-about-us-left', headerImages[1], null, 'home-about-us-image');
  makeImage('home-about-us-left', headerImages[2], null, 'home-about-us-image');
  insertItem('home-about-us-section', null, 'div', 'home-about-us-right');
  insertItem('home-about-us-right', 'About Us', 'h2', null, 'section-title');
  insertItem('home-about-us-right', null, 'span', null, 'hr-left');
  insertItem(
    'home-about-us-right',
    'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,',
    'p',
    null,
    'section-paragraph'
  );
  insertItem(
    'home-about-us-right',
    'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is',
    'p',
    null,
    'section-paragraph'
  );
  insertItem('home-about-us-right', 'Learn More', 'button', null, 'btn-primary');

  // Init Why Us section
  insertItem('home-about-section-wrapper', null, 'div', 'home-whyus-section-wrapper');
  insertItem('home-whyus-section-wrapper', null, 'div', 'home-whyus-section');
  insertItem('home-whyus-section', null, 'div', 'home-whyus-header', 'home-section-header');
  insertItem('home-whyus-header', 'Why Choose Us?', 'h2', null, 'section-title');
  insertItem(
    'home-whyus-header',
    'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human',
    'p',
    null,
    'section-paragraph'
  );
  insertItem('home-whyus-header', null, 'hr');
  insertItem('home-whyus-section', null, 'div', 'home-whyus-services-wrapper');
  for (let i = 1; i < 7; i++) {
    insertItem('home-whyus-services-wrapper', null, 'div', 'home-whyus-service' + i, 'home-whyus-service');
    makeImage('home-whyus-service' + i, homeServiceItemImages[i]);
    insertItem('home-whyus-service' + i, 'Service ' + i, 'h3');
    insertItem(
      'home-whyus-service' + i,
      'We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services',
      'p'
    );
  }

  // Create happy customers section
  insertItem('home-about-section-wrapper', null, 'div', 'home-customers-section-wrapper');
  insertItem('home-customers-section-wrapper', null, 'div', 'home-customers-section');
  insertItem('home-customers-section', null, 'div', 'home-customers-header', 'home-section-header');
  insertItem('home-customers-header', 'Listen to our customers', 'h2', null, 'section-title');
  insertItem(
    'home-customers-header',
    'Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human',
    'p',
    null,
    'section-paragraph'
  );
  insertItem('home-customers-header', null, 'hr');
  insertItem('home-customers-section', null, 'div', 'home-customers-container');
  for (let i = 0; i < 3; i++) {
    insertItem('home-customers-container', null, 'div', 'home-customer-wrapper' + i, 'home-customer-wrapper');
    makeImage('home-customer-wrapper' + i, homeCustomersImages[i]);
    makeImage('home-customer-wrapper' + i, starsIcon);
    insertItem(
      'home-customer-wrapper' + i,
      'We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services',
      'p'
    );
    const customersName = ['Kerem Zopcuk', 'Kateryna R.', 'Max Mustermann'];
    insertItem('home-customer-wrapper' + i, customersName[i], 'h3');
  }

  insertItem('home-about-section-wrapper', null, 'div', 'home-stats-section-wrapper');
  insertItem('home-stats-section-wrapper', null, 'div', 'home-stats-section');
  const stats = [
    { sayi: '56,789', islem: 'Happy Customer' },
    { sayi: '10,023', islem: 'Pizzas Sold' },
    { sayi: '4,544', islem: 'Working Hours' },
    { sayi: '12,520', islem: 'Pizzas Delivered' },
  ];

  for (let i = 0; i < 4; i++) {
    insertItem('home-stats-section', null, 'div', 'home-stats-item' + i, 'home-stats-item');
    insertItem('home-stats-item' + i, stats[i].sayi, 'h2', null, 'section-title');
    insertItem('home-stats-item' + i, stats[i].islem, 'p');
    insertItem('home-stats-item' + i, null, 'hr');
  }
  return document.getElementById('home-about-section-wrapper');
}
export default initAbout;
