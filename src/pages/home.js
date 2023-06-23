import React from 'react';
import '../pages/home.css';
import { TbGenderFemale } from 'react-icons/tb';

const Home = () => {
    let PaprikaImg = 'images/cats/paprika.jpg'

    return (
        <div className='home col-12' >
            <div className='grid'>
                <div className='section section-1' id='section-1'>
                    <img src='cat-and-coffee.jpg'
                        alt='A large furry black cat standing on a table with two coffee cups beside it'
                        className='cover-image'
                        loading='lazy'
                    />
                    <div className='logo-image-overlay'>
                        <img src='logoWithText.svg'
                            alt='A cat, curled up and sleeping in a mug with the words Comft Cat Cat Cafe & Bakery'
                            className='logo-image'
                            loading='lazy'
                        />
                    </div>
                </div>

                <div className='section-2' >
                    <div className='cat-paw-steps'>
                        <div className='cat-paw-row'>
                            <img src='CatPawNumbered1.svg' alt='A gray cat paw icon, with the number 1 inside' className='cat-paw-bullet' loading='lazy' width={100} height={100}></img>
                            <h1>Grab a snack</h1>
                        </div>

                        <div className='cat-paw-row'>
                            <img src='CatPawNumbered2.svg' alt='A gray cat paw icon, with the number 2 inside' className='cat-paw-bullet' loading='lazy' width={100} height={100}></img>
                            <h1 style={{ marginTop: 'auto', marginBottom: 'auto' }}>Find your seat</h1>
                        </div>

                        <div className='cat-paw-row'>
                            <img src='CatPawNumbered3.svg' alt='A gray cat paw icon, with the number 3 inside' className='cat-paw-bullet' loading='lazy' width={100} height={100}></img>
                            <h1 style={{ marginTop: 'auto', marginBottom: 'auto' }}>Get comfy</h1>
                        </div>

                        <div className='cat-paw-row'>
                            <img src='CatPawNumbered4.svg' alt='A gray cat paw icon, with the number 4 inside' className='cat-paw-bullet' loading='lazy' width={100} height={100}></img>
                            <h1 style={{ marginTop: 'auto', marginBottom: 'auto' }}>Pet cats</h1>
                        </div>
                    </div>
                </div>

                <div className='section section-3 col-12' >
                    <div className='home-small-section-heading'>Services</div>
                    <p className='heading'>
                        Good food, good people, and good cats
                    </p>
                    <div className='service-card-section' >
                        <div className='service-card'>
                            <img src='/images/cats/man-drinking-coffee-with-cat.jpg' alt='A man in a plaid shirt, sitting on a couch and sipping coffee from a muf. A cat is seated next to him.'
                                className='service-card-image' loading='lazy' />
                            <div className="container">
                                <p className='heading-2'>Cafe Lounge</p>
                                <p className='service-card-body-text'>
                                    Sit back and relax at our in-house cafe. $10 day pass with Wi-Fi included.
                                </p>
                                <a href='#visit'><button className='home-button' label='Visit Our Cafe'>Visit Our Cafe</button></a>
                            </div>
                        </div>
                        <div className='service-card'>
                            <img src='/images/cats/pexels-anna-hinckel-8408085.jpg' alt='A young kitten with white fur and black patches, playing with a fuzzy cat toy.'
                                className='service-card-image' loading='lazy' />
                            <div className="container">
                                <p className='heading-2'>Meet and Greets</p>
                                <p className='service-card-body-text'>One hour long sessions with individual cats that must be booked in advance</p>
                                <a href='./resident-cats'><button className='home-button' label='Meet Our Cats'>Meet Our Cats</button></a>
                            </div>
                        </div>
                        <div className='service-card'>
                            <img src='/images/baked-goods/rolling-pin-g572f06e11_1280.jpg' alt='A round piece of dought covered in flour lays on top of a wooden table. A rolling pan rests on top of it.'
                                className='service-card-image' loading='lazy' />
                            <div className="container">
                                <p className='heading-2'>Bakery</p>
                                <p className='service-card-body-text'>
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


                <div className='col-12 section section-4' >
                    <div className='home-small-section-heading'>About Us</div>
                    <div className='intro'>
                        <p className='heading' id='about-heading'>
                            Bringing together the best of both worlds: cats and baked goods, for a purr-fectly delightful experience.
                        </p>
                        <p className='intro-body'>
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
                            If you'd like to meet a specific cat, book a reservation for a one hour One-on-One session. Pay at the counter when you enter the lounge.
                        </p>
                    </div>
                </div>


                <div className='paw-print-divider col-12'>
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the first in a row.' loading='lazy' width={100} height={100} />
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the second in a row.' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the third in a row.' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
                </div>


                <div id='visit' className='section-5 col-12' >
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
                </div>


                <div className='paw-print-divider col-12'>
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the first in a row.' loading='lazy' width={100} height={100} />
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the second in a row.' id='hide-on-extra-small-screens' loading='lazy' width={100} height={100} />
                    <img src='CatPaw1.svg' className='cat-paw-image' alt='A peach colored cat paw, the third in a row.' id='hide-on-small-screens' loading='lazy' width={100} height={100} />
                </div>


                <div className='col-12 section'>
                    <div className='home-small-section-heading'>Cat of the Week Spotlight</div>
                    <div className='cat-spotlight-section'>
                        <p className='heading'>Paprika<TbGenderFemale /></p>
                        <p className='heading-2'>4 months old</p>
                        <div className='cat-spotlight-img-section'>
                            <img src={PaprikaImg} className='cat-spotlight-img' alt='A small tabby kitten with hazel eyes, sitting up and staring straight ahead.' loading='lazy' />
                        </div>
                        <div className='cat-spotlight-text-section' >
                            <p className='intro-body'>
                                Introducing Paprika, a charming 4-month-old female tabby kitten eagerly seeking her forever home.
                                With her striking orange and black stripes and expressive green eyes, she's an absolute beauty to behold.
                                <br />
                                <br />
                                Paprika is a spirited and curious little feline, always on the lookout for new adventures and exciting toys to pounce on.
                                She loves to chase after balls, bat at feathers, and explore every nook and cranny.
                                <br />
                                <br />
                                Paprika's playful nature is balanced by her sweet and affectionate side.
                                When she's done exploring, she'll curl up in your lap, purring contently as you stroke her soft fur.
                                <br />
                                <br />
                                This delightful kitten will fill your home with love, laughter, and endless entertainment.
                                If you're ready to open your heart and home to a playful companion, Paprika is the perfect addition to your family.
                            </p>
                        </div>
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
                            <p className='heading'>
                                Comfy Cat Cafe & Bakery Mission
                            </p>
                            <p className='intro-body'>
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
        </div>
    )
}

export default Home;