'use client'

import React, { useEffect, useState } from 'react'
import AnimatedNumberRandom from '@/components/ui/animated-number-random'

const Number = () => {
    const [random, setrandom] = useState(70);
    useEffect(() => {
        const interval = setInterval(() => {
            setrandom(Math.floor(Math.random() * (77-66 + 1)) + 66);
        }, 1500);
        return () => clearInterval(interval);
    })

  return (
    <div className='mt-20 border-2 flex gap-5 px-10 py-5 border-dashed rounded-[24px]'>
      <AnimatedNumberRandom value={random} diff={1}/>
      <p>of Next Js Saas Products Looks similar right<br/> ? Lets Change the approach</p>
    </div>
  )
}

export default Number
