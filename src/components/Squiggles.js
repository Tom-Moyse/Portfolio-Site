import React from 'react';
import '../css/main.css';
import s0 from '../img/Squiggle0.svg';
import s1 from '../img/Squiggle1.svg';
import s2 from '../img/Squiggle2.svg';
import s3 from '../img/Squiggle3.svg';

const Squiggles = ({ dark }) => {
    return <ul className={`squiggles ${ dark ? 'fadeIn' : 'fadeOut'}`}>
        <img src={ s0 } alt=""/>
        <img src={ s1 } alt=""/>
        <img src={ s2 } alt=""/>
        <img src={ s3 } alt=""/>
    </ul>
}

export default Squiggles
