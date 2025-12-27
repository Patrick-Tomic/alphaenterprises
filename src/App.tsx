import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/Alpha (2).png'
import Hero from './assets/hero.jpg'
import workArea from './assets/workarea.png'
 
import lighting from './assets/service.jpg'
function App() {
  const [count, setCount] = useState(0)

  const services = [
    {
      service:"Permanent Outdoor Lighting",
      header:'Permanent Lighting That Elevates Your Home',
      description:"Upgrade your property with sleek, permanent outdoor lighting that looks great every night of the year. Our energy-efficient, app-controlled systems let you change colors and brightness instantly for everyday lighting or special occasions. Enjoy increased curb appeal, security, and zero seasonal setup.",
      image: lighting
    },
     {
      service:"Christmas Lights",
      header:'Holiday Lighting, Professionally Installed',
      description:"Make your home or business shine this holiday season with professional Christmas light installation. We handle the design, installation, and takedown, so you can enjoy a festive display without the stress. Clean lines, bright lights, and hassle-free service guaranteed.",
      image: ''
    },
     {
      service:"Gutter Cleaning",
      header:'Prevent Water Damage With Clean Gutters',
      description:"Protect your home from water damage with professional gutter cleaning. We remove leaves, debris, and buildup to keep water flowing properly and prevent costly repairs. Safe, thorough, and done right the first time.",
      image: ''
    },
     {
      service:"Gutter Screen Installation",
      header:'Stop Clogs Before They Start',
      description:"Keep leaves and debris out while water flows freely with professionally installed gutter screens. Our durable systems reduce clogs, maintenance, and overflow, helping protect your roof and foundation. A smart, long-term solution for hassle-free gutters.",
      image: ''
    },
     {
      service:"Downspout Repair",
      header:'Proper Drainage Starts at the Downspout',
      description:"Ensure proper drainage with reliable downspout repair and replacement. We fix leaks, blockages, and poor water flow to direct rainwater safely away from your home. Prevent foundation damage and keep your gutters working efficiently.",
      image: ''
    },
     {
      service:"Window Cleaning",
      header:'Clear Windows. Brighter Home.',
      description:"Enjoy crystal-clear windows with professional window cleaning services. We safely remove dirt, streaks, and buildup to brighten your home or business. Clean windows that enhance your view and boost curb appeal.",
      image: ''
    },
     {
      service:"Pool Cage Rescreening",
      header:'Keep Bugs Out. Keep the Breeze In.',
      description:"Restore your pool enclosure with professional rescreening services. We replace damaged or torn screens to keep insects out while maintaining airflow and visibility. Durable materials, clean workmanship, and a refreshed look for your pool area.",
      image: ''
    },
     {
      service:"Soffit and Fascia Board Repair",
      header:'Stop Water Damage at the Roof Edge',
      description:"Protect your roofline with professional soffit and fascia board repair. We fix rot, damage, and wear to prevent moisture intrusion and pest issues. Strong, clean repairs that restore both function and curb appeal.",
      image: ''
    }
  ]
  let timer = 10000
   const [header,setHeader] = useState(services[0].header)
 const [description, setDescription] = useState(services[0].description)



 
      useEffect(() => {
        let count = 1
         setInterval(() => {
          if(count > 7) {
            count = 0
          }
          setDescription(services[count].description)
          setHeader(services[count].header)

          count++
        }, timer)
      }, [])
       const listItems:any = services.map((service) => {
    return( 
      <li onClick={() => {
       setDescription(service.description)
       setHeader(service.header)
       timer = 15000
      }}>
        {service.service}
      </li>
    )
  })
  return (
    <>
    <nav className=' flex bg-[#FFFFFF] justify-around items-center sticky h-[10vh] top-0 z-50'>
     <a href="#top"> <img
      className='w-[5vw]'
       src={logo} 
       alt=""
        /></a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
       
    </nav>
    <div id='HeroHome' className='bg-[#2866BA] p-[50px] flex justify-around items-center h-screen'>
      <img 
      className='w-[30vw] rounded-[25px] '
      src={Hero}
      alt="Lighting Services in Tampa Area" />
      <div className='flex flex-col justify-around h-full items-center'>
     <h1 className='w-[25vw] text-[#FFFFFF]'>
        Brighten, Protect, and Upgrade Your Home Across Tampa Bay
        </h1>
         <a id='quoteTag' className='' href="#">Get A Free Quote</a>
         </div>
    </div>
    <div className='flex h-screen justify-around items-center p-[50px]' id='about'>
      <div className='flex flex-col items-center justify-around'>
         <h1>
        About Us
      </h1>
      <p className=' w-[50vw] text-[28px] '>
        At Alpha Enterprises, we provide reliable, professional handyman and outdoor 
        services across a wide area—from St. Pete and Apollo Beach in the south to Spring 
        Hill and Brooksville in the north, and as far east as Zephyrhills and Plant City.<br></br><br></br>

        Specializing in light installations, we’re best known for creating festive, eye-catching
         Christmas light displays, while also offering permanent outdoor lighting to enhance homes
          year-round. Beyond lighting, our team handles gutter repair, screen repair and installation, 
          and a variety of handyman services to keep your home in top shape.<br></br><br></br>

          With a commitment to quality, attention to detail, and customer satisfaction, Alpha Enterprises 
          brings professionalism and a personal touch to every project—big or small.
      </p>
   </div>
   <img className='w-[35vw]' src={workArea} alt="" />
    </div>
    <div id='services' className='bg-[#2866BA] h-screen flex items-center justify-around'>
   
    <div >
 
    <div id="service" className="flex bg-[#EAF0F6] flex-col w-[40vw] h-[75vh] border-2 justify-center items-center">
        <h1>
            {header}
        </h1>
        <p className="text-[24px] p-[5vw]">
            {description}
        </p>
    </div>
    </div>
    <div className='flex flex-col'>
       <h1>
      Our Services
    </h1>
    <ul className=' h-[60vh] flex flex-col justify-around text-[20px]'>
      {listItems}
        </ul>
    </div>
    </div>
    <div className='flex flex-col justify-around items-center bg-[#122A4A]' id='formDiv'>
  
<div id='formContainer' className='border-2 bg-[#ffffff] flex flex-col items-center'>
     <h1 className='self-center'>
      Contact Us
    </h1>
    <form className='flex flex-col justify-around w-[50vw] ml-[100px] ' action="https://formspree.io/f/xbdjdzpj" method='POST'>   
         
        <label id='firstLabel' htmlFor="firstName">First Name:  </label>
        <input id='firstName' name='firstName' type="text" required />

        <label htmlFor="lastName">Last Name:</label>
        <input id='lastName' type="text" name="lastName" required />

        <label htmlFor="email">Email:</label>
        <input id='email' type="email" name='email' required />

        <label htmlFor="body"> Message Us Today!</label>
        <textarea  name="body" id="formBody" required>

        </textarea>
        <button id='submitBtn' onClick={() => {
          const firstName: any = document.getElementById('firstName')
          const lastName = document.getElementById('lastName')
          const email: any = document.getElementById('email')
          
         if(document.querySelector('textarea')?.value.length != 10){
          console.log('hit')
         }
        }}>
          Enter
        </button>
    </form>
    </div>
    </div>
    <footer>

    </footer>
    </>
  )}

export default App