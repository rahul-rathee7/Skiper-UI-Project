import React from 'react'
import AiInput from '@/components/ui/ai-input'
import BadgeButton from '@/components/ui/badge-button'
import { SparklesIcon } from 'lucide-react'

const Aiinput = () => {
  return (
    <div className='m-2 p-8 border rounded-[24px] bg-gray-300/10'>
      <BadgeButton Icon={SparklesIcon} className={'mr-2 fill-pink-500 stroke-1 text-neutral-800'}>Latest Component</BadgeButton>
      <h1 className='text-4xl font-bold'>AI Input</h1>
      <p className=''>Seamless AI Chat Input box</p>
      <div className='mt-10'>
      <AiInput />
      </div>
    </div>
  )
}

export default Aiinput
