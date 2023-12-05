import { useCountriesCtx } from '@/context/countries-context'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function SearchInput() {

    const countriesCtx = useCountriesCtx();

    return (
        <div className="w-full md:w-2/3 lg:w-1/3 relative shadow-md ">
            <BsSearch className='absolute text-countries-veryDarkBlueText dark:text-white font-md top-4 left-6' />
            <input
                type={"text"}
                name="countries"
                placeholder='Search for a countries'
                className='text-countries-veryDarkBlueText dark:text-white py-4 pr-4 pl-16 bg-white dark:bg-countries-darkBlue shadow-sm rounded-sm text-sm w-full focus-within:outline-none'
                onChange={countriesCtx?.handleSearchCountry}
            />
        </div>
    )
}
