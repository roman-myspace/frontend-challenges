import React from 'react'

export default function ShowAge({ calculatedBirth }: any) {
    return (
        <ul className='py-8 xs:py-4'>
            <li className='flex items-center flex-wrap xs:flex-nowrap text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.year ?? '- - '}</span>
                <h1>years</h1>
            </li>
            <li className='flex items-center flex-wrap xs:flex-nowrap text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.month ?? '- - '}</span>
                <h2>months</h2>
            </li>
            <li className='flex items-center flex-wrap xs:flex-nowrap text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.day ?? '- - '}</span>
                <h3>days</h3>
            </li>
        </ul>
    )
}
