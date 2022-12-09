import React, { useState } from 'react'
import './FilterPanel.css'
import { BsType, BsFillPersonFill, BsPlayCircle, BsCalendar3, BsPlusLg } from 'react-icons/bs'
import FilterPanelTemplate from './FilterPanelTemplate'
import FilterPanelContentAddFilter from './FilterPanelContentAddFilter'
import RoundedImageButton from './RoundedImageButton'
import PlainImageButton from './PlainImageButton'

const FilterPanel = () => {

    const [isOpen, setIsOpen] = useState(false);
    const originalTagItems = [
        { label: "Name", icon: <BsType /> },
        { label: "Assign", icon: <BsFillPersonFill /> },
        { label: "Status", icon: <BsPlayCircle /> },
        { label: "Date", icon: <BsCalendar3 /> }
    ]
    const [tagItems, setTagItems] = useState(originalTagItems)
    const [addedTags, setAddedTags] = useState([
        { label: "Assign", icon: <BsFillPersonFill /> },
        { label: "Name", icon: <BsType /> },
    ]);

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

            <div className="filter-panel-buttons">
                {
                    addedTags.map(tag => (<RoundedImageButton key={tag.label} icon={tag.icon} text={tag.label} />))
                }
                <PlainImageButton icon={<BsPlusLg />} text={"Add Filter"} onClick={handleButtonClick} />
            </div>
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