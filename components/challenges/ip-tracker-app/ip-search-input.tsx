
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";


export default function IPSearchInput({
  name,
  value,
  placeholder,
  onChange,
  handleSubmit,

}: any) {
  return (
    <article className='flex overflow-hidden items-stretch gap-0 rounded-lg mx-auto justify-center w-full sm:w-[400px] bg-white relative mt-6'>
      <input
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='py-2 px-4 w-full focus-within:outline-none'
      />
      <button
        type='button'
        onClick={handleSubmit}
        className="bg-ipApp-veryDarkGray text-white py-2 px-3"
      >
        <FaChevronRight />
      </button>
    </article>
  )
}
