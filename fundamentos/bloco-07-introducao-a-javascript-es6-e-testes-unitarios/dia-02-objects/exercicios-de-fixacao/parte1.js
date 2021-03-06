const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para:${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, ${order.address.apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newPerson = Object.assign({}, order)
  newPerson.name = 'Luiz Silva'
  newPerson.payment.total = 50;

  return `Olá, ${newPerson.name}, o total do seu pedido de marguerita, pepperoni e ${newPerson.order.drinks.coke.type} é R$${newPerson.payment.total},00`
}

console.log(orderModifier(order));