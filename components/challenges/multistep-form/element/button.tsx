import React from 'react'

export default function StepButton({
    label,
    type = 'button',
    handleClick,
    styleType,
    className = "",
}: {
    label: string,
    type?: any,
    handleClick?: () => void,
    styleType: string,
    className?: string
}) {

    const btnStyle: any = {
        next: "bg-stepForm-blue-800 text-white px-6 py-2 hover:bg-opacity-80 border border-stepForm-blue-800",
        previous: "text-stepForm-neutral-400 hover:underline",
        confirm: "bg-stepForm-blue-500 text-white px-6 py-2 hover:bg-opacity-80 border border-stepForm-blue-500",
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`rounded-md text-sm ${btnStyle[`${styleType}`]} ${className}`}
        >{label}</button>
    )
}
