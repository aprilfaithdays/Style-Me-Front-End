import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext, MyFaveShoesContext } from './Store';

const Shoes = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [myFaveShoes, setMyFaveShoes] = useContext(MyFaveShoesContext)
    const [shoes, setShoes] = useState('')

    useEffect(() => {
        getShoes()
        getFaveShoes()
        // eslint-disable-next-line 
    }, [])

    const getShoes = () => {
        fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(res => setShoes(res))
    }

    const getFaveShoes = () => {
        fetch('http://localhost:3000/favorite_shoes')
        .then(res => res.json())
        .then(res => setMyFaveShoes(res))
    }

    const faveShoesId = () => {
        const list = [...myFaveShoes]
        const myList = list.filter(fave => fave.user_id === currentUser)
        return myList.map(fave => fave.shoe_id)
    }

    const renderShoes = () => {
        const list = [...shoes]
        const faveShoes = faveShoesId()
        return list.map(shoe => {
            return <ProductList key={shoe.id} product={shoe} addFavorite={addFavorite} favorite={faveShoes.includes(shoe.id) ? true: false}/>
        })        
    }

    const renderShoe = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='shoes' id={id}/>
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(`http://localhost:3000/favorite_shoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: currentUser,
                shoe_id: id
            })
        })
        .then(res => res.json())
        .then(res => setMyFaveShoes([...myFaveShoes, res]))
    }

    return(
        <div>
            <Switch>
                <Route path='/shoes/:id' component={renderShoe} />
                <Route path='/shoes' component={renderShoes} />
            </Switch>
        </div>
    )
}

export default Shoes