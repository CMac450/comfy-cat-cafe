import React, { useRef } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useForm, Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';

//TODO: 2/22/23: Uninstall @wojtekmaj/react-timerange-picker


export function MeetMeFormComponent({ selectedCat }) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const timeSlots = [
        // {
        //     name: 'Time Slot TEST EARLY',
        //     start: '7:00:00',
        //     end: '8:00:00',
        //     range: '7:00 AM - 8:00 PM',
        //     availability: 'open'
        // },
        {
            name: 'Time Slot 1',
            start: '11:00:00',
            end: '12:00:00',
            range: '11:00 AM - 12:00 PM',
            availability: 'open'
        },
        {
            name: 'Time Slot 2',
            start: '12:15:00',
            end: '13:15:00',
            range: '12:15 PM - 1:15 PM',
            availability: 'open'
        },
        {
            name: 'Time Slot 3',
            start: '13:30:00',
            end: '14:30:00',
            range: '1:30 PM - 2:30 PM',
            availability: 'open'
        },
        {
            name: 'Time Slot 4',
            start: '14:45:00',
            end: '15:45:00',
            range: '2:45 PM - 3:45 PM',
            availability: 'open'
        },
        {
            name: 'Time Slot 5',
            start: '16:00:00',
            end: '17:00:00',
            range: '4:00 PM - 5:00 PM',
            availability: 'open'
        },
        {
            name: 'Time Slot 6',
            start: '17:15:00',
            end: '18:15:00',
            range: '5:15 PM - 6:15 PM',
            availability: 'open'
        },
        // {
        //     name: 'Time Slot TEST LATE',
        //     start: '22:30:00',
        //     end: '23:45:00',
        //     range: '10:30 PM - 11:45 PM',
        //     availability: 'open'
        // }
    ]

    const toast = useRef(null);
    const defaultValues = { date: null, time: null, firstname: '', lastname: '', email: '' };
    const {
        control,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm({ defaultValues });

    //watch calendar and time range inputs
    const watchCal = watch('date', new Date());

    const showSuccess = (d) => {
        const date = d.date.toLocaleDateString('en-US', options);
        const time = d.time;
        const firstName = d.firstname;
        const email = d.email;

        toast.current.show({
            severity: 'success', summary: 'Session Booked',
            detail: `${firstName}, your session with ${selectedCat} will be booked for ${date} from ${time}.
                A copy of this reminder will be sent to the email: ${email}.`,
                life: 8000
        });

        setTimeout(() => {
            window.location.href = '/resident-cats';
        }, 9000)
    }

    const compareDates = (controllerValue) => {
        //console.log(`controllerValue: ${controllerValue}`);
        const selectedDate = watchCal
        const selectedTimeRange = controllerValue 

        // //// search through timeslot array to find where range property value = user's selected range
        // //// get the value of the associated start property
        // //// split said value on ':' character, leaving an array of three values
        let timeSlotObject = timeSlots.filter(ts => (ts.range === selectedTimeRange)); //////returns empty array on first run (bc no date or time has been picked)

        if (timeSlotObject.length > 0) {

            let timeRangeStart = timeSlotObject[0].start;
            timeRangeStart = timeRangeStart.split(':');

            // //// get individual values in array and save to variables
            let hours = timeRangeStart.at(0);
            let minutes = timeRangeStart.at(1);
            let seconds = timeRangeStart.at(2);

            // //// get current date nd convert to timestamp in milliseconds of said date
            let currentDateTime = new Date(Date.now());
            currentDateTime = new Date(currentDateTime).getTime();

            // //// convert selectedDate var to date type
            // //// set time of selectedDateTime (hrs, mins, secs) using variables in previous step
            // //// convert to timestamp in milliseconds
            let selectedDateTime = new Date(selectedDate);
            selectedDateTime = new Date(selectedDateTime.setHours(hours, minutes, seconds));
            selectedDateTime = new Date(selectedDateTime).getTime();
            const timePassed = currentDateTime > selectedDateTime ? true : false;
   
            return timePassed === false || 'This time range has already passed. Please select another.';

        }
    }



    const onSubmit = (data) => {
        showSuccess(data);

    }

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className='p-fluid book-session-modal'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />

                <div className='grid' style={{ padding: '10px' }}>
                    <div className='col-12'>
                        <Controller
                            name='date'
                            control={control}
                            rules={{ required: 'Date is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name}></label>
                                    <Calendar id={field.name}
                                        value={field.value}
                                        onChange={field.onChange}
                                        dateFormat='mm/dd/yy'
                                        className={classNames({ 'p-invalid mr-1': fieldState.error })}
                                        minDate={new Date()} inline
                                    />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>

                    <div className='col-12'>
                        <Controller
                            name='time'
                            control={control}
                            rules={{
                                required: 'Time slot is required.',
                                validate: (controllerValue) => compareDates(controllerValue)
                            }}
                            render={({ field, fieldState }) => (
                                <>

                                    <label htmlFor={field.name} style={{ marginTop: '5px' }}>Time</label>
                                    <TimeDDL id={field.name}
                                        value={field.value}
                                        optionLabel='timeSlot'
                                        focusInputRef={field.ref}
                                        onChange={(e) => field.onChange(e.value)}
                                        className={classNames({ 'p-invalid': fieldState.error })}
                                        timeSlots={timeSlots}
                                    />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>

                    <div className='col-12'>
                        <Controller
                            name='firstname'
                            control={control}
                            rules={{ required: 'First name is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} style={{ marginTop: '5px' }}>First name</label>
                                    <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })}
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
                            rules={{ required: 'Last name is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} style={{ marginTop: '5px' }}>Last name</label>
                                    <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        keyfilter={/^[a-zA-Z']+$/}
                                        placeholder='Doe'
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
                            rules={{ required: 'Email is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} style={{ marginTop: '5px' }}>Email</label>
                                    <InputText id={field.name}
                                        value={field.value}
                                        className={classNames({ 'p-invalid': fieldState.error })}
                                        onChange={(e) => field.onChange(e.target.value)} field={field} fieldState={fieldState}
                                        type='email'
                                        placeholder='jd@gmail.com'
                                    />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                </div>

                <button label='Submit' type='submit' className='button' style={{ marginTop: '5px' }}>Submit</button>
            </form>
        </div>
    )
}


function TimeDDL({ id, value, focusInputRef, onChange, className, timeSlots }) {
    return (
        <div>
            <Dropdown
                className={className}
                id={id}
                value={value}
                onChange={onChange}
                focusInputRef={focusInputRef}
                options={timeSlots.map(x => x.range)}
                showClear
                placeholder='Select a time slot'
                style={{ zIndex: 102 }}
            >
            </Dropdown>
        </div>
    )
}