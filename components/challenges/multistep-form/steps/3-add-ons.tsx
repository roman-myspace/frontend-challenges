import React from 'react'
import StepButton from '../element/button'
import { useMultiStepFormCtx } from '@/context/multistep-context';
import CheckboxCard from '@/components/elements/checkbox-card';
import { log } from 'console';
import StepsLayout from '../layout/steps-layout';

const addonsList = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10
  }, {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20
  }, {
    label: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20
  },
]


export default function AddOns() {

  const multiStepContext = useMultiStepFormCtx();

  const handlePreviousStep = () => {
    multiStepContext?.handleSetCurrentStep(multiStepContext?.currentStep - 1);
  }
  const handleNextStep = () => {
    multiStepContext?.handleSetCurrentStep(multiStepContext?.currentStep + 1);
  }

  const handleSetAddon = (checked: boolean, addon: any) => {
    if (checked) {
      let alladdons = [...multiStepContext?.stepFormData?.addons];
      alladdons.push(addon);
      multiStepContext?.handleSetSingleFieldValue("addons", alladdons)
    } else {
      if (multiStepContext?.stepFormData?.addons?.length > 0) {
        let filterData = multiStepContext?.stepFormData?.addons?.filter((item: any) => item.label != addon.label);
        multiStepContext?.handleSetSingleFieldValue("addons", [...filterData]);
      }
    }
  }

  return (
    <StepsLayout
      title="Pick add-ons"
      subTitle={"Add-ons help enhance your gaming experience."}
    >
      <div className="space-y-6">
        {
          addonsList && addonsList?.map((item: any, idx: number) =>
            <CheckboxCard
              key={idx}
              addon={item}
              handleChange={handleSetAddon}
              isChecked={multiStepContext?.stepFormData?.addons?.length > 0 && multiStepContext?.stepFormData?.addons?.filter((ads: any) => ads?.label === item?.label)?.length > 0 ? true : false}
            />
          )
        }
      </div>
    </StepsLayout>
  )
}
