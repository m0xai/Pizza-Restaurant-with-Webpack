function makeNodeItem(parent, innerHTML, element, id, klasse) {
  const item = document.createElement(element);
  item.innerHTML = innerHTML;
  id != null ? item.setAttribute('id', id) : null;
  klasse != null ? item.classList.add(klasse) : null;
  parent.appendChild(item);
}

function makeImage(parent, src, height, width) {
  const img = document.createElement('img');
  img.src = src;
  img.height = height;
  img.width = width;
  parent.appendChild(img);
}

export { makeNodeItem, makeImage };
