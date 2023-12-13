import CustomTipButton from '@/components/elements/custom-tip-button';
import Input, { CheckboxInput } from '@/components/elements/input'
import { useTipCalCtx } from '@/context/tipcal-context';
import { FaUser, FaDollarSign } from "react-icons/fa";


export default function Calculator() {

    const {
        defaultTips,
        errorMessage,
        isCustomTipEnabled,

        billData,
        setIsCustomTipEnabled,

        handleChange,
        handleSetCustomTip,
    }: any = useTipCalCtx();

    return (
        <div className="space-y-6 w-full sm:w-6/12">
            <Input.Label
                label={"Bill"}
                type="number"
                placeholder="0"
                name={"bill_amount"}
                value={billData.bill_amount}
                onChange={handleChange}
                error={errorMessage.bill_amount}
                prefixIcon={<FaDollarSign />}
                inputClass={"bg-primary-50 rounded-md px-4 py-1.5 w-full text-xl text-right font-semibold text-primary-900 border-2 hover:border-primary-500 focus-within:border-primary-500 focus:border-primary-500 focus-within:outline-none placeholder:text-primary-100"}
                labelClass="text-primary-900"
            />

            <div className="">
                <div className="flex justify-between items-center">
                    <label className="text-base text-primary-900">Select Tip %</label>
                    {
                        errorMessage.tip && errorMessage.tip?.length > 0 ?
                            <p className="text-red-500 text-base">{errorMessage.tip}</p>
                            : ""
                    }
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 mt-2">
                    {
                        defaultTips && defaultTips?.map((item: any, idx: Number) =>
                            <CheckboxInput
                                key={idx}
                                name={"tip"}
                                value={item}
                                label={`${item}%`}
                                containerClass={"cursor-pointer"}
                                isChecked={Number(billData?.tip) == item}
                                onChange={handleChange}
                            />
                        )
                    }
                    {
                        <CustomTipButton
                            value={billData.tip}
                            handleChange={handleSetCustomTip}
                            isCustomTipEnabled={isCustomTipEnabled}
                            enableCustomTip={() => setIsCustomTipEnabled(true)}
                        />
                    }
                </div>
            </div>

            <Input.Label
                label={"Number of People"}
                type="number"
                placeholder="0"
                name={"number_of_peoples"}
                value={billData?.number_of_peoples}
                onChange={handleChange}
                error={errorMessage.number_of_peoples}
                prefixIcon={<FaUser />}
                inputClass={"bg-primary-50 rounded-md px-4 py-1.5 w-full text-xl text-right font-semibold text-primary-900 border-2 hover:border-primary-500 focus-within:border-primary-500 focus:border-primary-500 focus-within:outline-none placeholder:text-primary-100"}
                labelClass="text-primary-900"
            />
        </div>
    )
}
