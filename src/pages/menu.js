import React from 'react';
import { BakeryMenuCardComponent } from '../components/Cards/bakeryCards.js'
import { CoffeeMenuCardComponent } from '../components/Cards/coffeeCards.js'
import { SmoothieMenuCardComponent } from '../components/Cards/smoothieCards.js'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>

      <div className='small-section-heading' >
        Bakery Menu
      </div>

      <p className='page-intro-text' style={{padding: '50px 50px', fontSize: '18px'}}>
        The heart and soul of Comfy CatCafe & Bakery lies in our on-site bakery, where the warm ovens and skilled hands of our bakers
        bring to life a mouthwatering assortment of cakes, pastries, and cookies that are made with the same passion and dedication
        as our commitment to providing a memorable experience with our adorable resident cats.
      </p>

      <div className='bakery-section'>
        <p className='heading' id='menu-bakery'>Baked Goods</p>
        <BakeryMenuCardComponent />
      </div>

      <div className='bakery-section'>
        <p className='heading' id='menu-coffees'>Coffee</p>
        <CoffeeMenuCardComponent />
      </div>

      <div className='bakery-section'>
        <p className='heading'>Smoothies</p>
        <SmoothieMenuCardComponent />
      </div>
    </div>
  )
}

export default Menu;