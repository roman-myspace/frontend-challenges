"use client"

import Billing from "@/components/tip-calculator/sections/billing"
import Calculator from "@/components/tip-calculator/sections/calculator"

export default function TipCalculator() {
    return (
        <div className="flex flex-col justify-center items-center h-full max-h-fit px-0 pt-8 md:p-8">
            <h4 className="uppercase text-center text-2xl text-primary-900 font-light mb-10">spli<br />tter</h4>
            <section className="bg-white rounded-b-none rounded-t-3xl sm:rounded-2xl p-6 w-full lg:w-10/12 xl:w-7/12 mx-auto flex gap-4 lg:gap-8 flex-col sm:flex-row h-full shadow-none sm:shadow-md shadow-primary-100">
                <Calculator />
                <Billing />
            </section>
        </div>
    )
}
