import MinimalCard, { MinimalCardTitle, MinimalCardDescription } from '@/components/ui/minimal-card'
import React, { useState } from 'react'

const Articles = () => {
  const content = [
    {heading: "Free AI Marketing", para: "An AI Cofounder that knows your brand. Start creating marketing copy that converts."},
    {heading: "Free SEO Improvement Tool", para: "Quickly evaluate your website's SEO performance for free. AI improvements + Open graph preview."},
    {heading: "Full Stack Shadcn Templates", para: "Comprehensive Next.js + Supabase templates built with Tailwind CSS, Skiper components, and shadcn."},
  ]

  return (
    <div className='max-w-4xl border-2 p-7 rounded-[24px]'>
      <p className='ml-1 border w-fit px-3 rounded-[24px] py-1 text-md bg-gray-400/20 font-normal mb-6 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sticker mr-1  fill-[#A3C0E0] stroke-1 text-neutral-800"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path><path d="M14 3v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h0"></path><path d="M16 13h0"></path><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"></path></svg>Additional goods</p>
      <div className='flex gap-5'>
      {
        content.map((item, i) => 
        <MinimalCard key={i} className='p-2 flex flex-col gap-2 h-fit'>
          <MinimalCardTitle>{item.heading}</MinimalCardTitle>
          <MinimalCardDescription>{item.para}</MinimalCardDescription>
        </MinimalCard>)
      }
      </div>
    </div>
  )
}

export default Articles
