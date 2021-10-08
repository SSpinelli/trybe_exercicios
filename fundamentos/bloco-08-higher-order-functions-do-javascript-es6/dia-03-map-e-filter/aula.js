// Junte esses dois arrays em apenas um;
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsWithPrice = (arrayOfProducts, arrayOfPrices) => {
  result = {};
  arrayOfProducts.map((product, index) => {
    return result[product] = arrayOfPrices[index]
  })
  return result;
}
//
console.log(productsWithPrice(products, prices))