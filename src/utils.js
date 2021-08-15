function makeParagraph(parent, text) {
  const p = document.createElement('p');
  p.innerText = text;
  parent.appendChild(p);
}

function makeTitle(parent, text, size) {
  const title = document.createElement(size);
  title.innerText = text;
  parent.appendChild(title);
}

function makeImage(parent, src, height, width) {
  const img = document.createElement('img');
  img.src = src;
  img.height = height;
  img.width = width;
  parent.appendChild(img);
}

export { makeParagraph, makeTitle };
