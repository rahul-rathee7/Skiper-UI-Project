'use client'

import React, { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import LoadingPage from './components/LoadingPage'

const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  },[])

  return (
    <div>
      {loading ? <LoadingPage /> : <LandingPage />}
    </div>
  )
}

export default Home
