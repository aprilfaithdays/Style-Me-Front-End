import React, {useContext, useState} from 'react'
import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext } from '../Containers/Store';
import FavoriteCard from '../Components/FavoriteCard';

const FavoritesList = props => {
    const url = props.match.url
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops, setFaveTops] = useContext(FaveTopsContext)
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext)
    
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

    const [myTops] = useState(filterMyFaveTops())
    const [myBottoms] = useState(filterMyFaveBottoms())
    const [myShoes] = useState(filterMyFaveShoes())
    
    const removeFavorite = (category, id) => {
        let removeFave
        if (category === 'tops'){
            removeFave = faveTops.find(fave => fave.user_id === currentUser && fave.top_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveTops, removeFave.id)
            setFaveTops(updated)

        } else if (category === 'bottoms'){
            removeFave = faveBottoms.find(fave => fave.user_id === currentUser && fave.bottom_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveBottoms, removeFave.id)
            setFaveBottoms(updated)

        } else if (category === 'shoes'){
            removeFave = faveShoes.find(fave => fave.user_id === currentUser && fave.shoe_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveShoes, removeFave.id)
            setFaveShoes(updated)
        }
    }

    const deleteFave = (category, id) => {
        const url = `http://localhost:3000/favorite_${category}/${id}`
        fetch(url, {
            method: 'DELETE'
        })
    }

    const updateList = (list, id) => {
        const faveList = [...list]
        return faveList.filter(fave => fave.id !== id)
    }
        
    const renderMyFavorites = list => {
        if (list.length > 0){
            return list.map(product => {
                return <FavoriteCard 
                    key={product.id} 
                    product={product} 
                    create={url === '/outfits/new'}
                    removeFavorite={removeFavorite}
                    />
            })
        }
    }


    const myFavorites = () => {
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
                            <div className="product-list">{renderMyFavorites(myTops)}</div>
                        </div>
                        <div id="bottoms" className="tab-pane fade">
                            <div className="product-list">{renderMyFavorites(myBottoms)}</div>
                        </div>
                        <div id="shoes" className="tab-pane fade">
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