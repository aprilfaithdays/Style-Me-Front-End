import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../Components/ProductList';
import { Switch, Route } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext, FaveBottomsContext } from './Store';

const Bottoms = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext)
    const [bottoms, setBottoms] = useState('')

    useEffect(() => {
        getBottoms()
        getFaveBottoms()
        // eslint-disable-next-line 
    }, [])

    const getBottoms = () => {
        fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
    }

    const getFaveBottoms = () => {
        fetch('http://localhost:3000/favorite_bottoms')
        .then(res => res.json())
        .then(res => setFaveBottoms(res))
    }

    const faveBottomsId = () => {
        const list = [...faveBottoms]
        const myList = list.filter(fave => fave.user_id === currentUser)
        return myList.map(fave => fave.bottom_id)
    }

    const renderBottoms = () => {
        const list = [...bottoms]
        const faveBottoms = faveBottomsId()
        return list.map(bottom => {
            return <ProductList key={bottom.id} product={bottom} addFavorite={addFavorite} favorite={faveBottoms.includes(bottom.id) ? true: false}/>
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
        .then(res => res.json())
        .then(res => setFaveBottoms([...faveBottoms, res]))
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