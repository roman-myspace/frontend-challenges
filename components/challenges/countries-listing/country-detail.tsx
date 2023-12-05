"use client"

import { useCountriesCtx } from '@/context/countries-context';
import Link from 'next/link';
import React, { useMemo } from 'react'
import { BiArrowBack } from 'react-icons/bi';

export default function CountryDetails({
    param
}: { param: string }) {

    const countriesCtx = useCountriesCtx();

    let countryDetail = useMemo(() => {
        return countriesCtx?.countries?.filter((item: any) => item.alpha3Code.toLowerCase() === param)
    }, [param]);

    if (countryDetail?.length > 0) {
        return (
            <section className="py-8 px-12 bg-countries-lightGray dark:bg-countries-veryDarkBlueBG">
                <Link href={"/countries-listing"} className="bg-white text-black shadow-sm dark:bg-countries-darkBlue dark:hover:bg-countries-veryDarkBlueText dark:text-white py-2 px-10 my-8 flex items-center gap-2 rounded-md w-fit hover:bg-gray-300 ">
                    <BiArrowBack />
                    Back
                </Link>

                {
                    countryDetail.map((item: any, idx: number) => (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-24" key={idx}>
                            <div className='w-full object-fill'>
                                <img src={item.flag} alt='' className='w-full h-auto object-fill' />
                            </div>

                            <div className="text-black dark:text-white">
                                <h2 className='text-3xl font-semibold mb-8'>{item?.name}</h2>


                                <div className="relative">

                                    <div className="flex lg:gap-2 flex-wrap xl:gap-4 text-sm">
                                        <ul>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Native Name:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.nativeName}</span>
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Population:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.population}</span>
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Region:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.region}</span>
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Sub Region:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.subregion}</span>
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Capital:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.capital}</span>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Top Level Domain:</b>
                                                <span className='opacity-90 ml-2 font-light'>{item?.topLevelDomain?.join(" ")}</span>
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Currencies:</b>
                                                {
                                                    item?.currencies?.map((cur: any, idx: number) =>
                                                        <span className='opacity-90 ml-2 font-light' key={idx}>{cur?.name}</span>
                                                    )
                                                }
                                            </li>
                                            <li className="pr-6 py-1 text-black whitespace-nowrap dark:text-white">
                                                <b className='font-semibold'>Languages:</b>
                                                {
                                                    item?.languages?.map((lang: any, idx: number) =>
                                                        <span className='opacity-90 ml-2 font-light' key={idx}>{lang.name}</span>
                                                    )
                                                }
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="text-black dark:text-white font-semibold text-sm mt-6 flex items-center gap-3 flex-wrap lg:flex-nowrap">
                                        Border Countries:
                                        <div className="flex gap-2 flex-wrap">
                                            {
                                                item?.borders?.map((bord: any, idx: number) =>
                                                    <span className='bg-white shadow-sm dark:bg-countries-darkBlue px-4 py-1 text-sm font-normal rounded-md' key={idx}>{bord}</span>
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    ))
                }

            </section>
        )
    } else {
        return (
            <section className="py-8 px-12 bg-gray-100 dark:bg-gray-900 h-full">
                <Link href={"/countries-listing"} className="bg-white text-black shadow-sm dark:bg-gray-800 dark:text-white py-2 px-10 my-8 flex items-center gap-2 rounded-md w-fit hover:bg-gray-300 dark:hover:bg-gray-700">
                    <BiArrowBack />
                    Back
                </Link>

                <div className="">
                    <h6 className='text-center text-2xl'>404</h6>
                    <p>The Country Detail not found</p>
                </div>

            </section>
        )
    }
}
