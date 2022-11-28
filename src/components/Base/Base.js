import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from './Home';

const Base = () => {
    return (
        <div>
            <Home></Home>
            <Navbar></Navbar>
        </div>
    );
};

export default Base;