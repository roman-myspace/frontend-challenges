import React from 'react'
import RadioInput from '../element/radio-input'
import { useMultiStepFormCtx } from '@/context/multistep-context';
import Switch from '@/components/elements/switch';
import StepButton from '../element/button';
import StepsLayout from '../layout/steps-layout';

const plansList = [
  {
    label: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "/icons/multistep-form/icon-arcade.svg"
  }, {
    label: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "/icons/multistep-form/icon-advanced.svg"
  }, {
    label: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: "/icons/multistep-form/icon-pro.svg"
  },
]

export default function SelectPlan() {

  const multiStepContext = useMultiStepFormCtx();

  return (
    <StepsLayout
      title="Select your plan"
      subTitle={"You have the option of monthly or yearly billing."}
    >

      <div className="grid grid-cols-3 gap-4">
        {
          plansList && plansList?.map((item: any, idx: number) =>
            <RadioInput
              key={idx}
              plan={item}
            />
          )
        }
      </div>

      <div className="mt-6 bg-stepForm-neutral-200 rounded py-2 px-6 w-full flex gap-4 items-center justify-center">
        <p className={`font-medium text-sm ${multiStepContext?.stepFormData?.isMonthly ? 'text-stepForm-blue-800' : 'text-stepForm-neutral-400'}`}>Monthly</p>
        <Switch
          isChecked={multiStepContext?.stepFormData?.isMonthly}
          handleChange={() => {
            multiStepContext?.handleSetSingleFieldValue("isMonthly", !multiStepContext?.stepFormData?.isMonthly)
          }}
        />
        <p className={`font-medium text-sm ${multiStepContext?.stepFormData?.isMonthly === false ? 'text-stepForm-blue-800' : 'text-stepForm-neutral-400'}`}>Yearly</p>
      </div>
    </StepsLayout>

  )
}
