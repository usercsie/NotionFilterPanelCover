import React from 'react'
import './FilterPanelContentAddFilter.css'
import FilterPanelItem from './FilterPanelItem'
import { BsPlusLg } from 'react-icons/bs'

const FilterPanelContentAddFilter = ({ tagItems }) => {

    const handleItemClick = (e, label) => {
        console.log(label)
    }

    return (
        <div className='filter-content-add-filter'>
            <div className="filter-options">
                {
                    tagItems.length === 0 ? <div className='noResults'>No results</div> :
                        tagItems.map((v, index) => (<FilterPanelItem key={index} icon={v.icon} label={v.label} itemClick={handleItemClick} />))
                }
            </div>
            <div className='filter-separate' />
            <div className='filter-advanced'>
                <FilterPanelItem icon={<BsPlusLg />} label={"Add advanced filter"} />
            </div>
        </div>
    )
}

export default FilterPanelContentAddFilter
