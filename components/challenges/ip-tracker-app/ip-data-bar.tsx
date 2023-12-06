"use client"

import { useIPCtx } from '@/context/iptracker-context'
import React from 'react'

export default function IPDataBar() {

    const ipContext = useIPCtx();

    return (
        <section className='bg-white p-4 rounded-lg absolute left-1/2 right-1/2 -translate-x-1/2 w-11/12 xl:w-10/12 -bottom-12 grid sm:grid-cols-2 md:grid-cols-4 [&>div]:border-transparent md:[&>div:first-child]:border-transparent z-[9999]'>
            <DataItem
                subHeading={"Ip Address"}
                data={`${ipContext?.ipData?.ip ?? "-    "}`}
            />
            <DataItem
                subHeading={"Location"}
                data={`${ipContext?.ipData ? ipContext?.ipData?.location?.region + ", " + ipContext?.ipData?.location?.country : "-"}`}
            />
            <DataItem
                subHeading={"Timezone"}
                data={`${ipContext?.ipData?.location?.timezone ?? "-"}`}
            />
            <DataItem
                subHeading={"ISP"}
                data={`${ipContext?.ipData?.isp ?? "-"}`}
            />
        </section>
    )
}


const DataItem = ({
    subHeading,
    data
}: {
    subHeading: string,
    data: string
}) => {
    return (
        <div className="p-2 md:py-4 md:px-6 border-l">
            <h6 className='uppercase text-ipApp-darkGray text-xs'>{subHeading}</h6>
            <h2 className='text-ipApp-veryDarkGray font-semibold text-lg md:text-xl'>{data}</h2>
        </div>
    )
}