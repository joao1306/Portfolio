import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Sobre from './components/about/sobre';
import Skills from './components/skills/skills';
import Projetos from './components/projects/projetos';
import Contato from './components/contact/contato';

function App() {
  return (
    <div className="App">
      <Home/>
      <Sobre/>
      <Skills/>
      <Projetos/>
      <Contato/>
    </div>
  );
}

export default App;
