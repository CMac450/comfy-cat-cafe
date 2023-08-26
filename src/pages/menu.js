import React from 'react';
import { BakeryMenuCardComponent } from '../components/Cards/bakeryCards.js'
import { CoffeeMenuCardComponent } from '../components/Cards/coffeeCards.js'
import { SmoothieMenuCardComponent } from '../components/Cards/smoothieCards.js'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>

      <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: '50px' }}>Bakery Menu</h2>

      <p className='page-intro-text' style={{ padding: '50px 50px', fontSize: '18px' }}>
        The heart and soul of Comfy CatCafe & Bakery lies in our on-site bakery, where the warm ovens and skilled hands of our bakers
        bring to life a mouthwatering assortment of cakes, pastries, and cookies that are made with the same passion and dedication
        as our commitment to providing a memorable experience with our adorable resident cats.
      </p>

      <div className='bakery-section'>
        <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase', textDecoration: 'underline' }}>Pastries and Sweets</h6>
        <BakeryMenuCardComponent />
      </div>

      <div className='bakery-section'>
        <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase', textDecoration: 'underline' }}>Coffees</h6>
        <CoffeeMenuCardComponent />
      </div>

      <div className='bakery-section'>
        <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase', textDecoration: 'underline' }}>Smoothies</h6>
        <SmoothieMenuCardComponent />
      </div>
    </div>
  )
}

export default Menu;