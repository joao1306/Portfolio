import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Sobre from './components/about/sobre';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <Sobre/>
      <Skills/>
    </div>
  );
}

export default App;
