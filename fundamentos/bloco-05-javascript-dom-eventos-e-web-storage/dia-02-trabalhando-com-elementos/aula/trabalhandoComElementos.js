// parentNode - retorna o nó pai;
// parentElement - retorna o elemento pai;
// childNodes - retorna um NodeList com todos os nós filhos;
// children - retorna um HTML Collection com todos os elementos filhos;
// firstChild - retorna o primeiro nó filho;
// firstElementChild - retorna o primeiro elemento filho;
// lastChild - retorna o último nó filho;
// lastElementChild - retorna o último elemento filho;
// nextSibling - retorna o próximo nó;
// nextElementSibling - retorna o próximo elemento;
// previousSibling - retorna o nó anterior;
// previousElementSibling - retorna o elemento anterior;

// Acesse o elemento elementoOndeVoceEsta;
console.log(document.querySelector("#elementoOndeVoceEsta"));
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele;
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode);
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele;
document.querySelector('#primeiroFilhoDoFilho').innerText = "A melhor culinária é a italiana";
// Acesse o primeiroFilho a partir de pai;
console.log(document.querySelector('#pai').firstElementChild);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta;
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta;
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta;
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai;
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);
// Crie um irmão para elementoOndeVoceEsta;
const pai = document.querySelector('#pai');
const irmao = document.createElement('section');
irmao.id = 'irmao';
pai.appendChild(irmao);
console.log(document.querySelector('#irmao'));
// Crie um filho para elementoOndeVoceEsta
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const seuFilho = document.createElement('section');
seuFilho.id = 'seuFilho';
elementoOndeVoceEsta.appendChild(seuFilho);
console.log(document.querySelector('#seuFilho'));
// Crie um filho para primeiroFilhoDoFilho
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const filhoDoPrimeiroFilho = document.createElement('section');
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho);
console.log(document.querySelector('#filhoDoPrimeiroFilho'))
// A partir desse filho criado, acesse terceiroFilho
console.log(document.querySelector('#filhoDoPrimeiroFilho').parentElement.parentElement.nextElementSibling)
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai2 = document.getElementById('pai');
for (let index = pai2.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai2.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}
document.getElementById('segundoEUltimoFilhoDoFilho').remove();
document.getElementById('seuFilho').remove();
document.getElementById('filhoDoPrimeiroFilho').remove();

console.log(document.getElementById('paiDoPai'))

