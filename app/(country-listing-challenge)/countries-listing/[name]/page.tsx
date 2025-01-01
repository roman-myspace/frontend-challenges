import CountryDetails from "@/components/challenges/countries-listing/country-detail";

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Countries Listing Challenge',
    description: 'Countries Listing Challenges apps by frontendmentor.io',
}

export default function CountryDetailPage({ params }: { params: { name: string } }) {
    console.log("params => ", params);

    return (
        <CountryDetails param={params?.name} />
    )

}
