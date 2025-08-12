'use client'

import React from 'react'
import { motion, useSpring, useScroll } from 'motion/react'

const ScrollX = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

  return (
    <div className='w-full sticky top-22 z-99 size-full'>
        <motion.div 
            id='scroll-indicator'
            style={{
                scaleX,
                position:"fixed",
                top:0,
                left:0,
                right:0,
                originX:0,
                height:3,
                backgroundColor:'#ff0088'
            }}
        />
    </div>
  )
}

export default ScrollX
