import React, { useContext } from 'react';
import { Panel } from 'primereact/panel'
import 'primeflex/primeflex.css';
import { OrderPreview } from '../CartItem';
import CartContext from "../../Context/cart/CartContext"
import './previewpanel.css';

export function PreviewPanel({ activeStepIndex, setActiveStepIndex }) {
    const { cartItems } = useContext(CartContext);

    const storageArray = JSON.parse(localStorage.getItem('cart'));

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    return (
        <div className='order-details' style={{ marginBottom: '200px' }}>
            <Panel header='Preview Order'>
                <OrderPreview cartItems={cartItems} storageArray={storageArray} />
            </Panel>
            <div className='checkout-buttons-group' style={{marginTop: '25px' }}>
                <button className='button btn-checkout-back' onClick={() => { goBackToPreviousStep(activeStepIndex) }} style={{float: 'left'}}>
                    Back
                </button>
                <button className='button btn-checkout-continue' onClick={() => { moveToNextStep(activeStepIndex) }} style={{float: 'right'}}>
                    Continue
                </button>
            </div>
        </div>
    )
}