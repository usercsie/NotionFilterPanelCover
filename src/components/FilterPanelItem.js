import React from 'react'
import './FilterPanelItem.css'

const FilterPanelItem = ({ icon, label, itemClick }) => {

    const handleItemClick = (e) => {
        if (itemClick) {
            itemClick(e, { label: label })
        }
    }

    return (
        <div className='filter-panel-item' onClick={handleItemClick}>
            <div className='icon'>{icon}</div>
            <div className='label'>{label}</div>
        </div>
    )
}

export default FilterPanelItem
