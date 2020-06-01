import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FavoritesList from '../Components/FavoritesList';

const FavoritesPage = () => {
    return(
        <div>
            <Switch>
                <Route path='/myFavorites' component={FavoritesList} />
            </Switch>
        </div>
    )
}

export default FavoritesPage