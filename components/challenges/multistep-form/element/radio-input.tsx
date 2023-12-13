import { useMultiStepFormCtx } from '@/context/multistep-context';
import React, { useRef } from 'react'

export default function RadioInput({
    plan
}: {
    plan: any
}) {
    const multiStepContext = useMultiStepFormCtx();

    const handleSelectPlan = () => {
        multiStepContext?.handleSetSingleFieldValue("plan_type", plan);
    }


    return (

        <div
            className={`cursor-pointer border rounded-lg p-4 ${multiStepContext?.stepFormData?.plan_type?.label == plan?.label ? 'border-stepForm-blue-800 bg-stepForm-neutral-100' : 'bg-white'}`}
            onClick={handleSelectPlan}
        >
            <img
                src={plan?.icon}
                className='w-10 h-10 object-cover rounded-full'
            />

            <div className="mt-8">
                <h6 className='text-stepForm-blue-800 font-medium text-base'>{plan.label}</h6>
                <p className='text-sm text-stepForm-neutral-400 mt-1'>${multiStepContext?.stepFormData?.isMonthly ? plan?.monthlyPrice : plan?.yearlyPrice}/{multiStepContext?.stepFormData?.isMonthly ? "mo" : "yr"}</p>
                {
                    multiStepContext?.stepFormData?.isMonthly &&
                    <p className='mt-2 text-xs text-stepForm-blue-800 font-medium tracking-normal'>2 months free</p>
                }
            </div>
        </div>
    )
}
