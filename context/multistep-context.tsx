"use client"

import { ReactEventHandler, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ContextTypes, ContextProviderPropTypes } from "@/@types/multistep-form-types";


// ********************************************
// Creating Global Context State
// ********************************************
const MultiStepFormContext = createContext<ContextTypes | null>(null);

// **********************************
// Serving Context Provider
// **********************************
const MultiStepFormContextProvider = ({ children }: ContextProviderPropTypes) => {

    const totalSteps = 4;
    const [currentStep, setCurrentStep] = useState(1);
    const [stepFormData, setStepFormData] = useState({
        name: "",
        email: "",
        phone: "",
        isMonthly: true,
        plan_type: {
            label: "Arcade",
            monthlyPrice: 9,
            yearlyPrice: 90,
            icon: "/icons/multistep-form/icon-arcade.svg"
        },
        addons: [],
    });

    const handleSetCurrentStep = (step: number) => {
        if (step < totalSteps || step > totalSteps) {
            setCurrentStep(1);
        }
        setCurrentStep(step);
    }

    const handleSetFieldValue = (data: any) => {
        setStepFormData({ ...stepFormData, ...data });
    }
    const handleSetSingleFieldValue = (key: string, value: any) => {
        setStepFormData((old) => {
            return {
                ...old,
                [key]: value
            }
        })
    }

    return (
        <MultiStepFormContext.Provider
            value={{
                totalSteps,
                currentStep,
                handleSetCurrentStep,

                stepFormData,
                handleSetFieldValue,
                handleSetSingleFieldValue
            }}
        >
            {children}
        </MultiStepFormContext.Provider>
    )
}


export const useMultiStepFormCtx = () => useContext<ContextTypes | null>(MultiStepFormContext);
export default MultiStepFormContextProvider;