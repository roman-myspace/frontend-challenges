import { PersonalInfoTypes } from '@/@types/multistep-form-types';
import Input from '@/components/elements/input'
import { useMultiStepFormCtx } from '@/context/multistep-context';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import StepButton from '../element/button';
import StepsLayout from '../layout/steps-layout';

export default function YourInfo() {

  const multiStepContext = useMultiStepFormCtx();

  const initialValues: PersonalInfoTypes = {
    name: "",
    email: "",
    phone: ""
  }
  const formik = useFormik({
    initialValues,
    validationSchema: new Yup.ObjectSchema({
      name: Yup.string().required("Name is Required."),
      email: Yup.string().required("Email is Required."),
      phone: Yup.string().required("Phone Number is required.")
    }),
    onSubmit: (values: any) => {
      multiStepContext?.handleSetFieldValue(values);
      multiStepContext?.handleSetCurrentStep(multiStepContext?.currentStep + 1);
    }
  })

  return (
    <StepsLayout
      title="Personal info"
      subTitle={"Please provide your name, email address, and phone number."}
      handleSubmit={formik.handleSubmit}
    >
      <div className="space-y-6">
        <Input.Label
          label={"Name"}
          type="text"
          placeholder="e.g, Stephen King"
          name={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
          inputClass={"rounded-lg px-4 py-2.5 w-full text-base border border-stepForm-neutral-300 focus-within:outline-none placeholder:text-stepForm-neutral-400"}
          labelClass={"text-stepForm-blue-800"}
          errorTextClass={"text-sm"}
        />
        <Input.Label
          label={"Email Address"}
          type="email"
          placeholder="e.g, stephenking@lorem.com"
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          inputClass={"rounded-lg px-4 py-2.5 w-full text-base border border-stepForm-neutral-300 focus-within:outline-none placeholder:text-stepForm-neutral-400"}
          labelClass={"text-stepForm-blue-800"}
          errorTextClass={"text-sm"}
        />
        <Input.Label
          label={"Phone Number"}
          type="text"
          placeholder="e.g, +1 234 567 890"
          name={"phone"}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
          inputClass={"rounded-lg px-4 py-2.5 w-full text-base border border-stepForm-neutral-300 focus-within:outline-none placeholder:text-stepForm-neutral-400"}
          labelClass={"text-stepForm-blue-800"}
          errorTextClass={"text-sm"}
        />
      </div>
    </StepsLayout>
  )
}
