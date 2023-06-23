import React, { useState } from 'react';
import { Card } from 'primereact/card';
import Col from 'react-bootstrap/Col';
import { Image } from 'primereact/image';
import 'primeflex/primeflex.css';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Divider } from 'primereact/divider';

export const ItemComponent = ({ item, getSelectedItemInfo }) => {

    const [counterValue, setCounterValue] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedMilk, setSelectedMilk] = useState('');
    const [selectedTemp, setSelectedTemp] = useState('');

    return (
        <div className='h-100 p-fluid'>
            <Col className='h-100'>
                <Card className='card-component coffee-cards menu-card h-100'
                    header={(<Image src={item.imgURL} style={{ borderRadius: '10px' }} loading={'lazy'} imageStyle={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />)}
                    title={item.name}
                    subTitle={(<strong>Starting at ${(item.price.Small)}</strong>)}
                    footer={(
                        <div style={{ textAlign: 'center' }}>
                            <Divider />
                            <button label='Add to Cart'
                                className='button w-full'
                                size='sm'
                                onClick={(e) => {
                                    getSelectedItemInfo(item.id, item.name, item.price, counterValue, selectedSize, selectedMilk, selectedTemp, item.imgURL)
                                }}
                            >Add to Cart</button>
                        </div>
                    )}
                >
                    <div className='item-description'>{item.description}</div>

                    <div className='size-ddl '>
                        <SizeDDL setSelectedSize={setSelectedSize}
                            selectedSize={selectedSize}
                            item={item}
                            key={item.id}
                        />
                    </div>

                    <div className='milk-ddl'>
                        <MilkOptionDDL setSelectedMilk={setSelectedMilk}
                            selectedMilk={selectedMilk}
                            item={item}
                        />
                    </div>

                    <div className='temp-ddl'>
                        <TemperatureDDL  setSelectedTemp={setSelectedTemp}
                            selectedTemp={selectedTemp}
                            item={item}
                        />
                    </div>

                    <div className='counter p-fluid' style={{ textAlign: 'center', width: '8rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Counter counterValue={counterValue} setCounterValue={setCounterValue} />
                    </div>
                </Card>
            </Col>
        </div>
    )
}

function Counter({ counterValue, setCounterValue }) {
    return (
        <div>
            <InputNumber value={counterValue} onValueChange={(e) => setCounterValue(e.value)} min={0} max={12} mode='decimal' showButtons />
        </div>
    )
}

function SizeDDL({ setSelectedSize, selectedSize, item }) {
    return (
        <div>
            <Dropdown
                key={item.id}
                value={selectedSize}
                onChange={(e) => { setSelectedSize(e.value) }}
                options={item.size}
                placeholder='Select a size'
                showClear
                className="w-full md:w-14rem"
            >
            </Dropdown>
        </div>
    )
}

function TemperatureDDL({ setSelectedTemp, selectedTemp, item }) {
    return (
        <div>
            <Dropdown
                key={item.id}
                value={selectedTemp}
                onChange={(e) => { setSelectedTemp(e.value) }}
                options={item.temperature}
                placeholder='Select a temperature'
                showClear
                className="w-full md:w-14rem"
            >
            </Dropdown>
        </div>
    )
}

function MilkOptionDDL({ setSelectedMilk, selectedMilk, item }) {
    return (
        <div>
            <Dropdown
                key={item.id}
                value={selectedMilk}
                onChange={(e) => { setSelectedMilk(e.value) }}
                options={item.milk}
                placeholder='Select your preferred milk'
                showClear
                className="w-full md:w-14rem"
            >
            </Dropdown>
        </div>
    )
}