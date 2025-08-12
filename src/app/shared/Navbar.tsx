'use client'

import React from 'react'
import BadgeButton from '@/components/ui/badge-button'
import ShareButton from '@/components/ui/share-button'
import { Github, Twitter, Search} from 'lucide-react'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import Link from 'next/link'

const Navbar = () => {

  return (
    <div className='sticky top-0 z-50 size-full glass-effect'>
      <nav className='flex justify-between p-5 items-center'>
        <div className='flex gap-10'>
          <a className='text-2xl font-extrabold flex items-center gap-2' href="">
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6"><ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)"></ellipse><defs><radialGradient id="paint0_radial_36_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"><stop offset="0.352001" stopColor="#090909"></stop><stop offset="0.591494" stopColor="#2770EA"></stop><stop offset="0.793825" stopColor="#FF7E97"></stop><stop offset="0.972489" stopColor="#FF9203"></stop></radialGradient></defs></svg>
            <span>skiper/ui</span>
            <span className='rounded-full border-1 border-red-500 text-sm text-red-500 px-3'>Beta</span>
          </a>
        <div className='flex gap-5'>
          <a href="#" className='text-xl dark:text-gray-400'>Components</a>
          <a href="#" className='text-xl dark:text-gray-400'>Pricing</a>
          <a href="#" className='text-xl dark:text-gray-400'>Newsletter</a>
        </div>
        </div>
        <div className='flex gap-5 items-center'>
          <BadgeButton Icon={Search} className={'mr-2 stroke-white dark:stroke-black stroke-3 text-neutral-800'}>Search</BadgeButton>
          <div className='flex gap-5 items-center'>
            <Link href='https://github.com/rahul-rathee7' target='_blank'><Github /></Link>
            <Link href='https://twitter.com/rahul_rathee7' target='_blank'><Twitter /></Link>
            <span className='h-fit self-center'><ThemeToggleButton /></span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
