// ! Better Element Creator
// const elementor = (parent, element, attr, attrVal) => {
//   const el = document.createElement(element);
//   for (let i = 0; i < attr.length; i++) {
//     el.setAttribute(attr[i], attrVal[i]);
//   }
//   parent.appendChild(el);
//   return el;
// };

function insertItem(parentId, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  document.getElementById(parentId).insertAdjacentElement('beforeend', item);
}

function makeImage(parentId, src, id, klasse) {
  const img = document.createElement('img');
  img.src = src;
  id != null ? img.setAttribute('id', id) : undefined;
  klasse != null ? img.classList.add(klasse) : undefined;
  document.getElementById(parentId).appendChild(img);
}

function addAfter(itemBeforeId, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  document.getElementById(itemBeforeId).insertAdjacentElement('afterend', item);
}

function addBeforeBegin(itemAfterId, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  document.getElementById(itemAfterId).insertAdjacentElement('beforebegin', item);
}

function makeButton(itemBeforeId, innerHTML, element, id, klasse) {
  const button = document.createElement(element);
  button.innerHTML = innerHTML;
  button.setAttribute('type', 'button');
  id != null ? button.setAttribute('id', id) : null;
  klasse != null ? button.classList.add(klasse) : null;
  document.getElementById(itemBeforeId).insertAdjacentElement('afterend', button);
}

function insertFormEl(parent, innerHTML, element, id, klasse, type, forParam, name) {
  const formEl = document.createElement(element);
  formEl.innerHTML = innerHTML;
  type ? formEl.setAttribute('type', type) : null;
  forParam ? formEl.setAttribute('for', forParam) : null;
  name ? formEl.setAttribute('name', name) : null;
  id != null ? formEl.setAttribute('id', id) : null;
  klasse != null ? formEl.classList.add(klasse) : null;
  document.getElementById(parent).insertAdjacentElement('beforeend', formEl);
}

export { insertItem, makeImage, addAfter, makeButton, addBeforeBegin, insertFormEl };
