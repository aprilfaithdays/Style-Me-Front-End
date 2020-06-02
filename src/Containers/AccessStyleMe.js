import React from 'react';
import Navbar from '../Components/Navbar';
import Products from './Products';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';


const AccessStyleMe = () => {
    return(
        <div>
            <Navbar />
            <div className="style-me">
                <Products />
                <Route exact path='/' component={HomePage} />
            </div>
        </div>
    )
}

export default AccessStyleMe