import React from 'react'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div className='relative w-[100dvw] min-h-[100dvh] overflow-x-auto'>
      <Navbar/>
      <section id='home' className='h-[200vh] bg-gray-100'/>
      <section id='services' className='h-[200vh] bg-red-100'/>
      <section id='about' className='h-[200vh] bg-blue-100'/>
    </div>
  )
}

export default App