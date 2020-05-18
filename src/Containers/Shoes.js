import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext } from './Store';

const Shoes = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [shoes, setShoes] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(res => setShoes(res))
    }, [])

    const renderShoes = () => {
        const list = [...shoes]
        return list.map(shoe => {
            return <ProductList key={shoe.id} product={shoe} addFavorite={addFavorite}/>
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