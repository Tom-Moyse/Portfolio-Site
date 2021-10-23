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
                    <li className="example"><a href="#projects" className="nav-link hover hover-1">Projects</a></li>
                    <li className="example"><a href className="nav-link hover hover-1" onClick={  () => {showAbout(true)}  }>Contact</a></li>
                    <li className="example"><a href className="nav-link" id="sun-moon" onClick={ toggleDark }> {
                        dark ? <FaSun size={30} color={'#d3d7de'}/> : <FaMoon size={30} color={'#55585c'}/>
                    } </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
