"use client"

import { useCountriesCtx } from '@/context/countries-context'
import React from 'react'
import { BsSun, BsMoon } from "react-icons/bs"


export default function Header() {

    const countriesCtx = useCountriesCtx();

    return (
        <div className='bg-countries-lightGray dark:bg-countries-darkBlue shadow-sm py-4 px-2 sm:px-12 flex justify-between items-center sticky top-0'>
            <h1 className="dark:text-white text-countries-veryDarkBlueText font-bold sm:text-xl">Where in the world?</h1>
            <div className="dark:text-white text-countries-veryDarkBlueText cursor-pointer text-sm sm:text-md" onClick={countriesCtx?.toggleDarkMode}>
                {
                    countriesCtx?.isDarkTheme ? (
                        <span className='flex items-center gap-2 font-semibold'>
                            <BsMoon /> Dark Mode
                        </span>
                    ) : (
                        <span className='flex items-center gap-2 font-semibold'>
                            <BsSun /> Light Mode
                        </span>
                    )
                }
            </div>
        </div>
    )
}
