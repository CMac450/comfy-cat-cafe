import React, { useState, useContext } from 'react';
import { Badge } from 'primereact/badge';
import CartContext from '../../Context/cart/CartContext';
import '../NavBar/navbar.css'
import Cart from '../Modals/cart';


function NavigationBar() {
    const { showHideCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const handleMenuShow = () => {
        let x = document.getElementById('responsiveNavMenu');
        if (x.className === 'nav-menu') {
            x.className += ' responsive';
        } else {
            x.className = 'nav-menu';
        }
    }

    return (
        <>
            <div className='nav-menu' id='responsiveNavMenu'>
                <a href='/' className='icon-logo' >
                    <img src='logoWithNoText.svg' className='w-10' alt='business logo: a cat curled in a teacup'></img>
                </a>
                <a href='/' >Home</a>
                <a href='/resident-cats' >Meet the cats</a>
                <a href='/menu' >Menu</a>
                <a href='#'>
                    <i id='icon-cart' className='pi pi-shopping-cart icon-cart' onClick={showHideCart} >
                        <Badge className='icon-cart-badge' value={JSON.parse(localStorage.getItem('numCartItems'))}></Badge>
                    </i>
                </a>
   
                <a href='#' onClick={() => { handleMenuShow() }} className='menuBar' >
                    <i className='pi pi-bars'></i>
                </a>
            </div>

            <Cart showModal={showModal} handleModalClose={handleModalClose} />
        </>
    );

}

//3/28/23: Wanted to try saving cart items to local storage variable and using the length of the
//to populate the badge num. But if the local storage is empty then the page throws an error
//this happens when the application is started for the first time or when you manually 
//remove everything from local storage.

//5/10/23: Badge num is now being populated from a state var called numCartItems. This is set
//and updated in CartState in the addToCart and removeItem functions.


export default NavigationBar