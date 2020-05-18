import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext } from './Store';
import FavoriteCard from '../Components/FavoriteCard';

const Favorites = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops] = useContext(FaveTopsContext)
    const [faveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes] = useContext(FaveShoesContext)

    const filterMyFaveTops = () => {
        const topList = [...faveTops]
        const myTopList = topList.filter(fave => fave.user_id === currentUser)
        return myTopList.map(fave => fave.top)
    }

    const filterMyFaveBottoms = () => {
        const bottomList = [...faveBottoms]
        const myBottomList = bottomList.filter(fave => fave.user_id === currentUser)
        return myBottomList.map(fave => fave.bottom)
    }

    const filterMyFaveShoes = () => {
        const shoeList = [...faveShoes]
        const myShoeList = shoeList.filter(fave => fave.user_id === currentUser)
        return myShoeList.map(fave => fave.shoe)
    }

    const renderMyFavorites = list => {
        if (list.length > 0){
            return list.map(product => {
                return <FavoriteCard key={product.id} product={product} />
            })
        }
    }

    const myFavorites = () => {
        const myTops = filterMyFaveTops()
        const myBottoms = filterMyFaveBottoms()
        const myShoes = filterMyFaveShoes()

        return(
            <div>
                {renderMyFavorites(myTops)}
                {renderMyFavorites(myBottoms)}
                {renderMyFavorites(myShoes)}
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

export default Favorites