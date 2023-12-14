import React from 'react'

export default function ShowAge({ calculatedBirth }: any) {
    return (
        <ul className='py-8 xs:py-4'>
            <li className='text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.year ?? '- - '}</span>
                <span>years</span>
            </li>
            <li className='text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.month ?? '- - '}</span>
                <span>months</span>
            </li>
            <li className='text-[12vw] leading-tight xs:leading-[1] xs:text-6xl italic font-black text-ageCal-grey-800'>
                <span className='text-ageCal-purple mr-2 not-italic'>{calculatedBirth?.day ?? '- - '}</span>
                <span>days</span>
            </li>
        </ul>
    )
}
