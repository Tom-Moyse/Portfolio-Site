import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'

const DownArrow = () => {
    return (
        <div className='bottomAlign'>
            <a href='#projects'>
                <button className='arrowContainer'>
                    <p style={{'marginBottom':'5%'}}>Projects</p>
                    <FaLongArrowAltDown className='downArrow' size={'35%'}/>
                </button>
            </a>
        </div>
    )
}

export default DownArrow
