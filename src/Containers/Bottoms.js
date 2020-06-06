import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../Components/ProductList';
import { CurrentUserContext, FaveBottomsContext } from './Store';

const Bottoms = () => {
    const faveBottomsUrl = 'http://localhost:3000/favorite_bottoms'
    const [currentUser] = useContext(CurrentUserContext)
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext)
    const [bottoms, setBottoms] = useState('')

    useEffect(() => {
        getBottoms()
        getFaveBottoms()
        // eslint-disable-next-line
    }, [])

    const getBottoms = async () => {
        await fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
    }

    const getFaveBottoms = async () => {
        await fetch(faveBottomsUrl)
        .then(res => res.json())
        .then(res => setFaveBottoms(res))
    }

    const filterMyFaveBottoms = () => {
        const list = [...faveBottoms]
        return list.filter(fave => fave.user_id === currentUser)
    }

    const faveBottomsId = () => {
        const myList = filterMyFaveBottoms()
        return myList.map(fave => fave.bottom_id)
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(faveBottomsUrl, {
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

    const removeFavorite  = e => {
        const id = parseInt(e.target.value, 0)
        const myList = filterMyFaveBottoms()
        const fave = myList.find(fave => (fave.user_id === currentUser && fave.bottom_id === id))

        fetch(`${faveBottomsUrl}/${fave.id}`, {
            method: 'DELETE'
        })
        removedFave(fave.id)
    }

    const removedFave = id => {
        const faveBottomsList = [...faveBottoms]
        const updated = faveBottomsList.filter(fave => fave.id !== id)
        setFaveBottoms(updated)
    }

    const renderBottoms = () => {
        const list = [...bottoms]
        const faveBottoms = faveBottomsId()
        return list.map(bottom => {
            return <ProductList 
                key={bottom.id} 
                product={bottom} 
                favorite={faveBottoms.includes(bottom.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        })
    }

    return(
        <div className="container">
            <h3 className="title">Bottoms</h3>
            <div className='product-list'>
                {renderBottoms()}
            </div>
        </div>
    )
}

export default Bottoms