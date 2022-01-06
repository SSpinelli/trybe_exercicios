const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = () => ({
  type: 'NEXT_COLOR',
})

const previousColor = () => ({
  type: 'PREVIOUS_COLOR',
})

const randomColor = () => {
  const newColor = criarCor();
  let arrayColor = store.getState().colors;
  store.getState().colors = [...arrayColor, newColor]
  return {
    type: 'RANDOM_COLOR'
  }
}

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: (state.index === state.colors.length - 1) ? state.index = 0 : state.index += 1,
      }
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: (state.index === 0) ? state.index = state.colors.length - 1 : state.index -= 1,
      }
    case "RANDOM_COLOR":
      return {
        ...state,
        index: state.colors.length - 1
      }
    default:
      return state
  }
}

const store = Redux.createStore(reducer);

const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');
const colorName = document.getElementById('value');

const render = () => {
  const { colors, index } = store.getState();
  document.body.style.backgroundColor = colors[index];
  colorName.innerText = colors[index]
}

previousBtn.addEventListener('click', () => store.dispatch(previousColor()));
nextBtn.addEventListener('click', () => store.dispatch(nextColor()));
randomBtn.addEventListener('click', () => store.dispatch(randomColor()));

store.subscribe(render)
