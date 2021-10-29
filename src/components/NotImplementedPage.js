import React from 'react'
import Squiggles from './Squiggles'
import logo from '../img/logo-white.svg';
import { Link } from 'react-router-dom';

const NotImplementedPage = () => {
    return (
        <>
        <header className='pageFadeIn startView startViewDark'></header>
        <Link to={'/'}>
            <div className='backContainer'>
                <figure className='imgContainer'>
                    <img src={logo} alt='logo' className='homeLink'/>
                    <figcaption className='homeLinkText'>
                        <p>Return Home</p>
                    </figcaption>
                </figure>
            </div>  
        </Link>
        <Squiggles dark={ true }/>
        <div className='centralTextBox'>
            <div className='content' style={{'color':'white'}}>
                <h1>This page has not yet been implemented <br/> Check back soon!</h1>
            </div>
        </div>
        </>
    )
}

export default NotImplementedPage
