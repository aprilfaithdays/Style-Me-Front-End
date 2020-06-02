import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext, FaveTopsContext } from './Store';

const Tops = () => {
    const faveTospUrl = 'http://localhost:3000/favorite_tops'
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops, setFaveTops] = useContext(FaveTopsContext)
    const [tops, setTops] = useState([])

    useEffect(() => {
        getTops()
        getFaveTops()
        // eslint-disable-next-line 
    }, [])

    const getTops = () => {
        fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(res => setTops(res))
    }

    const getFaveTops = () => {
        fetch(faveTospUrl)
        .then(res => res.json())
        .then(res => setFaveTops(res))
    }

    const filterMyFaveTops = () => {
        const list = [...faveTops]
        return list.filter(fave => fave.user_id === currentUser)
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
                user_id: currentUser,
                top_id: id
            })
        })
        .then(res => res.json())
        .then(res => setFaveTops([...faveTops, res]))
    }

    const removeFavorite = e =>{
        const id = parseInt(e.target.value, 0)
        const myList = filterMyFaveTops()
        const fave = myList.find(fave => (fave.user_id === currentUser && fave.top_id === id))

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

    const renderTop = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='tops' id={id}/>
    }

    const renderTops = () => {
        const list = [...tops]
        const faveTopsIdList = faveTopsId()
        const topList = list.map(top => {
            return <ProductList 
                key={top.id} 
                product={top} 
                favorite={faveTopsIdList.includes(top.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        })
        return (
            <div>
                <h3 className="title">Tops</h3>
                <div className="product-list">
                    {topList}
                </div>
            </div>
        )
    }

    return(
        <div>
            <Switch>
                <Route path='/tops/:id' component={renderTop} />
                <Route path='/tops' component={renderTops} />
            </Switch>
        </div>
    )
}

export default Tops