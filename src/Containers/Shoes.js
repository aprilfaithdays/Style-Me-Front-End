import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';
import { CurrentUserContext, FaveShoesContext } from './Store';

const Shoes = () => {
    const faveShoesUrl = 'http://localhost:3000/favorite_shoes'
    const [currentUser] = useContext(CurrentUserContext)
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext)
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
        fetch(faveShoesUrl)
        .then(res => res.json())
        .then(res => setFaveShoes(res))
    }

    const filterMyFaveShoes = () => {
        const list = [...faveShoes]
        return list.filter(fave => fave.user_id === currentUser)
    }

    const faveShoesId = () => {
        const myList = filterMyFaveShoes()
        return myList.map(fave => fave.shoe_id)
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(faveShoesUrl, {
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
        .then(res => setFaveShoes([...faveShoes, res]))
    }

    const removeFavorite = e => {
        const id = parseInt(e.target.value, 0)
        const myList = filterMyFaveShoes()
        const fave = myList.find(fave => (fave.user_id === currentUser && fave.shoe_id === id))

        fetch(`${faveShoesUrl}/${fave.id}`, {
            method: 'DELETE'
        })
        removedFave(fave.id)
    }

    const removedFave = id => {
        const faveShoesList = [...faveShoes]
        const updated = faveShoesList.filter(fave => fave.id !== id)
        setFaveShoes(updated)
    }

    const renderShoe = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='shoes' id={id}/>
    }

    const renderShoes = () => {
        const list = [...shoes]
        const faveShoes = faveShoesId()
        const shoeList = list.map(shoe => {
            return <ProductList 
                key={shoe.id} 
                product={shoe} 
                favorite={faveShoes.includes(shoe.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        }) 
        return(
            <div className="container">
                <h3 className="title">Shoes</h3>
                <div className='product-list'>
                    {shoeList}
                </div>
            </div>
        )
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