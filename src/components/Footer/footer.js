import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className='col-12 footer'>
                {/* <Divider /> */}
                <footer>
                    <div className='footer-info' > {/*style={{ margin: '0 auto', textAlign: 'center' }} */}
                        <div className='footer-info-section'>
                            <h3>Find us at</h3>
                            <p >
                                1234 Cherry St, Atlanta GA 31215 <br />
                                478-123-4567 <br />
                                talktous@comfycatcafeandbakery.com <br />
                            </p>
                        </div>
                        <div className='footer-info-section'>
                            <h3>Bakery Hours</h3>
                            <p>
                                <strong>Mon - Fri: </strong> 7:00 AM - 6:00 PM <br />
                                <strong>Sat: </strong> 8:00 AM - 7:00 PM <br />
                                <strong>Sun: </strong> 11:00 AM - 7:00 PM
                            </p>
                        </div>
                        <div className='footer-info-section'>
                            <h3>Cat Lounge Hours</h3>
                            <p>
                                <strong>Mon - Sun: </strong> 10:00 AM - 6:30 PM <br />
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;