const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'ALTERAR_NOME':
      return {
        ...state,
        nome: action.payload,
      }
    case 'ALTERAR_SOBRENOME':
      return {
        ...state,
        sobrenome: action.payload,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'ALTERAR_NOME2':
      return {
        ...state,
        nome: action.payload,
      }
    case 'ALTERAR_SOBRENOME2':
      return {
        ...state,
        sobrenome: action.payload,
      }
    default:
      return state;
  }
};

const superReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer});

const store = Redux.createStore(superReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const handleChange = (type, payload) => {
  return {
    type,
    payload,
  }
}

const altName = 'ALTERAR_NOME';
const altSurname = 'ALTERAR_SOBRENOME';
const altName2 = 'ALTERAR_NOME2';
const altSurname2 = 'ALTERAR_SOBRENOME2';

window.onload = () => {
  setTimeout(() => {
   store.dispatch(handleChange(altName, 'João Gabriel'))
   store.dispatch(handleChange(altSurname, 'Soriano Spinelli'))
   store.dispatch(handleChange(altName2, 'Rayane'))
   store.dispatch(handleChange(altSurname2, 'Dantas'))
  }, 3000);
};

const nome1 = document.querySelector('#nome-1')
const sobrenome1 = document.querySelector('#sobrenome-1')
const nome2 = document.querySelector('#nome-2')
const sobrenome2 = document.querySelector('#sobrenome-2')

const render = () => {
  const { nome, sobrenome } = store.getState().meuPrimeiroReducer;
  const { nome: secondNome, sobrenome: secondSurname } = store.getState().meuSegundoReducer;

  nome1.innerText = nome;
  sobrenome1.innerText = sobrenome;
  nome2.innerText = secondNome;
  sobrenome2.innerText = secondSurname;
}

store.subscribe(render)
