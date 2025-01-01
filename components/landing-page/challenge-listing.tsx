"use client"
import allChallenges from "@/@data/completed-challenges-list.json";
import ChallengeCard from './challenge-card';

export default function ChallengeListing() {
  return (
    <section className='bg-gray-100'>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 lg:w-10/12 mx-auto py-10">
            {
                allChallenges && allChallenges?.map((item, index) => 
                    <ChallengeCard key={index} data={item} />
                )
            }
        </div>


    </section>
  )
}
