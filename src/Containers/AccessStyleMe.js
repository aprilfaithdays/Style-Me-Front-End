import React from 'react';
import Navbar from '../Components/Navbar';
import Products from './Products';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';


const AccessStyleMe = props => {
    return(
        <div>
            <Navbar {...props}/>
            <div className="style-me">
                <Products />
                <Route exact path='/home' component={HomePage} />
            </div>
        </div>
    )
}

export default AccessStyleMe