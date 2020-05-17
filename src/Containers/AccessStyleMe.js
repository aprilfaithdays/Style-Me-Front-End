import React from 'react';
import Navbar from '../Components/Navbar';
import Products from './Products';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';


const AccessStyleMe = () => {
    return(
        <div>
            <Navbar />
            <Products />
            <Route exact path='/' component={HomePage} />
        </div>
    )
}

export default AccessStyleMe