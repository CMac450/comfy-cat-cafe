import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../../firebase_setup/firebase.js';
import Row from 'react-bootstrap/Row';
import 'primeflex/primeflex.css';
import { ItemComponent } from './smoothieItemComponent.js'
import CartContext from '../../Context/cart/CartContext';

export function SmoothieMenuCardComponent() {
    const smoothieMenu = collection(firestoreDb, 'smoothie_menu');
    const [smoothies, setSmoothies] = useState([]);
    useEffect(() => {
        const getSmoothieItems = async () => {
            const data = await getDocs(smoothieMenu);

            setSmoothies(data.docs.map((doc) =>
            (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ),
            ));
        };

        getSmoothieItems();
    }, [])

    const { addToCart } = useContext(CartContext);
    const getSelectedItemInfo = (id, name, price, counter, size, flavor, url) => {
        addToCart({
            id: id,
            name: name,
            price: price[size],
            quantity: counter,
            totalPrice: price[size] * counter,
            size: size,
            flavor: flavor,
            img: url,     
        });
       
    }

    return (
        <div className='row'>
            <Row xs={1} md={2} lg={4} className='g-4'>
                {
                    React.Children.toArray(
                        smoothies.map((item, index) => {
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