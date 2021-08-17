function insertItem(parent, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  parent.appendChild(item);
}

function makeImage(parent, src, height, width, id, klasse) {
  const img = document.createElement('img');
  img.src = src;
  img.height = height;
  img.width = width;
  id != null ? img.setAttribute('id', id) : null;
  klasse != null ? img.classList.add(klasse) : null;
  parent.appendChild(img);
}

function addAfter(itemBefore, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  itemBefore.insertAdjacentElement('afterend', item);
}

function addBefore(itemBefore, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  itemBefore.insertAdjacentElement('beforebegin', item);
}

export { insertItem, makeImage, addAfter, addBefore };
