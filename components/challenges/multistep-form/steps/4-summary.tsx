import React, { useMemo, useState } from 'react'
import StepButton from '../element/button'
import { useMultiStepFormCtx } from '@/context/multistep-context';
import StepsLayout from '../layout/steps-layout';

export default function Summary() {

  const multiStepContext = useMultiStepFormCtx();

  const totalBill = useMemo(() => {
    let total = 0;

    if (multiStepContext?.stepFormData?.isMonthly) {
      total += multiStepContext?.stepFormData?.plan_type?.monthlyPrice;

      total += multiStepContext?.stepFormData?.addons?.length > 0 ?
        (multiStepContext?.stepFormData?.addons?.length > 1 ?
          multiStepContext?.stepFormData?.addons?.reduce((prev: any, current: any) =>
            prev + current?.monthlyPrice
            , 0)
          :
          multiStepContext?.stepFormData?.addons[0]?.monthlyPrice)
        : 0;

      return total;

    } else {
      total += multiStepContext?.stepFormData?.plan_type?.yearlyPrice;
      total += multiStepContext?.stepFormData?.addons?.length > 0 ?
        (multiStepContext?.stepFormData?.addons?.length > 1 ?
          multiStepContext?.stepFormData?.addons?.reduce((prev: any, current: any) =>
            prev + current?.yearlyPrice
            , 0)
          :
          multiStepContext?.stepFormData?.addons[0]?.yearlyPrice)
        : 0;

      return total;
    }
  }, [multiStepContext?.stepFormData]);

  return (
    <StepsLayout
      title="Finishing up"
      subTitle={"Double-check everything looks OK before confirming."}
    >
      <div className="bg-stepForm-neutral-100 p-4 rounded-lg">
        <ListItem
          heading={
            <div className=''>
              <h6 className='text-base font-medium text-stepForm-blue-800'>
                {multiStepContext?.stepFormData?.plan_type?.label}
                <span className='ml-1'>({multiStepContext?.stepFormData?.isMonthly ? "Monthly" : "Yearly"})</span>
              </h6>
              <button
                type='button'
                className="p-0 bg-transparent underline text-stepForm-neutral-400 text-sm"
                onClick={() => multiStepContext?.handleSetCurrentStep(2)}
              >Change</button>
            </div>
          }
          pricing={<p className='text-base font-semibold text-stepForm-blue-800 mt-1 ml-auto'>${multiStepContext?.stepFormData?.isMonthly ? multiStepContext?.stepFormData?.plan_type?.monthlyPrice : multiStepContext?.stepFormData?.plan_type?.yearlyPrice}/{multiStepContext?.stepFormData?.isMonthly ? "mo" : "yr"}</p>}
          containerClass={"border-b-2 border-stepForm-neutral-200 pb-4"}
        />

        {
          multiStepContext?.stepFormData?.addons?.map((item: any, idx: number) =>
            <ListItem
              key={idx}
              heading={
                <div>
                  <h6 className='text-sm text-stepForm-neutral-400'>{item?.label}</h6>
                </div>
              }
              pricing={<p className='text-sm font-medium text-stepForm-blue-800 text-opacity-80 mt-1 ml-auto'>+${multiStepContext?.stepFormData?.isMonthly ? item?.monthlyPrice : item?.yearlyPrice}/{multiStepContext?.stepFormData?.isMonthly ? "mo" : "yr"}</p>}
              containerClass='py-2 mt-2'
            />
          )
        }

      </div>

      <ListItem
        heading={
          <div>
            <h6 className='text-sm text-stepForm-neutral-400'>
              Total
              <span className='ml-1'>(per {multiStepContext?.stepFormData?.isMonthly ? "month" : "year"})</span>
            </h6>
          </div>
        }
        pricing={<p className='text-lg font-semibold text-stepForm-blue-500 mt-1 ml-auto'>${totalBill}/{multiStepContext?.stepFormData?.isMonthly ? "mo" : "yr"}</p>}
        containerClass='py-2 mt-2'
      />
    </StepsLayout>
  )
}

const ListItem = ({
  heading,
  pricing,
  containerClass = "",
}: {
  heading: any
  pricing: any,
  containerClass?: string
}) => {
  return (
    <div className={`flex items-center justify-between ${containerClass}`}>
      {heading}
      {pricing}
    </div>
  )
}