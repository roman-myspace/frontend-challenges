import Link from "next/link";



export default function CountryCard({ data }: { data: any }) {
    return (
        <Link href={`/countries-listing/${data.alpha3Code.toLowerCase()}`} className="shadow-md">
            <div className="h-40">
                <img src={data.flag} alt={data.name} className='w-full h-full object-cover' />
            </div>

            <div className="px-4 py-6 text-countries-veryDarkBlueText dark:text-white bg-white dark:bg-countries-darkBlue">
                <h3 className='text-lg mb-4 font-bold tracking-wide'>{data.name}</h3>

                <p className='text-sm'><b>Population:</b> {data.population}</p>
                <p className='text-sm'><b>Region:</b> {data.region}</p>
                <p className='text-sm'><b>Capital:</b> {data.capital}</p>
            </div>
        </Link>
    )
}