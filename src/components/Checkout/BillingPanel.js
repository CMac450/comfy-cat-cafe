import React from 'react';
import { Panel } from 'primereact/panel'
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';
import { useForm, Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';
import './billingpanel.css';

export function BillingPanel({ activeStepIndex, setActiveStepIndex, getUserBillingInfo }) {

    const moveToNextStep = (activeStepIndex) => {
        setActiveStepIndex(activeStepIndex + 1);
    }

    const defaultValues = {
        firstname: '',
        lastname: '',
        city: '',
        state: '',
        zipcode: '',
        address: '',
        email: '',
        phone: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        getUserBillingInfo(data.firstname, data.lastname, data.zipcode)
        moveToNextStep(activeStepIndex);
    }

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className='billing-details p-fluid' style={{ marginBottom: '100px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Panel header='Billing details'>
                    <SmallScreenBillingPanel control={control} getFormErrorMessage={getFormErrorMessage}/>
                    <LargeScreenBillingPanel control={control} getFormErrorMessage={getFormErrorMessage}/>
                </Panel>
                <div className='checkout-buttons-group' style={{ marginTop: '25px' }}>
                    <button className='button btn-checkout-continue'
                        label='Continue'
                        type='submit'
                        style={{ float: 'right' }}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

/*screens 320-412 width */
function SmallScreenBillingPanel({ control,getFormErrorMessage }) {
    return (
        <>
            <div className='grid show-on-small-screens' style={{ padding: '10px' }}>
                <div className='col-12'>
                    <Controller
                        name='firstname'
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='firstname'>First name</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='John'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12'>
                    <Controller
                        name='lastname'
                        control={control}
                        rules={{ required: 'Last name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='lasttname'>Last name</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='Doe'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12' id='show-on-large-screens'>
                    <Controller
                        name='city'
                        control={control}
                        rules={{ required: 'City is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='city'>City</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='San Francisco'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-6' id='show-on-large-screens'>
                    <Controller
                        name='state'
                        control={control}
                        rules={{ required: 'State is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='state'>State</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='CA'
                                    mask='aa'
                                    slotChar=''
                                    style={{ textTransform: 'uppercase' }}
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-6' id='show-on-large-screens'>
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
                                    placeholder='12345'
                                    mask='99999'
                                    slotChar=''
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12'>
                    <Controller
                        name='address'
                        control={control}
                        rules={{ required: 'Address is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='address'>Street address</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='123 Bridge Rd'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12'>
                    <Controller
                        name='email'
                        control={control}
                        rules={{ required: 'Email is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='email'>Email</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='jdoe@mail.com'
                                    type='email'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>
            </div>
        </>
    )
}

/*screens 768px width and up */
function LargeScreenBillingPanel({ control,getFormErrorMessage }) {
    return (
        <>
            <div className='grid show-on-large-screens' style={{ padding: '10px' }}>
                <div className='col-6'>
                    <Controller
                        name='firstname'
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='firstname'>First name</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='John'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-6'>
                    <Controller
                        name='lastname'
                        control={control}
                        rules={{ required: 'Last name is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='lasttname'>Last name</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='Doe'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-4' id='show-on-large-screens'>
                    <Controller
                        name='city'
                        control={control}
                        rules={{ required: 'City is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='city'>City</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='San Francisco'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-4' id='show-on-large-screens'>
                    <Controller
                        name='state'
                        control={control}
                        rules={{ required: 'State is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='state'>State</label>
                                <InputMask id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    keyfilter={/^[a-zA-Z']+$/}
                                    placeholder='CA'
                                    mask='aa'
                                    slotChar=''
                                    style={{ textTransform: 'uppercase' }}
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-4' id='show-on-large-screens'>
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
                                    placeholder='12345'
                                    mask='99999'
                                    slotChar=''
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12'>
                    <Controller
                        name='address'
                        control={control}
                        rules={{ required: 'Address is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='address'>Street address</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='123 Bridge Rd'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>

                <div className='col-12'>
                    <Controller
                        name='email'
                        control={control}
                        rules={{ required: 'Email is required' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor='email'>Email</label>
                                <InputText id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    placeholder='jdoe@mail.com'
                                    type='email'
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>
            </div>
        </>
    )
}