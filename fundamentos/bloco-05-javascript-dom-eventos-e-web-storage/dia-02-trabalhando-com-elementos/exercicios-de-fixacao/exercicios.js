// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const pai = document.body;
const titlePage = document.createElement('h1');
titlePage.innerText = 'Exercício 5.2 - JavaScript DOM';
pai.appendChild(titlePage);
// Adicione a tag main com a classe main-content como filho da tag body;
const mainPart = document.createElement('main')
mainPart.className = 'main-content';
pai.appendChild(mainPart);
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let firstSection = document.createElement('section');
firstSection.className = 'center-content';
mainPart.appendChild(firstSection);
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let firstParagraph = document.createElement('p');
firstParagraph.innerText = 'Enquanto essa dualidade patética perdurar, o Brasil nunca será uma grande nação';
firstSection.appendChild(firstParagraph);
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainPart.appendChild(leftSection);
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainPart.appendChild(rightSection);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let leftImage = document.createElement('img');
leftImage.src = 'https://picsum.photos/200';
leftImage.className = 'small-image';
leftSection.appendChild(leftImage)
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let rightList = document.createElement('ul');
rightList.className = 'right-list';
rightSection.appendChild(rightList);

let listItems = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < listItems.length; index += 1) {
  let item = listItems[index];

  let listOfNumbers = document.createElement('li');
  listOfNumbers.innerText = item;

  rightList.appendChild(listOfNumbers);
}
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let tituloH3Um = document.createElement('h3');
let tituloH3Dois = document.createElement('h3');
let tituloH3Tres = document.createElement('h3');
mainPart.appendChild(tituloH3Um);
mainPart.appendChild(tituloH3Dois);
mainPart.appendChild(tituloH3Tres);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções;
// Adicione a classe title na tag h1 criada;
titlePage.className = 'title';
// Adicione a classe description nas 3 tags h3 criadas;
tituloH3Um.className = 'description';
tituloH3Dois.className = 'description';
tituloH3Tres.className = 'description';
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
mainPart.removeChild(leftSection)
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
rightSection.style.marginRight = 'auto';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
firstSection.style.background = '#229977';
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
rightList.lastChild.remove();
rightList.lastChild.remove();
