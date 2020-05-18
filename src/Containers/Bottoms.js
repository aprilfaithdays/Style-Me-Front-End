import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../Components/ProductList';
import { Switch, Route } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext } from './Store';

const Bottoms = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [bottoms, setBottoms] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
    }, [])

    const renderBottoms = () => {
        const list = [...bottoms]
        return list.map(bottom => {
            return <ProductList key={bottom.id} product={bottom} addFavorite={addFavorite}/>
        })
    }

    const renderBottom = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='bottoms' id={id} />
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(`http://localhost:3000/favorite_bottoms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: currentUser,
                bottom_id: id
            })
        })
    }

    return(
        <div>
            <Switch>
                <Route path='/bottoms/:id' component={renderBottom} />
                <Route path='/bottoms' component={renderBottoms} />
            </Switch>
        </div>
    )
}

export default Bottoms