import Header from '@/components/challenges/countries-listing/layout/header'
import Footer from '@/components/layout/footer'
import IPTrackerContextProvider from '@/context/iptracker-context'
import React from 'react'


export default function CountriesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <IPTrackerContextProvider>
                <section className="min-h-screen dark:bg-countries-veryDarkBlueBG bg-countries-lightGray dark:text-white text-countries-veryDarkBlueText">
                    {children}
                    <Footer />
                </section>
            </IPTrackerContextProvider>
        </>
    )
}
