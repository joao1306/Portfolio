import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Sobre from './components/about/sobre';
import Projetos from './components/projects/projetos';

function App() {
  return (
    <div className="App">
      <Home/>
      <Sobre/>
      <Projetos/>
    </div>
  );
}

export default App;
