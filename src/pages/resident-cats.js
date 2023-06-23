import React from 'react';
import { CatCardGroupComponent } from '../components/Cards/catCards.js'

export class Cats extends React.Component {
  render() {
    return (
      <div id='resident-cats'>
        <div>
          <div className='small-section-heading' style={{marginTop: '25px', textDecoration: 'underline'}}>
            Lounge
          </div>
          <p style={{padding: '50px 50px', fontSize: '18px'}}>
            In our lounge, our goal is to cultivate a stress-free and warm ambiance where patrons can unwind, 
            connect with adorable cats, and savor scrumptious treats that are lovingly made in our on-site bakery.

            <br/ >
            <br/ >

            Open from 10AM to 6:30PM everyday. Admission into the lounge is $10 and all proceeds go directly to the upkeep of the cats and needed veterinary treatment.
            Feel free to bring your laptop if you'd like to work remotely, however we can't promise that your meeting won't be photobombed
            by cats. 
          </p>
        </div>
        <div className='body resident-cats'>
          <CatCardGroupComponent />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Cats;