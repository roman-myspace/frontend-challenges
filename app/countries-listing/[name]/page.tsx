import CountryDetails from "@/components/challenges/countries-listing/country-detail";

export default function CountryDetailPage({ params }: { params: { name: string } }) {
    console.log("params => ", params);

    return (
        <CountryDetails param={params?.name} />
    )

}
