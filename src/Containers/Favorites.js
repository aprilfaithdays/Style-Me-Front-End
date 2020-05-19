import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext, OutfitsContext } from './Store';
import FavoriteCard from '../Components/FavoriteCard';
import OutfitCard from '../Components/OutfitCard';

const Favorites = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits] = useContext(OutfitsContext)
    const [faveTops] = useContext(FaveTopsContext)
    const [faveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes] = useContext(FaveShoesContext)

    const myList = list => {
        return list.filter(object => object.user_id === currentUser)
    }

    const filterMyOutfits = () => {
        const outfitList = [...outfits]
        const myOutfits = myList(outfitList)
        return myOutfits.map(outfit => {
            return <OutfitCard key={outfit.id} outfit={outfit} />
        })
    }

    const filterMyFaveTops = () => {
        const topList = [...faveTops]
        const myTopList = myList(topList)
        return myTopList.map(fave => fave.top)
    }

    const filterMyFaveBottoms = () => {
        const bottomList = [...faveBottoms]
        const myBottomList = myList(bottomList)
        return myBottomList.map(fave => fave.bottom)
    }

    const filterMyFaveShoes = () => {
        const shoeList = [...faveShoes]
        const myShoeList = myList(shoeList)
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
                <div className='container'>
                    <ul className="nav nav-tabs">
                        <li className="active" ><a data-toggle="tab" href="#myOutfits">MyOutfits</a></li>
                        <li><a data-toggle="tab" href="#tops">Tops</a></li>
                        <li><a data-toggle="tab" href="#bottoms">Bottoms</a></li>
                        <li><a data-toggle="tab" href="#shoes">Shoes</a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="myOutfits" className="tab-pane fade in active">
                            <h3>My Outfits</h3>
                            {filterMyOutfits()}
                        </div>
                        <div id="tops" className="tab-pane fade">
                            <h3>Tops</h3>
                            {renderMyFavorites(myTops)}
                        </div>
                        <div id="bottoms" className="tab-pane fade">
                            <h3>Bottoms</h3>
                            {renderMyFavorites(myBottoms)}
                        </div>
                        <div id="shoes" className="tab-pane fade">
                            <h3>Shoes</h3>
                            {renderMyFavorites(myShoes)}
                        </div>
                    </div>
                </div>
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