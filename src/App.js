import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import GraphicProjects from './components/GraphicProjects/GraphicProjects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';


import './App.scss';
import {useState} from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    <Menu />
      <div className="sections">
        <About />
        <Projects />
        <GraphicProjects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;