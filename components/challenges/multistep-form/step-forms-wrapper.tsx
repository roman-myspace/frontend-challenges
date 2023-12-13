"use client"
import { useMultiStepFormCtx } from '@/context/multistep-context';
import React from 'react'
import YourInfo from './steps/1-your-info';
import SelectPlan from './steps/2-select-plan';
import AddOns from './steps/3-add-ons';
import Summary from './steps/4-summary';

export default function StepFormsWrapper() {
    const multiStepContext = useMultiStepFormCtx();

    switch (multiStepContext?.currentStep) {
        case 1:
            return (<YourInfo />)
        case 2:
            return (<SelectPlan />)
        case 3:
            return (<AddOns />)
        case 4:
            return (<Summary />)
    }

}
