import React from 'react'

const Projects = ({ showAbout }) => {
    if (!showAbout){
        return (
            <main className='mainView' id='projects'>
                <div className='projectsHeading'>
                    <h2>Recent Projects</h2>
                    <h3>Keeping on</h3>
                </div>
                <div className='projectContainer'>
                    <ul className='projectList'>
                        <li className='project'>
                            <a className='projectLink'>
                                <div className='projectContent'>
                                    Some Content
                                </div>
                            </a>
                        </li>
                        <li className='project'>
                            <a className='projectLink'>
                                <div className='projectContent'>
                                    Some More Content
                                </div>
                            </a>
                        </li>
                        <li className='project'>
                            <a className='projectLink'>
                                <div className='projectContent'>
                                    Yet more content
                                </div>
                            </a>
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
