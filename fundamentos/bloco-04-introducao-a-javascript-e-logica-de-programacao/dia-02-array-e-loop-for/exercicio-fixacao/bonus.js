let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    } 
  }
}
console.log(numbers)
// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    console.log(numbers)
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    } 
  }
}
console.log(numbers)
// Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let numbers2 = [];
for (let index = 0; index < numbers3.length; index += 1) {
  if (index + 1 < numbers3.length) {
    numbers2.push(numbers3[index] * numbers3[index + 1])
  } else {
      numbers2.push(numbers3[index] * 2)
    }
}  
console.log(numbers2);
