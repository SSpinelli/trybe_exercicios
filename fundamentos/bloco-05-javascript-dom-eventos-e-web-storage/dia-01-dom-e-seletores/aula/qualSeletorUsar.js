// Alterando a cor do Header
document.querySelector("#header-container").style.background = "#229977"
// Alterando a cor do H3 de emergenciais
function changeColor(elements, color) {
  let selectedItems = document.querySelectorAll(elements);
  for (let index = 0; index < selectedItems.length; index += 1) {
    selectedItems[index].style.backgroundColor = color;
  }
}
console.log(changeColor(".emergency-tasks h3", "#993C22"))
// Alterando o background dos urgentes e importantes
document.querySelector(".emergency-tasks").style.backgroundColor = "#58AA93";
// Alterando a cor do H3 de não emergenciais
function changeColor2(elements, color) {
  let selectedItems = document.querySelectorAll(elements);
  for (let index = 0; index < selectedItems.length; index += 1) {
    selectedItems[index].style.backgroundColor = color;
  }
}
console.log(changeColor2(".no-emergency-tasks h3", "#1A992D"))
// Alterando o background dos não urgentes e não importantes
document.querySelector(".no-emergency-tasks").style.backgroundColor = "#A6468C"
// Alterando o background do footer
document.querySelector("#footer-container").style.backgroundColor = "#229977"
document.querySelector("#footer-container").style.marginTop = "370px"