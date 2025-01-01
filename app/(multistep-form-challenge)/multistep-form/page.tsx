import StepFormsWrapper from "@/components/challenges/multistep-form/step-forms-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Multi-Step Form Challenges',
  description: 'Multi-Step Form Challenges by frontendmentor.io',
}


export default function MultiStepFormPage() {
  return (
    <section className="py-8 px-6 h-full sm:pt-10 w-11/12 xs:w-11/12 xl:w-9/12 mx-auto bg-white sm:z-20 relative -top-28 sm:top-0 rounded-2xl shadow-sm shadow-stepForm-neutral-200 sm:shadow-none">
      <StepFormsWrapper />
    </section>
  )
}
