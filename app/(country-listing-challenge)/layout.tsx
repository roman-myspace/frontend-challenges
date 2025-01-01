import Header from '@/components/challenges/countries-listing/layout/header'
import Footer from '@/components/layout/footer'
import CountriesContextProvider from '@/context/countries-context'
import React from 'react'

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CountriesContextProvider>
                <section className="min-h-screen dark:bg-countries-veryDarkBlueBG bg-countries-lightGray dark:text-white text-countries-veryDarkBlueText">
                    <Header />
                    {children}
                    <Footer />
                </section>
            </CountriesContextProvider>
        </>
    )
}
