import React, { useContext } from "react"
import CartContext from "../Context/cart/CartContext"
import { InputNumber } from "primereact/inputnumber";
import { Divider } from "primereact/divider";
import './CartItem.css'

export const CartItem = ({ cartItems }) => {

    const { removeItem, updateItemQuantityViaUI } = useContext(CartContext);

    const storageArray = JSON.parse(localStorage.getItem('cart'));

    return (
        <div>
            <ItemCards removeItem={removeItem} updateItemQuantityViaUI={updateItemQuantityViaUI} cartItems={cartItems} storageArray={storageArray}/>
        </div>
    )
}

/*Actual cards in Shopping Cart modal */
function ItemCards({ removeItem, updateItemQuantityViaUI, cartItems, storageArray }) {

    const formatCurrency = (num) => {
        if (typeof num !== 'number') {
            num = Number(num);
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else {
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }

    };

    const removeItemFromCart = (id, quantity) => {
        removeItem(id, quantity);
    }

    const updateItemData = (id, e, prevQuantity, price) => {
        updateItemQuantityViaUI(id, e, prevQuantity, price);
    }

    return (
        <>
            {
                React.Children.toArray(storageArray.map((item, index) => {
                    return (
                        <>
                            <div className="col-12 p-fluid grid-container">
                                <div className=" grid container1">
                                    <div className="section-2-cart col-12" style={{ backgroundColor: 'white' }}>
                                        <div className="col-12 cart-text" style={{ backgroundColor: 'white' }}>
                                            <h4><strong>{item.name}</strong></h4>
                                            <div>
                                                <strong><h4>{formatCurrency(item.totalPrice)}</h4></strong>
                                            </div>
                                            <br />
                                            <div>
                                                {
                                                    item.flavor ? (
                                                        <h6>Flavor: {item.flavor}</h6>
                                                    ) :
                                                        <></>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    item.size ? (
                                                        <h6>Size: {item.size}</h6>
                                                    ) :
                                                        <></>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    item.temp ? (
                                                        <h6>Temperature: {item.temp}</h6>
                                                    ) :
                                                        <></>
                                                }
                                            </div>

                                            <div>
                                                {
                                                    item.milk ? (
                                                        <h6>Milk: {item.milk}</h6>
                                                    ) :
                                                        <></>
                                                }
                                            </div>
                                        </div>
                                            <div className='button-group-cart-items'> {/* style={{ display: 'flex', flexDirection: 'row' }} */}
                                                <div className="remove-btn">
                                                    <button className="button" onClick={() => { removeItemFromCart(item.id, item.quantity) }}
                                                        label="Remove"
                                                    >
                                                    Remove
                                                    </button>
                                                </div>

                                                <div className='update-btn'>
                                                    <InputNumber  value={item.quantity} min={0} max={12} mode='decimal' showButtons
                                                        onValueChange={(e) => { updateItemData(item.id, e.value, item.quantity, item.price) }} 
                                                    />
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </>
                    )
                }))
            }
        </>
    )
}


export const OrderPreview = ({ cartItems, storageArray }) => {

    const formatCurrency = (num) => {
        if (typeof num === 'string') {
            num = Number(num);
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        } else {
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }

    };

    const priceTemplate = (item) => {
        return formatCurrency(item.price);
    };

    return (
        <>
            <table id='preview-items'>
                <thead>
                    <tr>
                        <th className="column-heading"><p>Item</p></th>
                        <th className="column-heading"><p>Quantity</p></th>
                        <th className="column-heading"><p>Price</p></th>
                    </tr>
                </thead>
                <tbody>
                    {storageArray.map((item) => (
                        <tr>
                            <td className="item-data">
                                <div><p className="item-name" >{item.name}</p></div>

                                <div className='details'>
                                    {
                                        item.flavor ? (
                                            <>Flavor: {item.flavor}</>
                                        ) :
                                            <></>
                                    }
                                </div>

                                <div className='details'>
                                    {
                                        item.size ? (
                                            <>Size: {item.size}</>
                                        ) :
                                            <></>
                                    }
                                </div>

                                <div className='details'>
                                    {
                                        item.temp ? (
                                            <>Temperature: {item.temp}</>
                                        ) :
                                            <></>
                                    }
                                </div>

                                <div className='details'>
                                    {
                                        item.milk ? (
                                            <>Milk: {item.milk}</>
                                        ) :
                                            <></>
                                    }
                                </div>
                            </td>
                            <td id='item-quantity' className="item-data">{item.quantity}</td>
                            <td className="item-data">{priceTemplate(item)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td id='subtotal' className='item-data'>Subtotal:</td>
                        <td></td>
                        <td id='subtotal-price' className='item-data'>
                            {storageArray.reduce((prevValue, item) => prevValue + item.totalPrice, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}