import React from 'react';
import room from './room.jpg';

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${room})`, height: '100vh', backgroundSize: 'cover', marginTop: '-7px', opacity: '8',
                backgroundRepeat: 'no-repeat'
            }} height='100vh' width='100%'>hi
                <div className='text-5xl text-white text-center img-fluid align-middle ' style={{ marginTop: '30%' }}>
                    <h3 style={{ fontSize: '55px', fontWeight: 'bold' }}>Book Your Favourite Room</h3>
                    <p style={{ fontSize: '25px' }}>Choose Your Comfortable Room.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;