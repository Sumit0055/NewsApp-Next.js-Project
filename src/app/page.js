import Home from '@/components/Home'
import React, { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
    {/* <Home/> */}
    <Suspense>
      <Home/>
    </Suspense>
    </>
  )
}
