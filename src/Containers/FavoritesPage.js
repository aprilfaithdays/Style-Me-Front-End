import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FavoritesList from '../Components/FavoritesList';

const FavoritesPage = () => {

    const myFavorites = props => {
        return (
            <div>
                <h3>My Favorites</h3>
                <FavoritesList {...props} />
            </div>
        )
    }

    return(
        <div>
            <Switch>
                <Route path='/myFavorites' component={myFavorites} />
            </Switch>
        </div>
    )
}

export default FavoritesPage