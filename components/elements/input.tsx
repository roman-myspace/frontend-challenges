import { useRef } from "react"


// ************************************** Custom Input 
export default function Input({
    type = "text",
    placeholder = "",
    name,
    value,
    onChange,
    onBlur,
    isError = false,
    inputClass = ""
}: any) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={` ${inputClass} ${isError ? "!border-red-400" : "border-primary-50"}`}
        />
    )
}


Input.Label = ({
    label = "",
    error = "",
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    inputClass,
    prefixIcon = null,
    labelClass = "",
    errorTextClass = ""
}: any) => (
    <article className="space-y-2">
        <div className="flex justify-between items-center">
            <label className={`text-base ${labelClass}`}>{label}</label>
            {
                error && error?.length > 0 ?
                    <p className={`text-red-500 text-base ${errorTextClass}`}>{error}</p>
                    : ""
            }
        </div>
        <div className="relative ">
            <span className="text-primary-100 text-lg absolute left-3 top-1/2 -translate-y-1/2">{prefixIcon}</span>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputClass={inputClass}
                isError={error?.length > 0}
            />
        </div>
    </article>
)






// ************************************** Custom Checkbox 
export const CheckboxInput = ({
    label,
    name,
    value,
    isChecked,
    onChange,
    inputClass = "",
    containerClass = ""
}: any) => {

    const ref = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: any) => {
        onChange(e);
    }
    // console.log("is checked ==>> ", isChecked, value);



    return (
        <div className={` ${containerClass}`}>
            <input
                type="radio"
                name={name}
                value={value}
                onChange={handleChange}
                className="hidden"
                ref={ref}
            />
            <div
                className={`text-xl font-semibold px-4 py-2 text-center hover:bg-primary-400 hover:text-primary-900 rounded-md ${inputClass} ${isChecked ? 'bg-primary-400 border-primary-400' : 'bg-primary-900 text-primary-50'}`}
                onClick={() => ref?.current?.click()}
            >
                {label}
            </div>
        </div>
    )
}
