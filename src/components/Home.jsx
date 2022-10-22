import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Book Your Favourite Room</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel>


        </div>
    );
};

export default Home;