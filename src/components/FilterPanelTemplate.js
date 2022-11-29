import React, { useEffect, useRef } from 'react'
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import './FilterPanelTemplate.css'

const FilterPanelTemplate = ({ placeholder, filterContent, inputChange, setIsOpen }) => {

    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        searchInputRef.current.focus()
    }, [])

    useOutsideAlerter(wrapperRef, () => {
        setIsOpen(false);
    });


    return (
        <div className='filter-template-body' ref={wrapperRef}>
            <div className='body-normal'>
                <input className='input-text' type='text'
                    ref={searchInputRef}
                    placeholder={placeholder}
                    onChange={inputChange}>
                </input>
                {
                    filterContent
                }
            </div>
        </div>
    )

}

export default FilterPanelTemplate
