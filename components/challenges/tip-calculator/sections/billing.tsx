import { useTipCalCtx } from "@/context/tipcal-context";

export default function Billing() {

    const { tipAmount, resetBilling, isDisabledReset }: any = useTipCalCtx();

    return (
        <div className="bg-primary-900 text-primary-50 rounded-lg p-8 w-full sm:w-6/12 flex flex-col justify-between mt-8 sm:mt-0">

            <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div className="">
                        <h6 className='text-base text-primary-50 font-normal'>Tip Amount</h6>
                        <p className='text-sm text-primary-200'>/ person</p>
                    </div>
                    <h2 className='text-3xl 2xl:text-4xl text-primary-500 text-right font-bold'>${tipAmount?.tip_per_person.toFixed(2)}</h2>
                </div>

                <div className="flex justify-between items-start">
                    <div className="">
                        <h6 className='text-base text-primary-50 font-normal'>Total</h6>
                        <p className='text-sm text-primary-200'>/ person</p>
                    </div>
                    <h2 className='text-3xl 2xl:text-4xl text-primary-500 text-right font-bold'>${tipAmount?.total_per_person.toFixed(2)}</h2>
                </div>
            </div>

            <button
                type='button'
                onClick={resetBilling}
                className={`mt-12 bg-primary-500 text-center rounded-md py-2 px-4 w-full block text-lg font-semibold text-primary-900 uppercase ${isDisabledReset ? 'bg-opacity-40 cursor-not-allowed' : 'bg-opacity-100 cursor-pointer'}`}
                disabled={isDisabledReset}
            >Reset</button>

        </div>
    )
}
