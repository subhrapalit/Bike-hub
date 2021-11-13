import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (


        //Banner section

        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/k8Mz0p2/a1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>House of Royal Enfield</h3>
                        <p>Explore your Bike fantasy with us!!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Bgq0m71/a6.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>House of Royal Enfield</h3>
                        <p>Explore your Bike fantasy with us!!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HXc9CVn/a3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>House of Royal Enfield</h3>
                        <p>Explore your Bike fantasy with us!!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;