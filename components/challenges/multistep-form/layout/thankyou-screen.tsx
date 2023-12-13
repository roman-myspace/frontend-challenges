import React from 'react'

export default function ThankyouScreen() {
    return (
        <section className='w-full h-full flex items-center justify-center'>
            <div className="w-full lg:w-10/12 mx-auto flex items-center justify-center flex-col gap-4">
                <img
                    src='/icons/multistep-form/icon-thank-you.svg'
                    alt='form submitted check'
                    className='w-16 object-cover mb-4'
                />
                <h2 className='text-3xl font-bold text-stepForm-blue-800 text-center'>Thank you!</h2>
                <p className='text-stepForm-neutral-400 text-sm leading-normal text-center '>Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at <a href='mailto:support@loremgaming.com' className='text-sm text-stepForm-neutral-400 hover:underline'>support@loremgaming.com</a>.</p>
            </div>
        </section>
    )
}
