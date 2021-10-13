// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(names) {
  const result = names.reduce((accumulator, name) => {
    let acc = 0
    for (let key in name) {
      if (name[key] === 'A' || name[key] === 'a') {
        acc += 1
      }
    }
    return accumulator + acc
  }, 0)
  return result;
}

console.log(containsA(names));