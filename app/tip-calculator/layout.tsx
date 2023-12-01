import Footer from '@/components/layout/footer'
import TipCalContextProvider from '@/context/tipcal-context'
import React from 'react'

export default function TipCalculatorLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TipCalContextProvider>
                <section className="app__tip-calculator container-lg mx-auto min-h-screen h-full flex flex-col justify-end sm:justify-center">
                    {children}
                    <Footer />
                </section>
            </TipCalContextProvider>
        </>
    )
}
