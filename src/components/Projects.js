import React from 'react'
import museBack from '../img/musescore-bg.png'
import gameBack from '../img/game-bg.png'
import logow from '../img/logo-white.svg';
import Project from './Project';

const Projects = ({ showAbout }) => {
    if (!showAbout){
        return (
            <main className='mainView' id='projects'>
                <div className='projectsHeading'>
                    <h2>Recent Projects</h2>
                    <h3>Continuing to learn</h3>
                </div>
                <div className='projectContainer'>
                    <ul className='projectList'>
                        <li className='project'>
                            <Project linkDest='/museScrape' head={'Musescore To PDF Scraper'} subhead={'Automating the mundane'} newstyle={{'backgroundImage':`url(${museBack})`}}/>
                        </li>
                        <li className='project'>
                            <Project linkDest='/gameSystems' head={'Game systems experiment'} subhead={'From adaptive difficulty and ray casting to procedural generation'} newstyle={{'backgroundImage':`url(${gameBack})`, 'backgroundPosition':'1%'}}/>
                        </li>
                        <li className='project'>
                            <Project linkDest='/portfolioProduction' head={'Portfolio Website'} subhead={'Showcasing my Work'} newstyle={{'backgroundImage':`url(${logow})`, 'backgroundColor':'#0b1320', 'backgroundPosition':'50%', backgroundSize:'30%'}}/>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
    else{
        return null
    }
}

export default Projects
