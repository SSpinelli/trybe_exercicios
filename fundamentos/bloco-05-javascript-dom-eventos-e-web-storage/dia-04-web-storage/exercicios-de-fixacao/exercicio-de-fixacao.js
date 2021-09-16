// Declarando as variáveis de input que vão ser utilizadas para alterar os estilos;
const inputBackgroundColor = document.querySelector('#backgroundColor');
const inputFontColor = document.querySelector('#color');
const inputfontSize = document.querySelector('#fontSize');
const inputLineHeight = document.querySelector('#lineHeight');
const inputFontFamily = document.querySelector('#fontFamily');
const btn = document.querySelector('#btn');

// Declarando as variáveis que vão receber os estilos;
const background = document.querySelector('body');
const fontParagraph = document.querySelectorAll('.article p');


function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  saveValues(name, value);
}

// Adiciona os eventListener nos menus
inputBackgroundColor.addEventListener('change', handleChange);
inputFontColor.addEventListener('change', handleChange);
inputfontSize.addEventListener('change', handleChange);
inputLineHeight.addEventListener('change', handleChange);
inputFontFamily.addEventListener('change', handleChange);

function saveValues(name, value) {
  localStorage[name] = value;
}

function applyChanges() {
  for(let index = 0; index < fontParagraph.length; index += 1) {
  fontParagraph[index].style.fontFamily = localStorage.fontFamily;
  fontParagraph[index].style.color = localStorage.color;
  fontParagraph[index].style.fontSize = `${localStorage.fontSize}px`;
  fontParagraph[index].style.lineHeight = `${localStorage.lineHeight}px`;
  }
  background.style.backgroundColor = localStorage.backgroundColor;
}

btn.addEventListener('click', applyChanges);
window.onload = applyChanges();
