import React from 'react'
import './FilterPanelItem.css'

const FilterPanelItem = ({ icon, label }) => {
    return (
        <div className='filter-panel-item'>
            <div className='icon'>{icon}</div>
            <div className='label'>{label}</div>
        </div>
    )
}

export default FilterPanelItem
