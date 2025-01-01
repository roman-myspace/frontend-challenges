import dynamic from 'next/dynamic'
import Link from 'next/link'
const ChallengeListing = dynamic(() => import('@/components/landing-page/challenge-listing'), { ssr: false, loading: () => <span>Loading...</span> })

export default function Home() {
  return (
    <main className='landing-container'>
      
      <section className="w-11/12 lg:w-10/12 mx-auto py-20">
        <h1 className='text-4xl font-semibold'>Roman Tufail</h1>
        <p className='text-base text-slate-600  md:w-8/12 mt-4'>I'm a web developer specializing in building (and occasionally designing) exceptional digital experiences. My main focused is to building accessible, great user experience applications.</p>

        <Link href={"https://roman-tufail.vercel.app"} target='_blank' className='bg-black text-base text-white px-6 py-4 mt-6 block w-fit'>Learn more about me</Link>

      </section>

      <ChallengeListing />

    </main>
  )
}
