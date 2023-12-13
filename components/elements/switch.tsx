import React from 'react'

export default function Switch({ isChecked, handleChange }: { isChecked: boolean, handleChange: () => void }) {
    return (
        <div className='cursor-pointer bg-stepForm-blue-800 w-11 p-1 rounded-full' onClick={handleChange}>
            <p className={`w-4 h-4 bg-white rounded-full ${isChecked ? '' : 'ml-auto'}`}></p>
        </div>
    )
}
