import React from 'react';
import '../pages/home.css';
import { TbGenderFemale } from 'react-icons/tb';

const Home = () => {
    let PaprikaImg = 'images/cats/paprika.jpg'

    return (
        <div className='' >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', margin: '0 auto', justifyContent: 'center' }}>
                    <h1 style={{ fontWeight: '700' }}>Bringing together the best of both worlds: cats and pastries</h1>
                    <p>
                        Paw a freshly baked pastry, swipe your freshly brewed coffee from the counter, and pad over to one of our comfy, fluffy couches to
                        join a feline friend.
                    </p>
                    <button className='home-button' style={{ margin: '10px auto', width: '50%' }}>Book Session</button>
                    <button className='home-button' style={{ margin: '10px auto', width: '50%' }}>View Menu</button>
                </div>
                <img src='cat-and-coffee.jpg'
                    alt='A large furry black cat standing on a table with two coffee cups beside it'
                    className=''
                    loading='lazy'
                    height={600}
                    style={{ objectFit: 'fill' }}
                />
            </div>

            <div className='paw-print-divider col-12' >
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the first in a row.' className='cat-paw-image' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the second in a row.' className='cat-paw-image' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the third in a row.' className='cat-paw-image' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FBFCFC', height: '100dvh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', margin: '0 auto', justifyContent: 'center' }}>
                    <h6 style={{ fontWeight: '700', textAlign: 'left', color: '#92440d', textTransform: 'uppercase' }}>
                        About
                    </h6>
                    <h2 style={{ fontWeight: '700' }}>Who are we?</h2>
                    <p>
                        Comfy Cat Cafe & Bakery is a cat cafe and bakery, the first of its kind in the Metro Atlanta area.
                        Whether you're in the mood for freshly baked croissant, a deliciously fruity smoothie, or a quick shot of caffeine stop by
                        our bakery. Order online to get ahead of the line!
                        <br />
                        <br />
                        Here to cuddle some cute cats? Don't worry we've got you covered. All of the cats that you'll meet in the lounge area are
                        100% adoptable. We partner with local cat rescues to help them free more space to help other cats. All interaction
                        that the cats have here will help them become more used to human interaction.
                        <br />
                        <br />
                        If you'd like to meet a specific cat, book a reservation for a one hour One-on-One session. Pay at the counter when you enter the lounge
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', margin: '0 auto', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <img src='CatPawNumbered1.svg' alt='A gray cat paw icon, with the number 1 inside' className='cat-paw-bullet' loading='lazy' width={75} height={75}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <h4 style={{}}>Grab a snack</h4>
                            <p>
                                Baked goods fresh from the oven, freshly brewed coffee, and all organic fruit smoothies.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginTop: '10px' }}>
                        <img src='CatPawNumbered2.svg' alt='A gray cat paw icon, with the number 2 inside' className='cat-paw-bullet' loading='lazy' width={75} height={75}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <h4 style={{}}>Get comfy</h4>
                            <p>
                                Sit back and relax at our in-house cafe. $10 day pass with Wi-Fi included.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                        <img src='CatPawNumbered3.svg' alt='A gray cat paw icon, with the number 3 inside' className='cat-paw-bullet' loading='lazy' width={75} height={75}></img>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <h4 style={{}}>Pet cats</h4> {/*color: '#92440d' */}
                            <p>
                                Cats that are not currently in 1:1 sessions* can be found in the cafe lounge.
                                <br />
                            </p>
                            <span style={{ fontSize: '10px', color: '#92440d' }}>
                                *One hour long sessions with individual cats that must be booked in advance.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='paw-print-divider col-12' >
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the first in a row.' className='cat-paw-image' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the second in a row.' className='cat-paw-image' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the third in a row.' className='cat-paw-image' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div>

            <div style={{ paddingTop: '20px' }} > {/*backgroundColor: '#FDF4EE',  */}
                <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase' }}>Services</h6>
                <h2 style={{ textAlign: 'center', fontWeight: '700' }}>What do we offer?</h2>
                <div className='service-card-section' >
                    <div className='service-card' style={{ backgroundColor: '#FDF8F3', height: 'auto', padding: '20px 10px' }}>
                        {/* <img src='/images/cats/man-drinking-coffee-with-cat.jpg' alt='A man in a plaid shirt, sitting on a couch and sipping coffee from a muf. A cat is seated next to him.'
                            className='service-card-image' loading='lazy' /> */}
                        <div className="container">
                            <h4 style={{ fontWeight: '700' }}>Cafe Lounge</h4>
                            <p style={{ margin: '20px 0' }}>
                                Sit back and relax at our in-house cafe. $10 day pass with Wi-Fi included.
                            </p>
                            <a href='#visit'><button className='home-button' label='Visit Our Cafe'>Visit Our Cafe</button></a>
                        </div>
                    </div>
                    <div className='service-card' style={{ backgroundColor: '#FDF8F3', height: 'auto', padding: '20px 10px' }}>
                        {/* <img src='/images/cats/pexels-anna-hinckel-8408085.jpg' alt='A young kitten with white fur and black patches, playing with a fuzzy cat toy.'
                            className='service-card-image' loading='lazy' /> */}
                        <div className="container">
                            <h4 style={{ fontWeight: '700' }}>Meet and Greets</h4>
                            <p style={{ margin: '20px 0' }}>One hour long sessions with individual cats that must be booked in advance</p>
                            <a href='./resident-cats'><button className='home-button' label='Meet Our Cats'>Meet Our Cats</button></a>
                        </div>
                    </div>
                    <div className='service-card' style={{ backgroundColor: '#FDF8F3', height: 'auto', padding: '20px 10px' }}>
                        {/* <img src='/images/baked-goods/rolling-pin-g572f06e11_1280.jpg' alt='A round piece of dought covered in flour lays on top of a wooden table. A rolling pan rests on top of it.'
                            className='service-card-image' loading='lazy' /> */}
                        <div className="container">
                            <h4 style={{ fontWeight: '700' }}>Bakery</h4>
                            <p style={{ margin: '20px 0' }}>
                                Baked goods fresh from the oven, freshly brewed coffee, and all organic fruit smoothies.
                            </p>
                            <a href='./menu'><button className='home-button' label='View Our Menu'>View Our Menu</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='paw-print-divider col-12' >
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the first in a row.' className='cat-paw-image' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the second in a row.' className='cat-paw-image' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' alt='A peach colored cat paw, the third in a row.' className='cat-paw-image' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div>

            <div style={{disply: 'flex', flexDirection: 'column', backgroundColor: '#FBFCFC', margin: '0 auto', justifyContent: 'center', padding: '50px 0'}} >
                <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase' }}>Our Story</h6>
                <div className='intro'>
                    <h2 className='heading' id='about-heading' style={{ fontWeight: '700', textAlign: 'center' }}>
                        A purr-fectly delightful experience.
                    </h2>
                    <p style={{ padding: '0px 100px' }}>
                        Inspired by the spirit of Japanese cat cafes, Comfy Cat Cafe & Bakery is a testament to our love for cats and baking. We work with local shelters and cat sanctuaries to help give
                        adoptable cats more exposure to humans and help them find their fur-ever homes.
                        <br />
                        <br />

                        {/* Drawing inspiration from the cozy, cat-filled havens that originated in Japan,  */}
                        We've created a unique space that combines the joy of feline companionship with the
                        comfort of freshly baked treats. Step into a world where purring friends and delectable pastries coexist in perfect harmony, offering a haven of relaxation and indulgence.
                        Immerse yourself in the serene ambiance as you sip on artisanal coffee and savor our delectable range of baked goods, all while being surrounded by the playful antics of our resident cats.
                        <br />
                        <br />

                        Our mission goes beyond providing a charming getaway; it's about fostering a sense of community, connecting cat enthusiasts, and promoting the well-being of our furry friends.
                        Whether you're seeking a quiet escape, a new feline companion, or simply a cozy spot to enjoy a slice of happiness, our cat cafe and bakery is the purr-fect destination
                        to unwind and create unforgettable memories.
                    </p>
                </div>
            </div>


            {/* <div className='paw-print-divider col-12'>
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the first in a row.' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the second in a row.' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the third in a row.' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div> */}


            {/* <div id='visit' className='section-5 col-12' >
                <div className='home-small-section-heading'>Hours and Location</div>
                <div className='location-and-hours'>
                    <div className='' id='address'>
                        <p className='heading'>Address</p>
                        <p>1234 Cherry St, Atlanta GA 31215 </p>
                    </div>
                    <div id='bakery-hours'>
                        <p className='heading'>Bakery Hours</p>
                        <p >
                            <strong>Mon-Fri: </strong> 7:00 AM - 6:00 PM <br /><br />
                            <strong>Sat: </strong> 8:00 AM - 7:00 PM <br /><br />
                            <strong>Sun: </strong> 11:00 AM - 7:00 PM
                        </p>
                        <p></p>
                    </div>
                    <div id='cafe-hours'>
                        <p className='heading'>Cat Lounge Hours</p>
                        <p>
                            <strong>Mon-Sun: </strong> 10:00 AM - 6:30 PM <br />
                        </p>
                    </div>
                </div>
            </div> */}


            <div className='paw-print-divider col-12'>
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the first in a row.' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the second in a row.' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the third in a row.' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div>

            <h6 style={{ fontWeight: '700', textAlign: 'center', color: '#92440d', textTransform: 'uppercase' }}>Spotlight</h6>
            <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: '50px' }}>Cat of the Week</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '700px', marginLeft: 'auto', justifyContent: 'center' }}>
                    <h3 style={{ fontWeight: 700 }}>Paprika<TbGenderFemale style={{ color: '#91170D' }} /></h3>
                    <h5 style={{ color: '#92440d' }}>4 months old</h5>
                    <p>
                        Introducing Paprika, a charming 4-month-old female tabby kitten eagerly seeking her forever home.
                        With her striking orange and black stripes and expressive green eyes, she's an absolute beauty to behold.
                        <br />
                        <br />
                        Paprika is a spirited and curious little feline, always on the lookout for new adventures and exciting toys to pounce on.
                        She loves to chase after paper balls, bat at feathers, and explore every nook and cranny.
                        <br />
                        <br />
                        Her playful nature is balanced by her sweet and affectionate side.
                        When she's done exploring, she'll curl up in your lap, purring contently as you stroke her soft fur.
                        <br />
                        <br />
                        This delightful kitten will fill your home with love, laughter, and endless entertainment.
                        If you're ready to open your heart and home to a playful companion, Paprika is the perfect addition to your family.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 'auto', justifyContent: 'center' }}>
                    <img src={PaprikaImg} className='cat-spotlight-img' alt='A small tabby kitten with hazel eyes, sitting up and staring straight ahead.' loading='lazy' />
                </div>
            </div>


            <div className='paw-print-divider col-12'>
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the first in a row.' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the second in a row.' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the third in a row.' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
            </div>

            <div className='section section-6 col-12'>
                <div className='mission-section'>
                    <div className='mission-statement-text'>
                        <div className='home-small-section-heading'>Mission</div>
                        <h2 className='heading' style={{ fontWeight: '700' }}>
                            Our Mission
                        </h2>
                        <p style={{textAlign: 'left', padding: '0 100px', fontWeight: '400', fontSize: '16px'}}>
                            Welcome to our one-of-a-kind cat cafe and bakery, a haven of warmth and companionship nestled right here in Atlanta. 
                            <br />
                            <br />
                            Inspired by the heartwarming concept of Japanese cat cafes, we've blended the coziness of a bakery with the joy of feline friendships to create an unforgettable experience. 
                            As you relish our freshly baked treats and artisanal beverages, you'll find yourself surrounded by the playful presence of our resident cats, each with a unique tale to tell. 
                            Our mission transcends delightful moments – we're dedicated to facilitating loving forever homes for these lovable felines.
                            <br />
                            <br />
                            At our cat cafe, every sip and bite is an opportunity to make a difference. Through partnerships with local shelters and rescue organizations, we've designed a space where guests 
                            can connect with these charming creatures, creating a bridge between cat enthusiasts and cats in need of homes. Whether you're here for a soothing escape from the everyday or to 
                            embark on a heartwarming journey of companionship, our American cat cafe and bakery is where delectable flavors, warm company, and feline adoration intertwine to create a truly 
                            magical experience.

                            <br />
                            <br />
                            Here at Comfy Cat Cafe & Bakery, we strive to provide a haven for both humans and cats,
                            where visitors can savor freshly baked treats while enjoying the company of our resident kitties.
                            <br />
                            <br />
                            Our mission is to foster a sense of community and promote the well-being of our feline friends through adoption and responsible cat ownership.
                            We are committed to raising awareness about animal welfare and supporting local shelters through our adoption programs.
                            <br />
                            <br />
                            Are you or an organization you know interested leaving a donation? Contact us <a href='/'>@comfycatc&b@mail.com</a> or leave a message
                            at 478-123-4567.
                        </p>
                    </div>
                    <div className='mission-stats' >
                        <div className='mission-stat-row'>
                            <img src='CatPawStat1.svg'
                                alt='A gray colored cat paw. The sentence "115 adoptions since 2022" is written in the middle'
                                className='mission-img' loading='lazy'
                            />
                            <img src='CatPawStat4.svg'
                                alt='A light yellow colored cat paw. The sentence "5,000+ guests welcomed" is written in the middle'
                                className='mission-img' loading='lazy'
                            />
                        </div>
                        <div className='mission-stat-row'>
                            <img src='CatPawStat2.svg'
                                alt='A darker yellow colored cat paw. The sentence "10,437 pastries baked" is written in the middle'
                                className='mission-img' loading='lazy'
                            />
                            <img src='CatPawStat3.svg'
                                alt='A darker gray colored cat paw. The sentence "Over 200 cats petted" is written in the middle'
                                className='mission-img' loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;