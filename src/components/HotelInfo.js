import React from "react";

import accessibilityData from './data/accessibilities.json'
import servicesData from './data/services.json'

const Welcome = () => {
    return (
        <>
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
                            {
                                servicesData.map((service) =>
                                    <li>{service.name}</li>
                                )
                            }
                        </ul>
                    </section>
                    <section className= "checklist" id="accessibility">
                        <h2>Accessibility</h2>
                        <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
                        <ul>
                            {
                                accessibilityData.map((accessibility) =>
                                    <li>{accessibility.name}</li>
                                )
                            }
                        </ul>
                    </section>
                </article>
                <article id="greenprogram">
                    <h2>Landon Green Program</h2>
                    <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
                </article>
            </div>
        </>
    );
}

export default Welcome;
