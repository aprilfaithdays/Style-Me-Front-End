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
    
    const [edit, setEdit] = useState(false)
    const [update, setUpdate] = useState(false)
    const [name, setName] = useState('')

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
            {update ? <button className="btn btn-outline-secondary btn-sm" onClick={handleSave}>Save</button> : 
            <div>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setUpdate(true)}>Update</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete}>Delete</button>
            </div>}
        </div>
    )

    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE'
        })
        removeOutfit(id);
        props.history.push('/')
    }

    const removeOutfit = id => {
        const list = [...outfits]
        const updated = list.filter(outfit => outfit.id !== id)
        setOutfits(updated)
    }

    const handleSave = () => {
        console.log(name, currentUser, top.id, bottom.id, shoe.id, url, outfit.likes)
        fetch(url, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name
            })
        })
        .then(res => res.json())
        .then(res => {
            setOutfit(res);
            setUser(res.user);
            setTop(res.top);
            setBottom(res.bottom);
            setShoe(res.shoe);
            setUpdate(false);
            setEdit(false);
        })
    }

    const handleUpdate = () => {
        return (
            <div className="outfit-detail">
                <input className="form-control col-md-2" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
        )
    }

    const editButton = () => (
        edit ? creatorAccess() : <div><button className="btn btn-outline-secondary btn-sm" onClick={() => setEdit(true)}>Edit</button></div>
    )

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
            {update ? handleUpdate() : <h3>{outfit.name}</h3> }
            <div className="outfit-detail">
                {productDetail(top)}
                {productDetail(bottom)}
                {productDetail(shoe)}
            </div>
            {user.id === currentUser  ? editButton() : <div>Created by: {user.name}</div> }
            Price: ${outfitPrice()} 
        </div>
    )
}

export default OutfitDetails