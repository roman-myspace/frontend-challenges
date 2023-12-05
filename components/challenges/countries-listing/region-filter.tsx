import { useCountriesCtx } from '@/context/countries-context';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function RegionFilter() {

    const countriesCtx = useCountriesCtx();
    const [toggleSelect, setToggleSelect] = useState(false);


    return (
        <div className='text-dark dark:text-white text-sm relative'>

            <div
                className='w-[200px] shadow-md mt-3 md:mt-0 flex justify-between items-center bg-white dark:bg-countries-darkBlue py-4 px-6 rounded cursor-pointer'
                onClick={() => {
                    setToggleSelect(!toggleSelect);
                }}
            >
                <span className='mr-4'>{countriesCtx?.filter && countriesCtx?.filter}</span>
                <IoIosArrowDown />
            </div>
            {
                countriesCtx?.resetFilter &&
                <p
                    className='underline text-countries-veryDarkBlueText dark:text-white text-center cursor-pointer'
                    onClick={countriesCtx?.resetFilterResults}
                >Reset Filter</p>
            }
            <ul className={`bg-countries-lightGray shadow-md dark:bg-countries-darkBlue mt-0 rounded max-h-[200px] overflow-y-auto absolute top-[55px] w-[200px] ${toggleSelect ? "block" : "hidden"}`}>
                {
                    countriesCtx?.regions && countriesCtx?.regions.length > 0 ?
                        countriesCtx?.regions?.map((item: any, idx: number) =>
                            <li className='px-4 py-2 font-sm hover:bg-gray-200 dark:hover:bg-countries-veryDarkBlueBG cursor-pointer'
                                key={idx}
                                onClick={() => {
                                    countriesCtx?.handleSetFilterData(item);
                                    setToggleSelect(false);
                                }}
                            >{item}</li>
                        )
                        :
                        (<li className='px-4 py-2 font-sm hover:bg-gray-200 dark:hover:bg-countries-veryDarkBlueBG cursor-pointer'>No Region Found</li>)
                }
            </ul>

        </div>
    )
}
