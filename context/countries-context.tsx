"use client"

import { ReactEventHandler, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ContextTypes, ContextProviderPropTypes } from "@/@types/countries-types";
import restCountries from "@/@data/countries.json";

// ********************************************
// Creating Global Context State
// ********************************************
const CountriesContext = createContext<ContextTypes | null>(null);

// **********************************
// Serving Context Provider
// **********************************
const CountriesContextProvider = ({ children }: ContextProviderPropTypes) => {

    const [countries, setCountries] = useState(restCountries);
    const [data, setData] = useState(restCountries ?? "");
    const [filter, setFilter] = useState("Filter by Region");
    const [regions, setRegions] = useState([]);
    const [resetFilter, setResetFilter] = useState(false);

    // ****************************************************
    // Get Or Set Countries Data from API && Filter
    // ****************************************************
    const getCountriesData = async () => {
        return await fetch("https://restcountries.com/v2/all")
            .then(r => r.json())
            .then(res => {
                if (res) {
                    setCountries(res);
                    setData(res);

                    let regionsList = res.map((item: any) => item.region);
                    if (regionsList?.length > 0) {
                        let allRegions: any = [... new Set(regionsList)];
                        setRegions(allRegions);
                    }
                }
            })
    }


    const handleSearchCountry = async (e: any) => {
        let searchText = e?.target?.value;
        let result = countries.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        if (result) {
            setData(result);
        } else {
            setData(countries);
        }
    }

    const handleSetFilterData = (data: any) => {
        setFilter(data);
        setResetFilter(true);
        handleFilterResult(data);
    }

    const handleFilterResult = (filterData: string) => {
        if (filterData != "Filter by Region") {
            let result = countries.filter(item => item.region.toLowerCase() == filterData.toLowerCase());
            if (result) {
                setData(result);
            } else {
                setData(countries);
            }
        }
    }
    const resetFilterResults = () => {
        setData(countries);
        setFilter("Filter by Region");
        setResetFilter(false);
    }

    useEffect(() => {
        getCountriesData();
    }, []);



    // **********************************************
    // Dark / Light Mode Themeing
    // **********************************************
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    // setting theme color mode
    const toggleDarkMode = () => {
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem("themeMode", `${!isDarkTheme}`);
    };
    useEffect(() => {
        if (typeof window != undefined) {
            let themeMode = JSON.parse(`${localStorage.getItem("themeMode")}`);
            if (themeMode != undefined) {
                setIsDarkTheme(themeMode);
                if (themeMode) {
                    document.body.classList.add("dark");
                } else {
                    document.body.classList.remove("dark");
                }
            } else {
                localStorage.setItem("themeMode", `${isDarkTheme}`);
                if (isDarkTheme) {
                    document.body.classList.add("dark");
                } else {
                    document.body.classList.remove("dark");
                }
            }
        }
    }, [isDarkTheme]);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                data,
                filter,
                regions,
                resetFilter,
                setFilter,
                setResetFilter,
                handleSearchCountry,
                handleFilterResult,
                resetFilterResults,
                handleSetFilterData,

                // Theme
                isDarkTheme,
                toggleDarkMode
            }}
        >
            {children}
        </CountriesContext.Provider>
    )

}


export const useCountriesCtx = () => useContext<ContextTypes | null>(CountriesContext);
export default CountriesContextProvider;