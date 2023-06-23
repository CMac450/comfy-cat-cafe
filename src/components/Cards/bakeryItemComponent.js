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
    const [selectedFlavor, setSelectedFlavor] = useState('');

    return (
        <div className='h-100 p-fluid'>
            <Col className='h-100'>
                <Card className='card-component bakery-cards menu-card h-100'
                    header={(<Image src={item.imgURL} style={{ borderRadius: '10px' }} loading='lazy' imageStyle={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />)}
                    title={item.name}
                    subTitle={(<strong>${(item.price).toFixed(2)}</strong>)}
                    footer={(
                        <div style={{ textAlign: 'center' }}>
                            <Divider />
                            <div>
                                <button label='Add to Cart'
                                    className='button menu-button w-full'
                                    size='sm'
                                    onClick={() => {
                                        getSelectedItemInfo(item.id, item.name, item.price, item.multipleFlavors, counterValue, selectedFlavor, item.imgURL);
                                    }}
                                    
                                >Add to Cart</button>
                            </div>
                        </div>
                    )}
                >
                    <div className='item-description'>{item.description}</div>

                    <div className='flavor-ddl'>
                        {(
                            <div style={{ textAlign: 'center' }}>
                                {item.multipleFlavors ? (
                                    <div>
                                        <FlavorDDL key={item.id} setSelectedFlavor={setSelectedFlavor} selectedFlavor={selectedFlavor}
                                            item={item} />
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        )}
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
        <div >
            <InputNumber value={counterValue} onValueChange={(e) => setCounterValue(e.value)} min={0} max={12} mode='decimal' showButtons />
        </div>
    )
}

function FlavorDDL({ setSelectedFlavor, selectedFlavor, item }) {
    return (
        <div>
            <Dropdown
                key={`${item.id}`}
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.value)}
                options={item.flavor}
                showClear
                placeholder='Select a flavor'
            >
            </Dropdown>
        </div>
    )
}