import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../../firebase_setup/firebase.js';
import Row from 'react-bootstrap/Row';
import 'primeflex/primeflex.css';
import { ItemComponent } from './coffeeItemComponent.js'
import CartContext from '../../Context/cart/CartContext';

export function CoffeeMenuCardComponent() {
    const coffeeMenu = collection(firestoreDb, 'coffee_menu');
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const getCoffeeItems = async () => {
            const data = await getDocs(coffeeMenu);

            setCoffees(data.docs.map((doc) => 
                (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ),
            ));  
        };

        getCoffeeItems();
    }, []) 

    const { addToCart, addToItemQuantity } = useContext(CartContext);
    const getSelectedItemInfo = (id, name, price, counter, size, milk, temp, url) => {
        addToCart({
            id: id,
            name: name,
            price: price[size],
            quantity: counter,
            totalPrice: price[size] * counter,
            size: size,  
            milk: milk,
            temp: temp,   
            flavor: '',
            img: url,
        });
       
    }

    return (
        <div className='row'>
            <Row xs={1} md={2} lg={2} xl={4} className='g-4'>
                {
                    React.Children.toArray(
                        coffees.map((item, index) => {
                            return (
                                <div style={{margin: '0 auto'}}>
                                    <ItemComponent
                                        key={item.id + '-' + index}
                                        item={item}
                                        getSelectedItemInfo={getSelectedItemInfo}                                                           
                                    />
                                </div>
                            )
                        })
                    )
                }
            </Row>
        </div>
    );    
}