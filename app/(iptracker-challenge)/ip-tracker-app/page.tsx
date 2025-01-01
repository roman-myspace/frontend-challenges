import SearchHead from "@/components/challenges/ip-tracker-app/search-head"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Frontend Mentor | IP Address Tracker',
  description: 'IP Address Tracker Challenges by frontendmentor.io',
}

import dynamic from 'next/dynamic';

const MapTracker = dynamic(() => import("@/components/challenges/ip-tracker-app/map-tracker"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

export default function IPTrackerApp() {



  return (
    <section className="">
      <SearchHead />
      <MapTracker />
    </section>
  )
}
