import React, { useState } from 'react'
import './FilterPanel.css'
import { BsType, BsFillPersonFill, BsPlayCircle, BsCalendar3 } from 'react-icons/bs'
import FilterPanelTemplate from './FilterPanelTemplate'
import FilterPanelContentAddFilter from './FilterPanelContentAddFilter'

const FilterPanel = () => {

    const [isOpen, setIsOpen] = useState(false);
    const originalTagItems = [
        { label: "Name", icon: <BsType /> },
        { label: "Assign", icon: <BsFillPersonFill /> },
        { label: "Status", icon: <BsPlayCircle /> },
        { label: "Date", icon: <BsCalendar3 /> }
    ]
    const [tagItems, setTagItems] = useState(originalTagItems)

    const handleButtonClick = (e) => {
        //if (isOpen === false) {
        setIsOpen(prev => !prev);
        //}
    }

    function handleSearchInputChange(e) {
        filterTagItems(e.target.value)
    }

    const filterTagItems = (key) => {

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
                <FilterPanelTemplate placeholder='Filter by...' inputChange={handleSearchInputChange} setIsOpen={setIsOpen}
                    filterContent={
                        <FilterPanelContentAddFilter tagItems={tagItems} />
                    } />
            }
        </div>
    )
}

export default FilterPanel