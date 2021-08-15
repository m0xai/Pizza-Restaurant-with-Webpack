export const content = document.createElement('div');
content.setAttribute('id', 'content');

export const button = document.createElement('button');
button.innerText = 'Hello There!';
button.setAttribute('id', 'menu-button');

content.appendChild(button);
