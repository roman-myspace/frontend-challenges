import AgeCalculatorCard from "@/components/challenges/age-calculator/age-calculator-card";
import Footer from "@/components/layout/footer";

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Age Calculator App Challenge',
    description: 'Age Calculator App Challenges apps by frontendmentor.io',
}

export default function AgeCalculator() {
    return (
        <>
            <main className="age_calculator__wrapper h-screen overflow-auto flex items-center justify-center bg-ageCal-grey-200 p-6">
                <AgeCalculatorCard />
            </main>
            <Footer />
        </>
    )
}
