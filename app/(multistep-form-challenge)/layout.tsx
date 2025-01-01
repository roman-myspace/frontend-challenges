import StepSidebar from '@/components/challenges/multistep-form/layout/step-sidebar'
import Footer from '@/components/layout/footer'
import MultiStepFormContextProvider from '@/context/multistep-context'
import React from 'react'


export default function MultiStepFormLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MultiStepFormContextProvider>
                <main className="multistep_form__wrapper bg-stepForm-neutral-200 min-h-screen max-h-screen overflow-auto flex sm:items-center justify-center">

                    <section className="sm:bg-white w-full sm:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 mx-auto rounded-none sm:rounded-2xl shadow-md shadow-stepForm-neutral-200 p-0 sm:p-6 flex flex-col sm:flex-row h-full">

                        <aside className='px-6 lg:px-10 py-10 lg:py-14 w-full sm:w-[300px] h-[200px] sm:h-[500px] xl:h-[600px] bg-stepForm-blue-500 lg:w-[400px] sm:rounded-xl bg-[url(/icons/multistep-form/bg-sidebar-mobile.svg)] sm:bg-[url(/icons/multistep-form/bg-sidebar-desktop.svg)] bg-cover bg-bottom bg-no-repeat'>
                            <StepSidebar />
                        </aside>

                        <article className="sm:w-full h-full sm:h-[500px] xl:h-[600px]">
                            {children}
                        </article>

                    </section>

                </main>
                <Footer />
            </MultiStepFormContextProvider>
        </>
    )
}
