import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext, MyFaveTopContext } from './Store';

const Tops = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [myFaveTops, setMyFaveTops] = useContext(MyFaveTopContext)
    const [tops, setTops] = useState('')

    useEffect(() => {
        getTops()
        getFaveTops()
    }, [])

    const getTops = () => {
        fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(res => setTops(res))
    }

    const getFaveTops = () => {
        fetch('http://localhost:3000/favorite_tops')
        .then(res => res.json())
        .then(res => setMyFaveTops(res))
    }

    const faveTopsId = () => {
        const list = [...myFaveTops]
        const myList = list.filter(fave => fave.user_id === currentUser)
        return myList.map(fave => fave.top_id)
    }

    const renderTops = () => {
        const list = [...tops]
        const faveTops = faveTopsId()
        return list.map(top => {
            return <ProductList key={top.id} product={top} addFavorite={addFavorite} favorite={faveTops.includes(top.id) ? true: false}/>
        })        
    }

    const renderTop = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='tops' id={id}/>
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(`http://localhost:3000/favorite_tops`, {
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