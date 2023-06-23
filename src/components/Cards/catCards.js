import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb} from '../../firebase_setup/firebase.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MeetMeFormComponent } from '../Forms/bookSession.js';
import { Dialog } from 'primereact/dialog';
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb';
import '../Cards/catCards.css';
import 'bootstrap/dist/css/bootstrap.css';



export function CatCardGroupComponent() {
    const [cats, setCats] = useState([]);  
    const catsCollectionRef = collection(firestoreDb, 'cats');  

    useEffect(() => {

        const getCats = async () => {
            const data = await getDocs(catsCollectionRef);

            setCats(data.docs.map((doc) => 
                ({ ...doc.data(), id: doc.id}),
            ));  
        };

        getCats();
    }, [catsCollectionRef])

    const [selectedCat, setSelectedCat] = useState('');
    const getCatName = (name) => setSelectedCat(name);
   
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);


    return (
        <div className='row cat-cards'>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {cats.map((cat) => {
                    return (  
                        <div key={cat.name}>
                            <Col className='h-100'>
                                <Card className='card-component cat-cards h-100' key={cat.id}
                                    header= {(<Image src={cat.image} width="250" loading={'lazy'} imageStyle={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}} />)}
                                    style= {{ borderRadius: '10px', opacity: cat.adoptable === false ? 0.7 :  1 }}
                                    subTitle={
                                        cat.age.years !== 0 ? (cat.age.years + ' years old') 
                                        : (cat.age.months + ' months old')
                                    }
                                    title={
                                        cat.gender === 'female' ? (
                                            <>
                                                <div>{cat.name} <TbGenderFemale /></div>
                                            </>
                                        ) : (
                                            <>
                                                <div>{cat.name} <TbGenderMale /></div>
                                            </>
                                        )
                                    }
                                    footer={
                                        cat.adoptable ?  (
                                            <button className='button' type='button'
                                                onClick={() => {handleModalShow(); getCatName(cat.name);}}
                                            >
                                                Meet Me
                                            </button>
                                        ) : (
                                            <h5 style={{textDecoration: 'underline #f8a66b solid 3px'}}>I've been adopted!</h5>
                                        )
                                    }
                                >          
                                    {cat.description}
                                </Card>
                            </Col>
                        </div>
                    )
                })}        
            </Row>
            <Dialog
                draggable={false}
                header={`Book a one-on-one session with ${selectedCat}`}
                visible={showModal}
                onHide={handleModalClose}
                style={{ width: '50vw', height: '80vh' }} 
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                blockScroll={true}
            >
                <MeetMeFormComponent selectedCat={selectedCat} />  
            </Dialog>
        </div>
        
    )
}