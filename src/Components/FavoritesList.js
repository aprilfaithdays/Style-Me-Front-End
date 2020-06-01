import React, {useContext} from 'react'
import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext } from '../Containers/Store';
import FavoriteCard from '../Components/FavoriteCard';

const FavoritesList = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops] = useContext(FaveTopsContext)
    const [faveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes] = useContext(FaveShoesContext)

    const myList = list => {
        return list.filter(object => object.user_id === currentUser)
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
                        <li className="active"><a data-toggle="tab" href="#tops">Tops</a></li>
                        <li><a data-toggle="tab" href="#bottoms">Bottoms</a></li>
                        <li><a data-toggle="tab" href="#shoes">Shoes</a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="tops" className="tab-pane fade in active">
                            <h3>Tops</h3>
                            <div className="product-list">{renderMyFavorites(myTops)}</div>
                        </div>
                        <div id="bottoms" className="tab-pane fade">
                            <h3>Bottoms</h3>
                            <div className="product-list">{renderMyFavorites(myBottoms)}</div>
                        </div>
                        <div id="shoes" className="tab-pane fade">
                            <h3>Shoes</h3>
                            <div className="product-list">{renderMyFavorites(myShoes)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return myFavorites()
}

export default FavoritesList