import React, { useRef } from 'react';
import { Panel } from 'primereact/panel'
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import 'primeflex/primeflex.css';
// import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa'
import { useForm, Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import './paymentpanel.css';

export function PaymentPanel({ activeStepIndex, setActiveStepIndex, fullName, zipCode }) {

    // TO-DO: 5/29/23 Use checkboxes to give user option o use same info from billing form here
    // const [cardName, setCardName] = useState('');
    // const [zip, setZip] = useState('');

    const defaultValues = {
        cardholder: '',
        cardnumber: '',
        expiration: '',
        cvv: '',
        zipcode: '',
        cardholderCheckbox: '',
        zipcodeCheckbox: '',
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        // watch,
    } = useForm({ defaultValues });

    const onSubmit = () => {
        showSuccess();
    }

    const getFormErrorMessage = (name) => {
        // console.log(errors);
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    // //watch checkbox
    // const watchCardholderCheckbox = watch('cardholderCheckbox');
    // const watchZipCodeCheckbox = watch('zipcodeCheckbox', false);

    // console.log(`watchCardholderCheckbox1: ${watchCardholderCheckbox}`);


    // const sameAsBillingInfo = (e) => {

    //     console.log(`watchCardholderCheckbox2: ${watchCardholderCheckbox}`);

    //     // console.log(`hit sameAsBilling function`);
    //     // console.log(`e1: ${e}`);


    //     // if (watchCardholderCheckbox) { //&& e.target.id === 'cardholderCheckbox'
    //     //     // setCardName(fullName);
    //     //     console.log(`Cardholder same as billing name`);
    //     //     console.log(`watchCardholderCheckbox1: ${watchCardholderCheckbox}`);
    //     //     //e.target.value = 'Test Name'
    //     //     //console.log(e.target.value);

    //     // } else if (!watchCardholderCheckbox) { //&& e.target.id === 'cardholderCheckbox'
    //     //     // setCardName('');
    //     //     console.log(`Cardholder NOT same as billing name`);
    //     //     console.log(`watchCardholderCheckbox2: ${watchCardholderCheckbox}`);
    //     //     //console.log(e.target.value);
    //     // }

    //     // if (e.checked && e.target.id === 'zipcodeCheckbox') {
    //     //     // setZipcode(Number(zipCode));
    //     //     console.log(`Card zipcode same as billing zip`);

    //     // } else if (!e.checked && e.target.id === 'zipcodeCheckbox') {
    //     //     // setZipcode(' ');
    //     //     console.log(`Card zipcode NOT same as billing zip`);
    //     // }
    // }

    const goBackToPreviousStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex - 1);
    }

    const toastConfirmation = useRef(null);

    const showSuccess = () => {
        toastConfirmation.current.show({
            severity: 'success', summary: 'Order Placed',
            detail: `Your order has been placed and a copy of the receipt as been emailed to you.
            You will now be taken back to the home screen`,
            life: 5000
        });

        //comment out while testing
        setTimeout(() => {
            window.location.href = '/';
        }, 5500)
    };


    return (
        <div className='payment-details p-fluid' style={{ marginBottom: '200px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Panel header='Payment Details'>
                    <SmallScreenPaymentPanel control={control} getFormErrorMessage={getFormErrorMessage} />
                    <LargeScreenPaymentPanel control={control} getFormErrorMessage={getFormErrorMessage} />
                </Panel>
                <div className='checkout-buttons-group' style={{ marginTop: '25px' }}>
                    <button className='button btn-checkout-back'
                        onClick={() => { goBackToPreviousStep(activeStepIndex) }}
                        style={{ float: 'left' }}
                    >
                        Back
                    </button>
                    <button className='button btn-checkout-pay-now'
                        label='Submit'
                        type='submit'
                        style={{ float: 'right' }}
                    >
                        Place order
                    </button>
                </div>

                <Toast className='toast-confirmation' ref={toastConfirmation} position="center" />
            </form>
        </div>
    )
}

function SmallScreenPaymentPanel({ control, getFormErrorMessage }) {
    return (
        <>
            <div className='grid show-on-small-screens' style={{ padding: '10px' }}>
                <span id='credit-card-icons' className='col-12' > {/*style={{ display: 'inline' }} */}
                    <div>
                        <FaCcVisa size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                        <FaCcMastercard size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                    </div>
                    <div>
                        <FaCcDiscover size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                        <FaCcAmex size={'2.5em'} color='#242424' />
                    </div>
                </span>
                <span className='col-12'>
                    <Controller
                        name='cardholder'
                        control={control}
                        rules={{ required: 'Cardholder name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='cardholder'>Name on card</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='John Doe'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-12'>
                    <Controller
                        name='cardnumber'
                        control={control}
                        rules={{ required: 'Card number name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='cardnumber'>Credit Card Number</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='9999 9999 9999 9999'
                                    slotChar=''
                                    placeholder='1234 5647 8910 9874'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-12'>
                    <Controller
                        name='expiration'
                        control={control}
                        rules={{ required: 'Expiration date is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='expiration'>Expiration Date</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='99 / 99'
                                    slotChar='mm / yy'
                                    placeholder='01 / 23'
                                // keyfilter={/(2[3-9])+$/}
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-12'>
                    <div style={{ display: 'inline' }}>
                        <div style={{ float: 'left' }}>
                            <label htmlFor='cvv'>CVV</label>
                        </div>
                        <div style={{ float: 'right' }}>
                            <Tooltip target='.cvv-question-mark' />
                            <i className='cvv-question-mark pi pi-question-circle'
                                data-pr-tooltip='Security Code'
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="left center-2"
                                style={{ cursor: 'pointer' }}
                                size={'1rem'}
                            ></i>
                        </div>
                    </div>
                    <Controller
                        name='cvv'
                        control={control}
                        rules={{ required: 'CVV is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='999'
                                    slotChar=''
                                    placeholder='123'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-12'>
                    <Controller
                        name='zipcode'
                        control={control}
                        rules={{ required: 'Zipcode is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='zipcode'>Zipcode</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='99999'
                                    slotChar=''
                                    placeholder='12345'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
            </div>
        </>
    )
}

function LargeScreenPaymentPanel({ control, getFormErrorMessage }) {
    return (
        <div className='grid show-on-large-screens'>
                <span id='credit-card-icons' className='col-12' > {/*style={{ display: 'inline' }} */}
                    <div className='credit-card-icon-row'>
                        <FaCcVisa size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                        <FaCcMastercard size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                        <FaCcDiscover size={'2.5em'} color='#242424' style={{ marginRight: '10px' }} />
                        <FaCcAmex size={'2.5em'} color='#242424' />
                    </div>
                </span>
                <span className='col-6'>
                    <Controller
                        name='cardholder'
                        control={control}
                        rules={{ required: 'Cardholder name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='cardholder'>Name on card</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='John Doe'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-6'>
                    <Controller
                        name='cardnumber'
                        control={control}
                        rules={{ required: 'Card number name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='cardnumber'>Credit Card Number</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='9999 9999 9999 9999'
                                    slotChar=''
                                    placeholder='1234 5647 8910 9874'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-4'>
                    <Controller
                        name='expiration'
                        control={control}
                        rules={{ required: 'Expiration date is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='expiration'>Expiration Date</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='99 / 99'
                                    slotChar='mm / yy'
                                    placeholder='01 / 23'
                                // keyfilter={/(2[3-9])+$/}
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-4'>
                    <div style={{ display: 'inline' }}>
                        <div style={{ float: 'left' }}>
                            <label htmlFor='cvv'>CVV</label>
                        </div>
                        <div style={{ float: 'right' }}>
                            <Tooltip target='.cvv-question-mark' />
                            <i className='cvv-question-mark pi pi-question-circle'
                                data-pr-tooltip='Security Code'
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="left center-2"
                                style={{ cursor: 'pointer' }}
                                size={'1rem'}
                            ></i>
                        </div>
                    </div>
                    <Controller
                        name='cvv'
                        control={control}
                        rules={{ required: 'CVV is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='999'
                                    slotChar=''
                                    placeholder='123'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
                <span className='col-4'>
                    <Controller
                        name='zipcode'
                        control={control}
                        rules={{ required: 'Zipcode is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='zipcode'>Zipcode</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask='99999'
                                    slotChar=''
                                    placeholder='12345'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </span>
        </div>
    )
}

/**
                                    <>
                                        <label htmlFor='cardholder'>Name on card</label>
                                        <InputText id={field.name}
                                            // value={cardname}
                                            value={cardname ? (field.value = cardname) : field.value}
                                            // className={classNames
                                            //     (!cardname || !field.value ? 'p-invalid' : 'p-filled' 
                                            //     { 'p-invalid': fieldState.error })}
                                            className={
                                                // !field.value ? 'p-invalid' : 'p-filled'
                                                classNames({ 'p-invalid': fieldState.error })
                                            }
                                            // onChange={
                                            //     (e) => cardname !== fullName ? field.onChange(setCardName(e.target.value)) :
                                            //     field.onChange(e.target.value)
                                            // }

                                            // onChange={
                                            //     (e) => {field.onChange(cardname ? cardname : e.target.value); console.log(e)}
                                            // }
                                            onInput={
                                                (e) => {field.onInput(cardname ? cardname : e.target.value)}
                                            }
                                            placeholder='John Doe'
                                        />
                                        {getFormErrorMessage(field.name)}
                                    </>
 */