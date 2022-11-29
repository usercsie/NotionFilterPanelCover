import React, { useState, useRef, useEffect } from 'react'
import './FilterPanel.css'
import FilterPanelItem from './FilterPanelItem'
import { BsType, BsFillPersonFill, BsPlayCircle, BsCalendar3, BsPlusLg } from 'react-icons/bs'
import useOutsideAlerter from '../hooks/useOutsideAlerter'

const FilterPanel = () => {

    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);
    const originalTagItems = [
        { label: "Name", icon: <BsType /> },
        { label: "Assign", icon: <BsFillPersonFill /> },
        { label: "Status", icon: <BsPlayCircle /> },
        { label: "Date", icon: <BsCalendar3 /> }
    ]
    const [tagItems, setTagItems] = useState(originalTagItems)

    useEffect(() => {
        if (isOpen === true) {
            searchInputRef.current && searchInputRef.current.focus();
        }
    }, [isOpen])

    useOutsideAlerter(wrapperRef, () => {
        setIsOpen(false);
    });

    const handleButtonClick = (e) => {
        //if (isOpen === false) {
        setIsOpen(prev => !prev);
        //}
    }

    const handleSearchInputChange = (e) => {
        //console.log(e.target.value)
        filterTagItems(e.target.value)
    }

    const filterTagItems = (key) => {
        //let newItems = [...tagItems];

        const newItems = originalTagItems.filter(item => {
            return item.label.toLowerCase().includes(key)
        });

        setTagItems(newItems)
        console.log(newItems);
    }

    return (
        <div className='filter-panel'>
            <div className='filter-panel-button' onClick={handleButtonClick}>+ Add Filter</div>
            {
                isOpen &&
                <div className='filter-panel-body' ref={wrapperRef}>
                    <div className='body-normal'>
                        <input className='search-text' type='text'
                            ref={searchInputRef}
                            placeholder='Filter by...'
                            onChange={handleSearchInputChange}>
                        </input>
                        <div className="filter-options">
                            {
                                tagItems.length === 0 ? <div className='noResults'>No results</div> :
                                    tagItems.map((v, index) => (<FilterPanelItem key={index} icon={v.icon} label={v.label} />))
                            }
                        </div>
                    </div>
                    <div className='body-separate' />
                    <div className='body-advanced'>
                        <FilterPanelItem icon={<BsPlusLg />} label={"Add advanced filter"} />
                    </div>
                </div>
            }
        </div>
    )
}

export default FilterPanel
