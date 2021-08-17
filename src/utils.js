function insertItem(parentId, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  document.getElementById(parentId).insertAdjacentElement('beforeend', item);
}

function makeImage(parentId, src, height, width, id, klasse) {
  const img = document.createElement('img');
  img.src = src;
  img.height = height;
  img.width = width;
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

export { insertItem, makeImage, addAfter, makeButton, addBeforeBegin };
