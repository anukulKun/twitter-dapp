import React from 'react'
import SmallHome from '../components/smallpage'
import Home from '../components/home'

export default function Page() {
  return (
    <>
      <div className='block md:hidden'>
        <SmallHome />
      </div>
      <div className='hidden md:block'>
        <Home />
      </div>
    </>
  )
}