// Exemplos de utilização de local storage (os dados não são apagados quando a pessoa fecha a aba)
// {

console.log(localStorage.length);
localStorage.setItem('firstName', 'João');
localStorage.setItem('lastName', 'Spinelli');
console.log(localStorage.getItem('lastName'));
console.log(localStorage.length);
localStorage.removeItem('lastName');
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);
}

// Exemplos de utilização de sessionStorage (os dados são apagados assim que a pessoa fecha a aba)

{
console.log(sessionStorage.length);
sessionStorage.setItem('firstName', 'João');
sessionStorage.setItem('lastName', 'Spinelli');
console.log(sessionStorage.getItem('lastName'));
console.log(sessionStorage.length);
sessionStorage.removeItem('lastName');
console.log(sessionStorage.length);
sessionStorage.clear();
console.log(sessionStorage.length) 
}
//  É possível salvar outras estruturas em localStorage e sessionStorage;

let organization = {
  name: 'trybe',
  since: 2019
}

//  Objeto "storage" pode ser localStorage ou sessionStorage

localStorage.setItem('trybe', JSON.stringify(organization));
let org = JSON.parse(localStorage.getItem('trybe'));
console.log(org);

let classes = ["2019/set", "2019/oct"];
sessionStorage.setItem('classes', JSON.stringify(classes))
let cls = JSON.parse(sessionStorage.getItem('classes'))
console.log(cls)
