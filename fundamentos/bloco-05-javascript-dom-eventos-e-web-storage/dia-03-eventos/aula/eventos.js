const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// FORMA QUE EU FIZ (MUITO MAL OTIMIZADA, mas FUNCIONAL)
// const arrayLi = document.querySelectorAll('li')

// firstLi.addEventListener('click', lalala)
// secondLi.addEventListener('click', lalala2)
// thirdLi.addEventListener('click', lalala3)

// function lalala () {
//   for (let index = 0; index < arrayLi.length; index += 1) {
//     if (arrayLi[index].id = 'first-li') {
//       firstLi.className = 'tech';
//       secondLi.className = '';
//       thirdLi.className = '';
//     }
//   }
// }
// function lalala2 () {
//   for (let index = 0; index < arrayLi.length; index += 1) {
//     if (arrayLi[index].id = 'second-li') {
//       firstLi.className = '';
//       secondLi.className = 'tech';
//       thirdLi.className = '';
//     }
//   }
// }
// function lalala3 () {
//   for (let index = 0; index < arrayLi.length; index += 1) {
//     if (arrayLi[index].id = 'third-li') {
//       firstLi.className = '';
//       secondLi.className = '';
//       thirdLi.className = 'tech';
//     }
//   }
// }


// resolução da Trybe
function changeTechClass(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
}
firstLi.addEventListener('click', changeTechClass);
secondLi.addEventListener('click', changeTechClass);
thirdLi.addEventListener('click', changeTechClass)
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  document.querySelector('.tech').innerText = event.target.value;
})
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
const top3 = document.querySelector('h3');
function goToMyPortfolio() {
  window.location.href = 'https://sspinelli.github.io/'
}
top3.addEventListener('dblclick', goToMyPortfolio);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const title = document.querySelector('h1');
function changeTitleColor() {
  title.style.color = '#' + (Math.random().toString(16) + "000000").substring(2,8)
}
title.addEventListener('mouseover', changeTitleColor);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.