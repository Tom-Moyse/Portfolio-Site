import React from 'react';
import logow from '../img/logo-white.svg';
import logob from '../img/logo-black.svg';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ dark, setDark, showAbout }) => {
    const toggleDark = () => {
        setDark(!dark)
    }
    return (
        <div className='navbar-container'>
            <img src={dark ? logow : logob} alt='logo' id='nav-logo'/>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className="nav-button"><a href="#projects" className="nav-link hover hover-1">Projects</a></li>
                    <li className="nav-button"><p className="nav-link hover hover-1" onClick={  () => {showAbout(true)}  }>Contact</p></li>
                    <li className="nav-button"><p className="nav-link" id="sun-moon" onClick={ toggleDark }> {
                        dark ? <FaMoon size={30} color={'#d3d7de'}/> : <FaSun size={30} color={'#55585c'}/>
                    } </p></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
