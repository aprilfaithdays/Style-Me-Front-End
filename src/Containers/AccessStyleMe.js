import React from 'react';
import Navbar from '../Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Tops from './Tops';
import Top from './Top';
import Bottoms from './Bottoms';
import Bottom from './Bottom';
import Shoes from './Shoes';
import Shoe from './Shoe';


const AccessStyleMe = props => {
    return(
        <div>
            <Navbar {...props}/>
            <div className="style-me">
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/tops' component={Tops} />
                    <Route exact path='/bottoms' component={Bottoms} />
                    <Route exact path='/shoes' component={Shoes} />
                    <Route path='/tops/:id' component={Top} />
                    <Route path='/bottoms/:id' component={Bottom} />
                    <Route path='/shoes/:id' component={Shoe} />
                </Switch>
            </div>
        </div>
    )
}

export default AccessStyleMe