// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText(Tag) {
  let textToBeChanged = document.getElementsByTagName("p")[0];
  textToBeChanged.innerText = "Daqui a 2 anos eu me vejo no caminho de me tornar um desenvolvedor pleno.;";
}
changeText();
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
function changeColorOutsideSquare(Class) {
  let color = document.getElementsByClassName('main-content')[0];
  color.style.background = "rgb(76,164,109)";
}
changeColorOutsideSquare();
// Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColorInsideSquare(Class) {
  let color = document.getElementsByClassName('center-content')[0];
  color.style.background = "rgb(240,240,240)"
}
changeColorInsideSquare();
// Crie uma função que corrija o texto da tag <h1>.
function h1Corrector (tag) {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = 'Exercicío 5.1 - JavaScript'
}
h1Corrector();
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function toUppercase (tag) {
  let paragraph = document.getElementsByTagName("p")[0];
  paragraph.style.textTransform = "uppercase"
}
toUppercase();
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function printP (tag) {
  let paragraph = document.getElementsByTagName("p");
  for (let index = 0; index < paragraph.length; index += 1) {
    console.log(paragraph[index]);
  }
}
printP();