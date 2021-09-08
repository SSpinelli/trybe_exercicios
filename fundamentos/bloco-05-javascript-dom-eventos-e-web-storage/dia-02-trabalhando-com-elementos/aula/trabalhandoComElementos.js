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
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "#229977";
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele;
document.querySelector("#primeiroFilhoDoFilho").innerText = "Uma cerveja antes do almoço é muito bom para ficar pensando melhor";
// Acesse o primeiroFilho a partir de pai;
console.log(document.querySelector("#pai").firstChild);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta;
console.log(document.querySelector("#elementoOndeVoceEsta").previousSibling);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta;
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta;
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai;
console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);
// Crie um irmão para elementoOndeVoceEsta;

// Crie um filho para elementoOndeVoceEsta

// Crie um filho para primeiroFilhoDoFilho

// A partir desse filho criado, acesse terceiroFilho
