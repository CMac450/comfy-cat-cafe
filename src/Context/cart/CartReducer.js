import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from '../types'

const CartReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart,
            };
        }
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: state.cartItems,
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload.id)
            };
        }
        case UPDATE_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems,
            }
        }

        default:
            return state
    }
}

export default CartReducer