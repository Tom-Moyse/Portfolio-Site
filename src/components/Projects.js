import React from 'react'

const Projects = ({ showAbout }) => {
    if (!showAbout){
        return (
            <main className='mainView' id='projects'>
                <p>Hello</p>
            </main>
        )
    }
    else{
        return null
    }
}

export default Projects
