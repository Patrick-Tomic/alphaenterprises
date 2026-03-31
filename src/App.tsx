import { useState } from 'react'
import './App.css'
import logo from './assets/Alpha (2).png'
import Hero from './assets/hero.jpg'
import workArea from './assets/workarea.png'
import cleanGutter from './assets/cleanGutter.jpg'
import dirrtyGutter from './assets/dirtyGutter.jpg'
import lighting from './assets/service.jpg'
import lightingB from './assets/lightingB.png'
import lightingC from './assets/lightingC.png'

function App() {
  const services = [
    {
      service: "Permanent Outdoor Lighting",
      header: 'Permanent Lighting That Elevates Your Home',
      description: "Upgrade your property with sleek, permanent outdoor lighting that looks great every night of the year. Our energy-efficient, app-controlled systems let you change colors and brightness instantly for everyday lighting or special occasions. Enjoy increased curb appeal, security, and zero seasonal setup.",
      image: lighting
    },
    {
      service: "Christmas Lights",
      header: 'Holiday Lighting, Professionally Installed',
      description: "Make your home or business shine this holiday season with professional Christmas light installation. We handle the design, installation, and takedown, so you can enjoy a festive display without the stress. Clean lines, bright lights, and hassle-free service guaranteed.",
      image: ''
    },
    {
      service: "Gutter Cleaning",
      header: 'Prevent Water Damage With Clean Gutters',
      description: "Protect your home from water damage with professional gutter cleaning. We remove leaves, debris, and buildup to keep water flowing properly and prevent costly repairs. Safe, thorough, and done right the first time.",
      image: ''
    },
    {
      service: "Gutter Screen Installation",
      header: 'Stop Clogs Before They Start',
      description: "Keep leaves and debris out while water flows freely with professionally installed gutter screens. Our durable systems reduce clogs, maintenance, and overflow, helping protect your roof and foundation. A smart, long-term solution for hassle-free gutters.",
      image: ''
    },
    {
      service: "Downspout Repair",
      header: 'Proper Drainage Starts at the Downspout',
      description: "Ensure proper drainage with reliable downspout repair and replacement. We fix leaks, blockages, and poor water flow to direct rainwater safely away from your home. Prevent foundation damage and keep your gutters working efficiently.",
      image: ''
    },
    {
      service: "Window Cleaning",
      header: 'Clear Windows. Brighter Home.',
      description: "Enjoy crystal-clear windows with professional window cleaning services. We safely remove dirt, streaks, and buildup to brighten your home or business. Clean windows that enhance your view and boost curb appeal.",
      image: ''
    },
    {
      service: "Pool Cage Rescreening",
      header: 'Keep Bugs Out. Keep the Breeze In.',
      description: "Restore your pool enclosure with professional rescreening services. We replace damaged or torn screens to keep insects out while maintaining airflow and visibility. Durable materials, clean workmanship, and a refreshed look for your pool area.",
      image: ''
    },
    {
      service: "Soffit and Fascia Board Repair",
      header: 'Stop Water Damage at the Roof Edge',
      description: "Protect your roofline with professional soffit and fascia board repair. We fix rot, damage, and wear to prevent moisture intrusion and pest issues. Strong, clean repairs that restore both function and curb appeal.",
      image: ''
    }
  ]

  const [activeService, setActiveService] = useState(0)

  return (
    <>
      <nav id="navbar">
        <a href="#top" className="nav-logo">
          <img src={logo} alt="Alpha Enterprises" />
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="nav-cta">Get A Quote</a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-text">
          <span className="badge">Tampa Bay's Trusted Home Services</span>
          <h1>Brighten, Protect &amp; Upgrade Your Home</h1>
          <p>Professional outdoor lighting, gutter services, and home maintenance across Tampa Bay — from Brooksville to St. Pete.</p>
          <a href="#contact" className="btn-primary">Get A Free Quote →</a>
        </div>
        <div className="hero-gallery">
          <img src={Hero} alt="Outdoor Lighting Installation" className="gallery-main" />
          <img src={lightingB} alt="Permanent Outdoor Lighting" className="gallery-sm" />
          <img src={lightingC} alt="Holiday Lighting" className="gallery-sm" />
          <img src={dirrtyGutter} alt="Before Gutter Cleaning" className="gallery-sm" />
          <img src={cleanGutter} alt="After Gutter Cleaning" className="gallery-sm" />
        </div>
      </section>

      <section id="about">
        <div className="about-content">
          <span className="section-label">Who We Are</span>
          <h2>About Alpha Enterprises</h2>
          <p>
            At Alpha Enterprises, we provide dependable, high-quality handyman and outdoor home services throughout the greater Tampa Bay region. Our service area extends from Brooksville in the north to St. Petersburg in the south, reaching east to Plant City.
          </p>
          <p>
            We specialize in both seasonal and permanent outdoor lighting — known for vibrant Christmas light displays and energy-efficient permanent installations. Our team also handles gutter repair, screen installation, window cleaning, and a full range of professional home services.
          </p>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-num">8+</span>
              <span className="stat-label">Services Offered</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">Tampa Bay</span>
              <span className="stat-label">Full Coverage</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Satisfaction Focused</span>
            </div>
          </div>
        </div>
        <img src={workArea} alt="Alpha Enterprises at Work" className="about-img" />
      </section>

      <section id="services">
        <div className="services-top">
          <span className="section-label light">What We Do</span>
          <h2>Our Services</h2>
        </div>
        <div className="services-body">
          <ul className="services-nav">
            {services.map((svc, i) => (
              <li
                key={i}
                className={activeService === i ? 'svc-item active' : 'svc-item'}
                onClick={() => setActiveService(i)}
              >
                {svc.service}
              </li>
            ))}
          </ul>
          <div className="service-card">
            <h3>{services[activeService].header}</h3>
            <p>{services[activeService].description}</p>
            <a href="#contact" className="btn-service-cta">Get A Quote →</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-header">
          <span className="section-label light">Reach Out</span>
          <h2>Let's Get Started</h2>
          <p>Fill out the form and we'll get back to you with a free, no-obligation quote.</p>
        </div>
        <form className="contact-form" action="https://formspree.io/f/xbdjdzpj" method="POST">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" name="firstName" required />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="###-###-####" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="body">Message</label>
            <textarea id="body" name="body" minLength={20} maxLength={300} placeholder="Tell us about your project..." required></textarea>
          </div>
          <button type="submit" id="submitBtn">Send Message</button>
        </form>
      </section>
    </>
  )
}

export default App
