"use client"

import React, { useState } from 'react'
import Ageinput from './age-input'
import { useFormik } from 'formik'
import { InitialValues } from '@/@types/age-calculator-types'
import * as Yup from "yup";
import ShowAge from './show-age'

export default function AgeCalculatorCard() {

    const [calculatedBirth, setCalculatedBirth] = useState<any>({
        year: undefined,
        month: undefined,
        day: undefined
    })

    const initialValues: InitialValues = {
        day: 0,
        month: 0,
        year: 0
    }

    const formik = useFormik({
        initialValues,
        validationSchema: new Yup.ObjectSchema({
            day: Yup.number().required("This field is required"),
            month: Yup.number().required("This field is required"),
            year: Yup.number().required("This field is required"),
        }),
        onSubmit: (values) => {
            let birthDate = new Date();
            birthDate.setFullYear(values.year, values.month - 1, values.day);

            const currentDate = new Date();
            let years = currentDate.getFullYear() - birthDate.getFullYear();
            let months = currentDate.getMonth() - birthDate.getMonth();
            let days = currentDate.getDate() - birthDate.getDate();

            if (days < 0) {
                months--;
                days += new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0
                ).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            setCalculatedBirth({
                year: Number(years),
                month: Number(months),
                day: Number(days)
            });


        }
    })

    console.log("formik touched: ", formik.touched, " --- formik errors: ", formik.errors);


    return (
        <section className="w-[500px] bg-white shadow-lg shadow-ageCal-grey-200 rounded-l-lg rounded-tr-2xl overflow-hidden rounded-br-[100px] p-6">
            <form onSubmit={formik.handleSubmit}>
                <article className="w-full grid grid-cols-3 xs:grid-cols-4 gap-2 xs:gap-4 items-start relative border-b border-b-ageCal-grey-200 pb-12 xs:pb-6 box-border">
                    <Ageinput
                        label="Day"
                        name="day"
                        value={formik.values?.day}
                        error={formik.touched.day && formik.errors.day ? formik.errors.day : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"DD"}
                        min={1}
                        max={31}
                    />
                    <Ageinput
                        label="month"
                        name="month"
                        value={formik.values?.month}
                        error={formik.touched.month && formik.errors.month ? formik.errors.month : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"MM"}
                        min={1}
                        max={12}
                    />
                    <Ageinput
                        label="year"
                        name="year"
                        value={formik.values?.year}
                        error={formik.touched.year && formik.errors.year ? formik.errors.year : undefined}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"YYYY"}
                        min={1920}
                        max={2023}
                    />
                    <button type='submit' className="bg-transparent w-12 h-12 absolute  -bottom-6 right-1/2 xs:right-0 left-1/2 xs:left-auto -translate-x-1/2 xs:translate-x-0">
                        <img
                            src='/icons/age-app-icon-arrow.svg'
                            className='block w-full h-full rounded-full bg-ageCal-purple p-2'
                        />
                    </button>
                </article>
            </form>

            <ShowAge calculatedBirth={calculatedBirth} />

        </section>
    )
}
