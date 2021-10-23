import { useState } from 'react';
import './css/main.css';
import Navbar from './components/Navbar';
import CentralText from './components/CentralText';
import About from './components/About';
import logow from './img/logo-white.svg';
import logob from './img/logo-black.svg';
import 'animate.css';
import Squiggles from './components/Squiggles';

function App() {
  // Where true is dark theme and false is light them
  const [viewModeDark, setViewMode] = useState(true)
  const [showAbout, toggleAbout] = useState(false)



  return (
    <>
    <header className={`startView ${ viewModeDark ? 'startViewDark' : 'startViewLight' }`}>
      {showAbout ? <About /> : null}
      <Squiggles dark={ viewModeDark }/>
      <Navbar dark={ viewModeDark } setDark={ setViewMode }/>
      <CentralText dark={ viewModeDark } showAbout={ toggleAbout }/>
      <img className='centerImage' src={viewModeDark ? logow : logob}></img>
    </header>
    <main className='mainView' id='projects'>
      <p>Hello</p>
    </main>
    </>
  );
}

export default App;
