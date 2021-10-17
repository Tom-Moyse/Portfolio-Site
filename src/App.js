import { useState } from 'react';
import './css/main.css';
import Navbar from './components/Navbar';
import CentralText from './components/CentralText';
import logo from './img/logo-shadow.svg'

function App() {
  // Where true is dark theme and false is light them
  const [viewModeDark, setViewMode] = useState(true)

  return (
    <>
    <header className={`startView ${ viewModeDark ? 'startViewDark' : 'startViewLight' }`}>
      <Navbar dark={ viewModeDark } setDark={ setViewMode }/>
      <CentralText />
      <img className='centerImage' src={logo}></img>
    </header>
    <main className='mainView' id='projects'>
      <p>Hello</p>
    </main>
    </>
  );
}

export default App;
