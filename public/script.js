// dom elements
let form;
let authorUrlField;
let output;


// auto initialization
init();


function init() {
  // get dom elements
  form = document.getElementById('form');
  authorUrlField = document.getElementById('authorUrl');
  output = document.getElementById('output');

  // add event listeners
  form.addEventListener('submit', onFormSubmit);
}

// events
function onFormSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  clearOutput();

  const sourceUrl = authorUrlField.value;
  const convertedUrl = convertURL(sourceUrl);

  showOutput(convertedUrl);
}

function convertURL(source) {
  // convert author to publish
  let convertedStr = source.replace('https://author-', 'https://publish-');

  // remove mention of editor
  convertedStr = convertedStr.replace('/ui#/aem/editor.html', '');

  // remove vars
  const url = new URL(convertedStr);
  url.search = '';

  return url.toString();
}

function showOutput(value) {
  let term = document.createElement('dt');
  term.innerText = 'URL converti';

  let detail = document.createElement('dd');
  detail.innerText = value;

  let list = document.createElement('dl');
  list.classList = 'converted-url';
  list.appendChild(term);
  list.appendChild(detail);

  output.classList.add('output');
  output.appendChild(list);
}

function clearOutput() {
  output.classList.remove('output');
  output.innerHTML = '';
}
