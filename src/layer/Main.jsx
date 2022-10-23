import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header className='position-static'></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;