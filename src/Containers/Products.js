import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Tops from './Tops';
import Bottoms from './Bottoms';
import Shoes from './Shoes';
import Outfits from './Outfits';
import CreateOutfit from '../Components/CreateOutfit';
import OutfitDetails from '../Components/OutfitDetails';

const Products = () => {
    return(
        <div>
            <Tops />
            <Switch>
                <Route path='/bottoms' component={Bottoms} />
                <Route path='/shoes' component={Shoes} />
                <Route path='/outfits/:id' component={OutfitDetails} />
                <Route path='/outfits/new' component={CreateOutfit} />
                <Route path='/outfits' component={Outfits} />
            </Switch>
        </div>
    )
}

export default Products