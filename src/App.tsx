import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/Alpha (2).png'
import Hero from './assets/hero.jpg'
function App() {
  const [count, setCount] = useState(0)
      useEffect(() => {
        
      }, [])
  return (
    <>
    <nav className=' flex justify-around items-center sticky top-0 z-50'>
      <img
      className='w-[20vw]'
       src={logo} 
       alt=""
        />
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Process</a>
        <a href="#">Contact Us</a>
        <a href="#">Get A Free Quote</a>
    </nav>
    <div id='HeroHome' className='bg-[#2866BA] p-[50px] flex justify-around items-center'>
      <img 
      className='w-[30vw] rounded-[25px] '
      src={Hero}
      alt="Lighting Services in Tampa Area" />
     <h1 className='w-[25vw] text-[#FFFFFF]'>
         Professional Exterior Home Services You Can Trust
        </h1>
    </div>
    <div className='flex justify-around items-center p-[50px]' id='about'>
      <p className=' w-[50vw] text-[28px] '>
        Alpha Enterprises is a trusted . We provide professional Christmas light 
        installation, permanent outdoor lighting, gutter cleaning, window cleaning,
         downspout repair, gutter screen installation, and pool cage rescreening. Our 
         team is fully insured and committed to quality workmanship, safety, and dependable 
         service. We take pride in helping homeowners protect their investment and enhance 
         their home’s appearance year-round.
      </p>
      <h1>
        About Us
      </h1>
    </div>
    </>
  )}

export default App