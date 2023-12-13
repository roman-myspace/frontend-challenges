import { useMultiStepFormCtx } from '@/context/multistep-context';
import React, { useState } from 'react'
import StepButton from '../element/button';
import ThankyouScreen from './thankyou-screen';


export default function StepsLayout({
  title,
  subTitle,
  children,
  handleSubmit
}: {
  title: string,
  subTitle: string,
  children?: React.ReactNode,
  handleSubmit?: () => void
}) {

  const multiStepContext = useMultiStepFormCtx();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePreviousStep = () => {
    multiStepContext?.handleSetCurrentStep(multiStepContext?.currentStep - 1);
  }
  const handleNextStep = () => {
    multiStepContext?.handleSetCurrentStep(multiStepContext?.currentStep + 1);
  }

  if (isSubmitted) {
    return (
      <ThankyouScreen />
    )
  }

  return (
    <form onSubmit={handleSubmit} className='h-full'>

      <section className='w-full h-full flex flex-col justify-between'>

        <div className="">
          <h1 className='text-3xl font-bold text-stepForm-blue-800'>{title}</h1>
          <p className='text-base text-stepForm-neutral-400 font-medium mt-2'>{subTitle}</p>
          <article className="mt-8">
            {children}
          </article>
        </div>

        <div className="flex items-center justify-between mt-10 fixed left-0 bottom-0 w-full bg-white p-4 sm:static">

          <StepButton
            label="Go Back"
            type={"button"}
            styleType='previous'
            handleClick={handlePreviousStep}
            className={`${multiStepContext?.currentStep === 1 ? 'invisible' : 'visible'}`}
          />

          {
            multiStepContext?.currentStep === multiStepContext?.totalSteps ?
              <StepButton
                label="Confirm"
                type={"button"}
                styleType='confirm'
                handleClick={() => setIsSubmitted(true)}
              />
              :
              multiStepContext?.currentStep === 1 ?
                <StepButton
                  label="Next Step"
                  type={"submit"}
                  styleType='next'
                />
                :
                <StepButton
                  label="Next Step"
                  type={"button"}
                  styleType='next'
                  handleClick={handleNextStep}
                />
          }

        </div>

      </section>
    </form>
  )
}
