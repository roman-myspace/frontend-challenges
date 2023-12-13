"use client"

import { useMultiStepFormCtx } from '@/context/multistep-context';
import React from 'react'

const options = [
    {
        count: 1,
        label: "Your Info"
    }, {
        count: 2,
        label: "Select Plan"
    }, {
        count: 3,
        label: "Add-Ons"
    }, {
        count: 4,
        label: "Summary"
    },
];

export default function StepSidebar() {

    const multiStepContext = useMultiStepFormCtx();

    return (
        <ul className='sm:space-y-8 flex items-center justify-center gap-4 sm:block'>
            {
                options && options?.map((item, idx) =>
                    <li key={idx}>
                        <StepItem
                            count={item.count}
                            label={item.label}
                            isActive={multiStepContext?.currentStep == item.count}
                        />
                    </li>
                )
            }
        </ul>
    )
}

const StepItem = ({
    isActive,
    count,
    label
}: {
    isActive: boolean,
    count: number,
    label: string
}) => {
    return (
        <div className='flex items-center gap-4'>
            <p className={`h-10 w-10 sm:w-8 sm:h-8 p-2 text-lg sm:text-sm font-medium flex items-center justify-center rounded-full border ${isActive ? 'bg-stepForm-blue-100 border-stepForm-blue-100 text-black' : 'border-white bg-transparent text-white'}  `}>{count}</p>
            <div className="hidden sm:block">
                <p className="uppercase text-xs text-stepForm-neutral-300 font-medium">Step {count}</p>
                <h6 className='uppercase text-white font-semibold text-sm'>{label}</h6>
            </div>
        </div>
    )
}
