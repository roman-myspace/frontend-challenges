import FilterWrapper from '@/components/challenges/countries-listing/filter-wrapper'
import ListingWrapper from '@/components/challenges/countries-listing/listing-wrapper'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Countries Listing Challenge',
    description: 'Countries Listing Challenges apps by frontendmentor.io',
}

export default function CountriesListingPage() {
    return (
        <section className="py-8 px-12 h-full">
            <FilterWrapper />
            <ListingWrapper />

        </section>
    )
}
