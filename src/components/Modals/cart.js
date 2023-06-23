import { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";
import { Dialog } from 'primereact/dialog';
import { CartItem } from "../CartItem";

const Cart = () => {

    const { showCart, cartItems, showHideCart } = useContext(CartContext);

    const storageArray = JSON.parse(localStorage.getItem('cart'));

    const goToCheckout = () => {
        const checkoutLink = '/checkout';
        window.open(checkoutLink, '_self');
    }

    return (
        <div>
            {storageArray.length ? (        /*cartItems.length  */
                <Dialog
                    style={{ height: '80vh' }}
                    draggable={false}
                    blockScroll={true}
                    visible={showCart}
                    onHide={showHideCart}
                    className='cart-modal'
                    header='Shopping Cart'
                    footer={(
                        <div>
                            <button className='button primary-button' onClick={showHideCart}>
                                Close
                            </button>
                            <button className='button primary-button' onClick={() => { goToCheckout() }}>
                                Continue to Checkout
                            </button>
                        </div>
                    )}
                >
                    <div className='cart-body'>
                        <CartItem cartItems={cartItems} />
                    </div>
                    <br />
                    <div className='cart-total'>
                        <strong>
                            <div className="cart-total-left"><h3>Total:</h3></div>
                            <div className="cart-total-right">
                                <strong>
                                    <h3>
                                        {storageArray.reduce((prevValue, item) => prevValue + item.totalPrice, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        {/* {cartItems.reduce((prevValue, item) => prevValue + item.totalPrice, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} */}
                                    </h3>
                                </strong>
                            </div>
                        </strong>
                    </div>
                </Dialog>
            ) : (
                <Dialog
                    visible={showCart}
                    onHide={showHideCart}
                    className='cart-modal'
                    header='Cart is Empty'
                >
                    Your cart is empty. To checkout, please add items to your cart.
                </Dialog>
            )}

        </div>
    )
}

export default Cart