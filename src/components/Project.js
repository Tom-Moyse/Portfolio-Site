import React from 'react'
import useOnScreen from './useOnScreen'
import { useRef, useState } from 'react'

const Project = ({ head, subhead, newstyle }) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const [visible, setVisible] = useState(false)

    function lockVisible() {
        setVisible(true)
        return {'animationName':'removeWidth'}
    }

    return (
        <a href='#' className='projectLink' style={ newstyle }>
            <div ref={ref} className={`projectContent `} >
                <div className='projectText'>
                    <h2>{ head }</h2>
                    <h3>{ subhead }</h3>
                    <button className='formButton'>Find out more</button>
                </div>
            </div>
            <div className='projectCover' style={visible ? {'animationName':'removeWidth'} : isVisible ? lockVisible() : {}}>
            </div>
        </a>
    )
}

export default Project
