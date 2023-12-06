"use client"

import { ReactEventHandler, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ContextTypes, ContextProviderPropTypes } from "@/@types/iptracker-types";
import axios from "axios";

// ********************************************
// Creating Global Context State
// ********************************************
const IPTrackerContext = createContext<ContextTypes | null>(null);

// **********************************
// Serving Context Provider
// **********************************
const IPTrackerContextProvider = ({ children }: ContextProviderPropTypes) => {

    const [ipData, setIPData] = useState(null);

    const getUserInfoByIP = async (ip: string) => {
        const response = await axios(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.MAP_API_KEY}&ipAddress=${ip}`);
        if (response) {
            // console.log("response data ==>> ", response.data);
            setIPData(response.data);
        }
    }

    return (
        <IPTrackerContext.Provider
            value={{
                ipData,
                getUserInfoByIP
            }}
        >
            {children}
        </IPTrackerContext.Provider>
    )

}


export const useIPCtx = () => useContext<ContextTypes | null>(IPTrackerContext);
export default IPTrackerContextProvider;