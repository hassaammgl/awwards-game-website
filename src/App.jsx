import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <section className='z-0 min-h-screen bg-blue-500' />
    </main>
  )
}

export default App
