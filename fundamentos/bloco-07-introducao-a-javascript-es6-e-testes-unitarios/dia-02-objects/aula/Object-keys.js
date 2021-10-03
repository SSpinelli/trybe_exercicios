var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr))

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']


const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showcaseSkills = (object) => {
  const key = Object.keys(object);

  for (let index in key) {
    console.log(`${key[index]}, Nível: ${object[key[index]]}`)
  }
}

console.log(showcaseSkills(student2))