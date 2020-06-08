import React, { useContext } from 'react';
import ProductList from '../Components/ProductList';
import { FaveTopsContext, TopsContext } from '../Context/Store';
import { CurrentUserContext } from '../Context/CurrentUser';


const Tops = () => {
    const faveTospUrl = 'http://localhost:3000/favorite_tops'
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops, setFaveTops] = useContext(FaveTopsContext)
    const [tops] = useContext(TopsContext)

    const filterMyFaveTops = () => {
        const list = [...faveTops]
        return list.filter(fave => fave.user_id === currentUser.id)
    }

    const faveTopsId = () => {
        const myList = filterMyFaveTops()
        return myList.map(fave => fave.top_id)
    }

    const addFavorite = e => {
        const id = parseInt(e.target.value, 0)
        fetch(faveTospUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: currentUser.id,
                top_id: id
            })
        })
        .then(res => res.json())
        .then(res => setFaveTops([...faveTops, res]))
    }

    const removeFavorite = e =>{
        const id = parseInt(e.target.value, 0)
        const myList = filterMyFaveTops()
        const fave = myList.find(fave => (fave.user_id === currentUser.id && fave.top_id === id))

        fetch(`${faveTospUrl}/${fave.id}`, {
            method: 'DELETE'
        })
        removedFave(fave.id)
    }

    const removedFave = id => {
        const faveTopsList = [...faveTops]
        const updated = faveTopsList.filter(fave => fave.id !== id )
        setFaveTops(updated)
    }

    const renderTops = () => {
        const list = [...tops]
        const faveTopsIdList = faveTopsId()
        return list.map(top => {
            return <ProductList 
                key={top.id} 
                product={top} 
                favorite={faveTopsIdList.includes(top.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        })
    }

    return(
        <div className="container">
            <h3 className="title">Tops</h3>
            <div className="product-list">
                {renderTops()}
            </div>
        </div>
    )
}

export default Tops