import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import 'primeflex/primeflex.css';
import { BillingPanel } from '../components/Checkout/BillingPanel';
import { PreviewPanel } from '../components/Checkout/PreviewPanel';
import { PaymentPanel } from '../components/Checkout/PaymentPanel';

//Checkout steps: Browse products -> Add items to cart -> Billing info -> 
//Preview order -> Payment -> Confirmation

const Checkout = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [billingInfo, setBillingInfo] = useState([]);
  const [fullName, setFullName] = useState('');
  const [zipCode, setZipcode] = useState('');

  const steps = [
    { label: 'Billing Details', id: 'billing-details' },
    { label: 'Preview Order', id: 'preview-order' },
    { label: 'Payment', id: 'payment' }
  ];

  const getUserBillingInfo = (firstname, lastname, zip) => {
    let fullName = `${firstname} ${lastname}`;
    setFullName(fullName);
    setZipcode(zip);
  }


  return (
    <div className='checkout grid'>
      <div className='col-12'><Steps model={steps} activeIndex={activeStepIndex} /></div>
      {activeStepIndex === 0 ? (
        <div className='col-12'>
          <BillingPanel
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            getUserBillingInfo={getUserBillingInfo}
          />
        </div>
      ) : activeStepIndex === 1 ? (
        <div className='col-12'>
          <PreviewPanel 
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
          />
        </div>
      ) : (
        <div className='col-12'>
          <PaymentPanel 
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            billingInfo={billingInfo}
            fullName={fullName}
            zipCode={zipCode}
          />
        </div>
      )}
    </div>
  )
}

export default Checkout;