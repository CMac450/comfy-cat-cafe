import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { firestoreDb } from '../../firebase_setup/firebase.js';
import Row from 'react-bootstrap/Row';
import 'primeflex/primeflex.css';
import {ItemComponent} from './bakeryItemComponent'
import CartContext from '../../Context/cart/CartContext';

export function BakeryMenuCardComponent() {
    const bakedGoodsMenu = collection(firestoreDb, 'baked_goods_menu');
    const [bakedGoods, setBakedGoods] = useState([]);
    useEffect(() => {
        const getBakedGoodsItems = async () => {
            const data = await getDocs(bakedGoodsMenu);

            setBakedGoods(data.docs.map((doc) =>
            (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ),
            ));
        };

        getBakedGoodsItems();
    }, [])

    const { addToCart } = useContext(CartContext);
    const getSelectedItemInfo = (id, name, price, multipleFlavors, counter, flavor, url) => {

        addToCart({
            id: id,
            name: name,
            price: price,
            quantity: counter,
            totalPrice: price * counter,
            size: '',
            flavor: multipleFlavors === true ? flavor : '',   
            img: url   
        });
    }

    return (
        <div className='row'>
            <Row xs={1} md={2} lg={2} xl={4} className='g-4'>
                {
                    React.Children.toArray(
                        bakedGoods.map((item, index) => {
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