import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext, OutfitsContext } from '../Containers/Store'

const OutfitDetails = props => {
    const id = parseInt(props.match.params.id,0)
    const url = `http://localhost:3000/outfits/${id}`
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits, setOutfits] = useContext(OutfitsContext)
    const [outfit, setOutfit] = useState('')
    const [user, setUser] = useState('')
    const [top, setTop] = useState('')
    const [bottom, setBottom] = useState('')
    const [shoe, setShoe] = useState('')

    useEffect(() => {
        fetchOutfit()
        // eslint-disable-next-line
    }, [])
    
    const fetchOutfit = () => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setOutfit(res);
            setUser(res.user);
            setTop(res.top);
            setBottom(res.bottom);
            setShoe(res.shoe)
        })
    }

    const creatorAccess = () => (
        <div>
            <button className="btn btn-outline-secondary btn-sm">Update</button>
            <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleDelete}
            >Delete</button>
        </div>
    )

    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE'
        })
        updateOutfitList(id);
        props.history.push('/')
    }

    const updateOutfitList = id => {
        const list = [...outfits]
        const updated = list.filter(outfit => outfit.id !== id)
        setOutfits(updated)
    }

    const outfitPrice = () => (
        top.price + bottom.price + shoe.price
    )

    const productDetail = product => {
        return (
            <Link to={`/${product.category}/${product.id}`}>
                <img src={product.img_url} alt={product}/>
            </Link>
        )
    }

    return(
        <div className="container">
            <h3>{outfit.name}</h3>
            <div className="outfit-detail">
                {productDetail(top)}
                {productDetail(bottom)}
                {productDetail(shoe)}
            </div>
            {user.id === currentUser ? creatorAccess() : <div>Created by: {user.name}</div> }
            Price: ${outfitPrice()} <br/>
        </div>
    )
}

export default OutfitDetails