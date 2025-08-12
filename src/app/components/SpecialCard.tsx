'use client'

import { SkiperCard } from '@/components/ui/skiper-card'
import { cn } from '@/lib/utils'
import React from 'react'

const SpecialCard = ({ images }) => {
    return (
        <div className='border rounded-[24px] m-2'>
            <SkiperCard
                title='Components that pop'
                description='make your app'
                step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                )}
                step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                )}
                step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                )}
                step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                )}
                step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                )}
                image={{
                    step1dark1: images[0].src,
                    step1dark2: images[1].src,
                    step1light1: images[0].src,
                    step1light2: images[1].src,
                    step2dark1: images[2].src,
                    step2dark2: images[2].src,
                    step2light1: images[3].src,
                    step2light2: images[3].src,
                    step3dark: images[4].src,
                    step3light: images[4].src,
                    step4light: images[5].src,
                    alt: 'Skiper Card'
                }}
            />
        </div>
    )
}

export default SpecialCard
