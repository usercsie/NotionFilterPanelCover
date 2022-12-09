import React from 'react'
import './PlainImageButton.css'

const PlainImageButton = ({ icon, text, onClick }) => {
    return (
        <div className='plain-image-button' onClick={onClick}>
            <div className='button-icon'>{icon}</div>
            <span className='button-text'>{text}</span>
        </div>
    )
}

export default PlainImageButton
