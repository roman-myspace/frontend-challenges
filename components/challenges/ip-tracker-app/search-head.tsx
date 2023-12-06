"use client";

import React, { useEffect, useState } from 'react'
import IPSearchInput from './ip-search-input';
import IPDataBar from './ip-data-bar';
import { useIPCtx } from '@/context/iptracker-context';

export default function SearchHead() {

    const ipContext = useIPCtx();
    const [myip, setMyIp] = useState("");

    const handleGetIPData = () => {
        if (myip?.length > 0) {
            ipContext?.getUserInfoByIP(myip);
        }
    }

    useEffect(() => {
        if (typeof window != undefined)
            ipContext?.getUserInfoByIP("192.212.174.101");
    }, []);

    return (
        <header className="bg-[url(/images/ip-bg-pattern.png)] bg-cover bg-center bg-no-repeat h-[350px] sm:h-[280px] w-full px-4 py-14 relative ">
            <h1 className='text-white text-2xl md:text-3xl font-semibold text-center'>IP Address Tracker</h1>
            <IPSearchInput
                name="myip"
                value={myip}
                placeholder={"Search for any IP address or domain"}
                onChange={(e: any) => setMyIp(e.target.value)}
                handleSubmit={handleGetIPData}
            />
            <IPDataBar />
        </header>
    )
}
