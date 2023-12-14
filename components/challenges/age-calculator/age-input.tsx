import { AgeInputTypes } from '@/@types/age-calculator-types'
import React from 'react'

export default function Ageinput({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  placeholder = "",
  min,
  max
}: AgeInputTypes) {
  // console.log("error: ", error);
  return (
    <div className='space-y-1'>
      <label className={`text-[10px] uppercase tracking-wider font-extrabold ${error != undefined ? 'text-ageCal-red' : ''}`}>{label}</label>
      <input
        type='number'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full rounded font-bold text-ageCal-grey-800 border text-base py-2 px-4 placeholder:font-extrabold focus-within:outline-none ${error != undefined ? 'border-ageCal-red' : ''}`}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      {
        error != undefined ? <p className='text-[10px] italic text-ageCal-red'>{error}</p> : ""
      }
    </div>
  )
}
