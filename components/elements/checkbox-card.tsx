import { useMultiStepFormCtx } from '@/context/multistep-context';
import React from 'react'

export default function CheckboxCard({
    addon,
    handleChange,
    isChecked
}: {
    addon: any,
    handleChange: (checked: boolean, data: any) => void,
    isChecked: boolean
}) {
    const multiStepContext = useMultiStepFormCtx();

    return (
        <label
            className={`cursor-pointer border p-4 rounded-lg w-full flex gap-4 items-center ${isChecked ? 'border-stepForm-blue-800 bg-stepForm-neutral-100' : 'bg-white'}`}
            htmlFor={addon?.label}
        >
            <input
                onChange={(e) => handleChange(e.target.checked, addon)}
                type='checkbox'
                className='accent-stepForm-blue-500 border border-stepForm-neutral-400'
                name='addons'
                id={addon?.label}
                value={addon}
                checked={isChecked}
            />
            <div className="">
                <h6 className='text-sm font-medium text-stepForm-blue-800'>{addon.label}</h6>
                <p className='text-xs text-stepForm-neutral-400'>{addon.description}</p>
            </div>
            <p className='text-sm text-stepForm-blue-500 mt-1 ml-auto'>${multiStepContext?.stepFormData?.isMonthly ? addon?.monthlyPrice : addon?.yearlyPrice}/{multiStepContext?.stepFormData?.isMonthly ? "mo" : "yr"}</p>
        </label>
    )
}
