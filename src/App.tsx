import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/Alpha (2).png'
import Hero from './assets/hero.jpg'
import workArea from './assets/workarea.png'
import MakeService from './components/makeService'
import lighting from './assets/service.jpg'
function App() {
  const [count, setCount] = useState(0)
 
  const services = [
    {
      service:"Permanent Outdoor Lighting",
      description:"Upgrade your property with sleek, permanent outdoor lighting that looks great every night of the year. Our energy-efficient, app-controlled systems let you change colors and brightness instantly for everyday lighting or special occasions. Enjoy increased curb appeal, security, and zero seasonal setup.",
      image: lighting
    },
     {
      service:"Christmas Lights",
      description:"Make your home or business shine this holiday season with professional Christmas light installation. We handle the design, installation, and takedown, so you can enjoy a festive display without the stress. Clean lines, bright lights, and hassle-free service guaranteed.",
      image: ''
    },
     {
      service:"Gutter Cleaning",
      description:"Protect your home from water damage with professional gutter cleaning. We remove leaves, debris, and buildup to keep water flowing properly and prevent costly repairs. Safe, thorough, and done right the first time.",
      image: ''
    },
     {
      service:"Gutter Screen Installation",
      description:"Keep leaves and debris out while water flows freely with professionally installed gutter screens. Our durable systems reduce clogs, maintenance, and overflow, helping protect your roof and foundation. A smart, long-term solution for hassle-free gutters.",
      image: ''
    },
     {
      service:"Downspout Repair",
      description:"Ensure proper drainage with reliable downspout repair and replacement. We fix leaks, blockages, and poor water flow to direct rainwater safely away from your home. Prevent foundation damage and keep your gutters working efficiently.",
      image: ''
    },
     {
      service:"Window Cleaning",
      description:"Enjoy crystal-clear windows with professional window cleaning services. We safely remove dirt, streaks, and buildup to brighten your home or business. Clean windows that enhance your view and boost curb appeal.",
      image: ''
    },
     {
      service:"Pool Cage Rescreening",
      description:"Restore your pool enclosure with professional rescreening services. We replace damaged or torn screens to keep insects out while maintaining airflow and visibility. Durable materials, clean workmanship, and a refreshed look for your pool area.",
      image: ''
    },
     {
      service:"Soffit and Fascia Board Repair",
      description:"Protect your roofline with professional soffit and fascia board repair. We fix rot, damage, and wear to prevent moisture intrusion and pest issues. Strong, clean repairs that restore both function and curb appeal.",
      image: ''
    }
  ]
      useEffect(() => {
      
      }, [])
    const children: any = services.forEach((service) => {
      console.log(service)
      return(
      <MakeService service={service.service} description={service.description} image={service.image}></MakeService>
      )
    }

        
          )
      console.log(children)
  return (
    <>
    <nav className=' flex bg-[#FFFFFF] justify-around items-center sticky h-[10vh] top-0 z-50'>
      <img
      className='w-[5vw]'
       src={logo} 
       alt=""
        />
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Process</a>
        <a href="#">Contact Us</a>
       
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
         <a className='' href="#">Get A Free Quote</a>
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
   <img src={workArea} alt="" />
    </div>
    <div id='services' className='bg-[#1B3F73] h-screen'>
    <h1>
      Our Services
    </h1>
    <div className='flex justify-around'>
  <MakeService service={services[0].service} description={services[0].description} image={services[0].image}></MakeService>
    </div>
    </div>
    <div className='flex flex-col justify-around items-center' id='formDiv'>
    <h1>
      Contact Us
    </h1>
    <form className='flex flex-col justify-around w-[50vw]' action="">
        <label htmlFor="firstName">First Name:  </label>
        <input name='firstName' type="text" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="" />

        <label htmlFor="email">Email:</label>
        <input type="email" name='email' />

        <label htmlFor="body"> Reach Out!</label>
        <textarea name="body" id="formBody">

        </textarea>
        <button id='submitBtn' type='submit'>
          Enter
        </button>
    </form>
    </div>
    <footer>

    </footer>
    </>
  )}

export default App