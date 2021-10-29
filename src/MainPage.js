import { useState } from 'react';
import './css/main.css';
import Navbar from './components/Navbar';
import CentralText from './components/CentralText';
import About from './components/About';
import logow from './img/logo.svg';
import logob from './img/logo-black.svg';
import 'animate.css';
import Squiggles from './components/Squiggles';
import Projects from './components/Projects';
import DownArrow from './components/DownArrow';
import Footer from './components/Footer';

const MainPage = () => {
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

    return (
        <>
        <header className={`pageFadeIn startView ${ viewModeDark ? 'startViewDark' : 'startViewLight' }`}>
        <About showAbout={ showAbout } toggleAbout={ toggleAbout } toggleAnimation={ toggleAboutAnimation } showAnimation={ showAboutAnimation }/>
        <Squiggles dark={ viewModeDark }/>
        <Navbar dark={ viewModeDark } setDark={ setViewMode } showAbout={ toggleAbout }/>
        <CentralText dark={ viewModeDark } showAbout={ toggleAbout }/>
        <img className='centerImage' src={viewModeDark ? logow : logob} alt=''></img>
        <DownArrow />
        </header>
        <Projects showAbout={ showAbout }/>
        <Footer />
        </>
    );
}

export default MainPage
