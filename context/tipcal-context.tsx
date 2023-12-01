"use client"

import { createContext, useContext, useMemo, useState } from "react";
import { ContextTypes, ContextProviderPropTypes } from "@/@types/types";


// ********************************************
// Creating Global Context State
// ********************************************
const TipCalContext = createContext<ContextTypes | {}>({});

// **********************************
// Serving Context Provider
// **********************************
const TipCalContextProvider = ({ children }: ContextProviderPropTypes) => {

    const defaultTips: Number[] = [5, 10, 15, 25, 50];
    const [isCustomTipEnabled, setIsCustomTipEnabled] = useState(false);

    const [billData, setBillData] = useState({
        bill_amount: "",
        tip: "",
        number_of_peoples: ""
    });
    const [errorMessage, setErrorMessage] = useState({
        bill_amount: "",
        tip: "",
        number_of_peoples: ""
    })

    const isDisabledReset = useMemo(() => {
        if (billData.bill_amount.length == 0 && billData?.tip.length == 0 && billData?.number_of_peoples?.length == 0) {
            return true;
        } else {
            return false;
        }
    }, [billData]);

    const tipAmount = useMemo(() => {
        let totalTip = 0, tip_per_person = 0, total_per_person = 0;

        if (billData.bill_amount.length > 0 && billData?.tip.length > 0 && billData?.number_of_peoples?.length > 0) {
            if (Number(billData.tip) > 0) {
                totalTip = Number(billData.tip) * Number(billData.bill_amount) / 100;
                tip_per_person = totalTip / Number(billData.number_of_peoples);
                total_per_person = (Number(billData.bill_amount) + totalTip) / Number(billData.number_of_peoples);
            } else {
                tip_per_person = 0;
                total_per_person = (Number(billData.bill_amount) / Number(billData.number_of_peoples));
            }
        }
        return {
            totalTip,
            tip_per_person,
            total_per_person
        };
    }, [billData]);

    console.log("tip amount ==>> ", tipAmount);


    // handle change input value
    const handleChange = (e: any) => {
        // console.log("e ==>> ", e.target.name, e.target.value);
        if (e.target.value?.length > 0 && Number(e.target.value) > -1 && Number(e.target.value) < 1) {
            setErrorMessage({
                ...errorMessage,
                [e.target.name]: "Can't be Zero"
            });
        } else if (e.target.value?.lenght <= 0 || e.target.value > 0) {
            setErrorMessage({
                ...errorMessage,
                [e.target.name]: ""
            });
        }

        if (e.target.name === "tip") {
            setIsCustomTipEnabled(false);
        }

        setBillData({
            ...billData,
            [e.target.name]: e.target.value
        })
    }

    // handle change set custom tip
    const handleSetCustomTip = (e: any) => {
        if (e.target.value?.length == 0) {
            setErrorMessage({
                ...errorMessage,
                [e.target.name]: "Can't be Empty"
            });
        } else if (Number(e.target.value) > 0) {
            setErrorMessage({
                ...errorMessage,
                [e.target.name]: ""
            });
        }
        setBillData({
            ...billData,
            tip: e.target.value
        })
    }



    // Reset Billing
    const resetBilling = () => {
        setBillData({
            bill_amount: "",
            tip: "",
            number_of_peoples: ""
        });
        setErrorMessage({
            bill_amount: "",
            tip: "",
            number_of_peoples: ""
        });
    }


    return (
        <TipCalContext.Provider
            value={{
                defaultTips,
                isCustomTipEnabled,
                setIsCustomTipEnabled,
                billData,
                errorMessage,
                handleChange,
                handleSetCustomTip,
                tipAmount,

                isDisabledReset,
                resetBilling
            }}
        >
            {children}
        </TipCalContext.Provider>
    )

}

export const useTipCalCtx = () => useContext<ContextTypes | {}>(TipCalContext);
export default TipCalContextProvider;