const footer = document.createElement('footer');

const m0xaiUrl = document.createElement('a');
m0xaiUrl.href = `https://keremz.de/`;
m0xaiUrl.innerText = 'Kerem Zopcuk';
const attribute = document.createElement('p');
attribute.innerHTML = `Diese Webseite wurde von ${m0xaiUrl} während Lernen des Webpacks erstellt.`;

footer.appendChild(attribute);

export default footer;
