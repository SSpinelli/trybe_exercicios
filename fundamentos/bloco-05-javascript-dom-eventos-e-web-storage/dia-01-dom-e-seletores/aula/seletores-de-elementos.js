// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("paragraph").innerText = "Bastardos Inglorios";
// // Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerText = "The Beatles";
// // Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Banda Favorita";
document.getElementById("page-title").innerText = "Filme preferido";
// Recupere os seus parágrafos via código JavaScript, usando a função getElementByClassName;
document.getElementsByClassName("allParagraphs")[0].style.background = "#229977";
document.getElementsByClassName("allParagraphs")[0].style.color = "#fff";
// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
document.getElementsByTagName("h4")[0].style.color = "blue";
