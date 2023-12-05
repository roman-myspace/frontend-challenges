"use client"

import { useCountriesCtx } from '@/context/countries-context'
import React from 'react'
import CountryCard from './country-card';

export default function ListingWrapper() {

    const countriesCtx = useCountriesCtx();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-8 my-16">
            {
                countriesCtx?.data && countriesCtx?.data.length > 0 ?
                    countriesCtx?.data.map((item: any, idx: number) =>
                        <CountryCard
                            data={item}
                            key={idx}
                        />
                    )
                    :
                    (<p className='col-span-4 text-center text-black dark:text-white'>No Record Found!</p>)
            }
        </div>
    )
}
