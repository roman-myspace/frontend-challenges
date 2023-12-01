import Billing from "./sections/billing";
import Calculator from "./sections/calculator";

export default function TipCalculator() {
    return (
        <section className="bg-white rounded-b-none rounded-t-3xl sm:rounded-2xl p-6 w-full lg:w-10/12 xl:w-7/12 mx-auto flex gap-4 lg:gap-8 flex-col sm:flex-row h-full shadow-none sm:shadow-md shadow-primary-100">
            <Calculator />
            <Billing />
        </section>
    )
}
