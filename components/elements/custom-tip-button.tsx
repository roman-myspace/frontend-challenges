import Input from "./input";

export default function CustomTipButton({
    handleChange,
    value,
    isCustomTipEnabled,
    enableCustomTip
}: any) {

    const handleChangeCustomTip = (e: any) => {
        console.log("event ==>> ", e.target.name, e.target.value);

        handleChange(e);
    }

    return (
        <article className="w-full">
            {
                isCustomTipEnabled ?
                    <Input
                        name="tip"
                        type="number"
                        onChange={handleChangeCustomTip}
                        value={value}
                        placeholder={"35"}
                    />
                    :
                    <button
                        type="button"
                        className={`text-xl w-full font-semibold px-4 py-2 text-center rounded-md bg-primary-50 text-primary-900`}
                        onClick={enableCustomTip}
                    >Custom</button>
            }
        </article>
    )
}
