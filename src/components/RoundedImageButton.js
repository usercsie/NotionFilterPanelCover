import React from 'react'
import './RoundedImageButton.css'

const RoundedImageButton = ({ icon, text }) => {
    return (
        <div className='rounded-image-button'>
            <div className='button-icon'>{icon}</div>
            <span className='button-text'>{text}</span>
        </div>
    )
}

export default RoundedImageButton
