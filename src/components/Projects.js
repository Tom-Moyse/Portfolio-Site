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
                    <div className='projectRow'>
                        <div className='project'>
                            Yo
                        </div>
                    </div>
                    <div className='projectRow'>
                        <div className='project'>
                            Yo 2
                        </div>
                    </div>
                    <div className='projectRow'>
                        <div className='project'>
                            Yo 3
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    else{
        return null
    }
}

export default Projects
