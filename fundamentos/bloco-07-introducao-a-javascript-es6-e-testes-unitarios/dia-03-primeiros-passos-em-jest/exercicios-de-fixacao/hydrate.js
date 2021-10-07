// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

const hydrate = (string) => {
  let numberOfDrinks = string.split('').filter(n => (Number(n) || n == 0)).join('');

  const arrayOfDrinksInString = numberOfDrinks.match(/\d+/g)
  const arrayOfDrinksInNumber = arrayOfDrinksInString.map((drinks) => Number(drinks));
  let totalOfDrinks = 0;
  
  arrayOfDrinksInNumber.forEach((number) => {
    totalOfDrinks += number;
  })

  return (totalOfDrinks === 1) ? `${totalOfDrinks} copo de água` : `${totalOfDrinks} copos de água`;
}

module.exports = hydrate;