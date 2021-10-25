import { useState } from 'react';
import './css/main.css';
import Navbar from './components/Navbar';
import CentralText from './components/CentralText';
import About from './components/About';
import logow from './img/logo-white.svg';
import logob from './img/logo-black.svg';
import 'animate.css';
import Squiggles from './components/Squiggles';
import Projects from './components/Projects';
import DownArrow from './components/DownArrow';

const MainPage = ({ display }) => {
    // Where true is dark theme and false is light them
    const [viewModeDark, setViewMode] = useState(true)
    const [showAbout, toggleAbout] = useState(false)
    const [showAboutAnimation, toggleAboutAnimation] = useState(false)

    onanimationend = (e) =>{
        if (e.animationName === "slideToBottom"){
            toggleAbout(false);
            toggleAboutAnimation(false);
        }
    }

    if (display){
        return (
            <>
            <header className={`startView ${ viewModeDark ? 'startViewDark' : 'startViewLight' }`}>
            <About showAbout={ showAbout } toggleAbout={ toggleAbout } toggleAnimation={ toggleAboutAnimation } showAnimation={ showAboutAnimation }/>
            <Squiggles dark={ viewModeDark }/>
            <Navbar dark={ viewModeDark } setDark={ setViewMode } showAbout={ toggleAbout }/>
            <CentralText dark={ viewModeDark } showAbout={ toggleAbout }/>
            <img className='centerImage' src={viewModeDark ? logow : logob}></img>
            <DownArrow />
            </header>
            <Projects showAbout={ showAbout }/>
            </>
        );
    }
    else{
        return null
    }
}

export default MainPage
