import { Card } from 'primereact/card';
import Col from 'react-bootstrap/Col';
import { Image } from 'primereact/image';
import 'primeflex/primeflex.css';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';
import { Divider } from 'primereact/divider';

export const ItemComponent = ({ item, getSelectedItemInfo }) => {

    const [counterValue, setCounterValue] = useState(0);
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    return (
        <div className='h-100 p-fluid'>
            <Col className='h-100'>
                <Card className='card-component smoothie-cards menu-card h-100'
                    header={(<Image src={item.imgURL} style={{ borderRadius: '10px' }} loading={'lazy'} imageStyle={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />)}
                    title={item.name}
                    subTitle={(<strong>Starting at ${(item.price.small)}</strong>)}
                    footer={(
                        <div style={{ textAlign: 'center' }}>
                            <Divider />
                            <button label='Add to Cart'
                                className='button w-full'
                                size='sm'
                                onClick={() => {
                                    getSelectedItemInfo(item.id, item.name, item.price, counterValue, selectedSize, selectedFlavor, item.imgURL)
                                }}
                            >Add to Cart</button>
                        </div>
                    )}
                >
                    <div className='item-description'>{item.description}</div>

                    <div className='flavor-ddl' style={{ textAlign: 'center' }}>
                        <FlavorDDL key={item.id} setSelectedFlavor={setSelectedFlavor} selectedFlavor={selectedFlavor} item={item} />
                    </div>

                    <div className='size-ddl' style={{ textAlign: 'center' }}>
                        <SizeDDL key={item.id} setSelectedSize={setSelectedSize} selectedSize={selectedSize} item={item} />
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

function FlavorDDL({ setSelectedFlavor, selectedFlavor, item }) {
    return (
        <div>
            <Dropdown
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.value)}
                options={item.flavor}
                placeholder='Select a flavor'
                showClear
                className="w-full md:w-14rem"
            >
            </Dropdown>
        </div>
    )
}

function SizeDDL({ setSelectedSize, selectedSize, item }) {
    return (
        <div>
            <Dropdown
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.value)}
                options={item.size}
                placeholder='Select a size'
                showClear
                className="w-full md:w-14rem"
            >
            </Dropdown>
        </div>
    )
}