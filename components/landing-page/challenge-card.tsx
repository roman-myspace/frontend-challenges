import { ChallengeCardProps } from '@/@types/landing-page-types'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function ChallengeCard({ data }: { data: ChallengeCardProps }) {
  return (
    <section className='p-3 rounded-xl overflow-hidden bg-white space-y-4'>
        <figure className='w-full overflow-hidden rounded-lg '>
            <img src={data?.thumbnail} alt={data.title} className='w-full h-full object-cover' />
        </figure>

        <div className="space-y-2 px-4 py-2">
            <div className={`text-sm level-${data.level}`}>{data.level}</div>
            <h4 className='text-lg font-bold text-slate-700'>{data.title}</h4>
            <div className="flex justify-between gap-4">
                <ul className="flex items-center gap-1.5 ">
                    {
                        data.tech_stack?.map((item, idx) => 
                            <p key={idx} className={`bg-inherit text-sm font-semibold  tech-${item.toLowerCase()}`}>{item}</p>
                        )
                    }
                </ul>
            </div>
        </div>
        <div className="flex items-center gap-6 mx-4 pb-4">
            <Link href={`${data.demo_link}`} className='text-base w-full text-center font-medium block bg-black py-2 rounded-full text-white'>Demo</Link>
            <Link href={`${data.github_link.url}`} target='_blank' className='rounded-full text-gray-600 p-2'> <Github size={18} /> </Link>

        </div>

    </section>
  )
}
