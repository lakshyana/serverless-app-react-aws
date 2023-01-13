import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
          <header id="intro">
            <article className= "fullheight">
              <div className= "hgroup">
                <h1>Landon Hotel</h1>
                <h2>West London</h2>
                <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/> </a></p>
              </div>
            </article>

            <nav id="nav">
              <div className= "navbar">
                <div className= "brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                <ul>
                  <li><a className= "icon info" href="#hotelinfo"><span>info</span></a></li>
                  <li><a className= "icon rooms" href="#rooms"><span>rooms</span></a></li>
                  <li><a className= "icon dining" href="#dining"><span>dining</span></a></li>
                  <li><a className= "icon events" href="#events"><span>events</span></a></li>
                  <li><a className= "icon attractions" href="#attractions"><span>attractions</span></a></li>
                </ul>
              </div>
            </nav>
          </header>

          <main id="wrapper">
            <div className="scene" id="welcome">
              <article className= "content">
                <div className= "gallery">
                  <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures"/>
                    <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures"/>
                      <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                        <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures"/>
                          <img className= "hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
              </article>
            </div>

            <div className="scene" id="hotelinfo">
              <article className= "heading">
                <h1>Essential Info</h1>
              </article>
              <article id="usefulinfo">
                <section id="arrivalinfo">
                  <h2>Arrival Information</h2>
                  <ul>
                    <li><strong>Check-in:</strong> 3:00 PM</li>
                    <li><strong>Check-out:</strong> 11:00 AM</li>
                    <li><strong>Parking:</strong> Self-parking in the underground garage is ￡15 per day and valet-parking is ￡50 per day.</li>
                    <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour, and make trips to Heathrow and Gatwick airports.</li>
                    <li><strong>Trains:</strong> The nearest Underground station is at Leicester Square.</li>
                    <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet rooms, and the specified common areas. Service animals are allowed everywhere.</li>
                  </ul>
                </section>
                <section className= "checklist" id="services">
                  <h2>Services and Amenities</h2>
                  <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
                  <ul>
                    <li>Indoor pool</li>
                    <li>24-hour fitness center</li>
                    <li>Massage therapy</li>
                    <li>Full service spa</li>
                    <li>In-room jacuzzi tubs</li>
                    <li>Rooftop café  &amp; smoothie bar</li>
                    <li>Coffee bar  &amp; pastry shop</li>
                    <li>Traditional continental breakfast</li>
                    <li>24-hour concierge service</li>
                    <li>Business center</li>
                    <li>Complimentary wireless service</li>
                    <li>Laundry &amp; dry cleaning service</li>
                    <li>Daily paper</li>
                    <li>Certified "green" hotel</li>
                    <li>Pet-friendly rooms  &amp; common areas</li>
                  </ul>
                </section>
                <section className= "checklist" id="accessibility">
                  <h2>Accessibility</h2>
                  <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
                  <ul>
                    <li>Grab bars on tub walls</li>
                    <li>Shower chairs</li>
                    <li>Hand held shower sprayers</li>
                    <li>Higher toilets &amp; toilet modifiers</li>
                    <li>Lower sink faucet handles</li>
                    <li>Wheelchair clearance under sinks &amp; vanity</li>
                    <li>Lower racks in closet</li>
                    <li>TDD machines</li>
                    <li>Telephone light signalers  &amp; smoke alarms</li>
                    <li>Telephone amplification handsets</li>
                    <li>Closed captioned television converters</li>
                    <li>Vibrating alarm clocks</li>
                    <li>Telephones with volume control</li>
                  </ul>
                </section>
              </article>
              <article id="greenprogram">
                <h2>Landon Green Program</h2>
                <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
              </article>
            </div>

            <footer className= "scene">
              <article className= "content">
                <div id="socialmedia">
                  <ul className= "group">
                    <li><a href="https://twitter.com"><img className= "icon" src="https://landonhotel.com/images/socialmedia/twitter.png" alt="icon for twitter"/></a></li>
                    <li><a href="http://www.facebook.com"><img className= "icon" src="https://landonhotel.com/images/socialmedia/facebook.png" alt="icon for facebook"/></a></li>
                    <li><a href="http://www.youtube.com"><img className= "icon" src="https://landonhotel.com/images/socialmedia/youtube.png" alt="icon for youtube"/></a></li>
                  </ul>
                </div>
              </article>
            </footer>
          </main>

      </>
  );

}

export default App;




