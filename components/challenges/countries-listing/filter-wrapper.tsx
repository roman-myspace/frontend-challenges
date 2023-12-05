"use client"

import React from 'react'
import SearchInput from './search-input';
import RegionFilter from './region-filter';



export default function FilterWrapper() {
    return (
        <div className="flex justify-between flex-wrap md:flex-nowrap">
            <SearchInput />
            <RegionFilter />
        </div>
    )
}
