import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasks = ['Estudar', 'Ir para academia', 'Trabalho'];

function App() {
  return <>{tasks.map((task) => Task(task))}</>;
}

export default App;
