import { useEffect, useReducer, useState } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from '../types'

//use children prop to pass state down to children
const CartState = ({ children }) => {
    // //check if cart storage item exist, if not, create it
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const initialState = {
        showCart: false,
        cartItems: []//JSON.parse(localStorage.getItem('cart')) || [],
    };

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        const initialCartValue = JSON.parse(storedCart);
        return initialCartValue || [];
    });

    const [numCartItems, setNumCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        const initialCartValue = JSON.parse(storedCart);
        let num = 0;

        for (let i = 0; i < initialCartValue.length; i++) {
            num += initialCartValue[i].quantity;
        }

        return num
    })

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });

        let cartCopy = [...cart];
        let existingItem = cartCopy.filter(i => (i.name === item.name) && (i.flavor === item.flavor) && (i.size === item.size));

        if (existingItem.length > 0) {
            existingItem[0].quantity += item.quantity;
            existingItem[0].totalPrice += item.totalPrice;
            setCart(cartCopy);
            let stringCart = JSON.stringify(cartCopy);
            localStorage.setItem('cart', stringCart);
            state.cartItems = cart;

        } else {
            cartCopy.push(item)
            setCart(cartCopy);
            let stringCart = JSON.stringify(cartCopy);
            localStorage.setItem('cart', stringCart);
            state.cartItems.push(item);
        }

        //update cart length 
        let cartLengthCopy = numCartItems;
        cartLengthCopy += item.quantity;
        setNumCartItems(cartLengthCopy);
        let stringNum = JSON.stringify(cartLengthCopy);
        localStorage.setItem('numCartItems', stringNum);
    };

    const updateItemQuantityViaUI = (id, newQuantity, prevQuantity, price) => {
        dispatch({ type: UPDATE_ITEM_QUANTITY, payload: { id, newQuantity, prevQuantity, price } });

        ///filter item from local storage array
        let cartCopy = [...cart];

        //return cartCopy as all items that *did* match incoming id
        let itemCopy = cartCopy.filter(i => i.id === id);

        //update quantity and totalPrice properties in object
        itemCopy[0].quantity = newQuantity
        itemCopy[0].totalPrice = price * newQuantity;

        // //set actual cart array = cartCopy
        setCart(cartCopy);
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem('cart', stringCart);

        //set cartItems = cart from local storage
        state.cartItems = cart;

        ////update cart length
        let cartLengthCopy = numCartItems;
        if (prevQuantity < newQuantity) {
            //add 
            let totalAdded = newQuantity -= prevQuantity;
            cartLengthCopy += totalAdded;
            setNumCartItems(cartLengthCopy);
            let stringCartLength = JSON.stringify(cartLengthCopy);
            localStorage.setItem('numCartItems', stringCartLength);
        } else if (prevQuantity > newQuantity) {
            //subtract
            let totalSubtracted = prevQuantity -= newQuantity;
            cartLengthCopy -= totalSubtracted;
            setNumCartItems(cartLengthCopy);
            let stringCartLength = JSON.stringify(cartLengthCopy);
            localStorage.setItem('numCartItems', stringCartLength);
        }

    }

    const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART });
    };

    const removeItem = (id, itemQuantity) => {
        dispatch({ type: REMOVE_ITEM, payload: { id, itemQuantity } });

        //filter item from local storage array
        let cartCopy = [...cart];

        //return cartCopy as all items that didn't match incoming id
        cartCopy = cartCopy.filter(i => i.id !== id);
        setCart(cartCopy);
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem('cart', stringCart);

        //update cart length
        //need to get item quantity and subtract by that
        let cartLengthCopy = numCartItems;
        cartLengthCopy -= itemQuantity;
        setNumCartItems(cartLengthCopy);
        let stringCartLength = JSON.stringify(cartLengthCopy);
        localStorage.setItem('numCartItems', stringCartLength);

    };

    if (cart.length > 0) {
        cart.forEach((item, i) => {
            item.id = i + 1;
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('numCartItems', JSON.stringify(numCartItems));
    }, [cart, numCartItems]); //passing dependies into the array will run the above code on the first render and every time one of the dependency values changes

    return (
        <CartContext.Provider
            value={{
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                updateItemQuantityViaUI,
                showHideCart,
                removeItem,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState