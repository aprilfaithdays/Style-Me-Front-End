import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { OutfitsContext } from '../Context/Store';
import { CurrentUserContext } from '../Context/CurrentUser';
import UpdateOutfit from '../Components/UpdateOutfit';
import '../Styling/OutfitPage.css'

const OutfitPage = props => {
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

    useEffect(() => {
        fetchOutfit()
        // eslint-disable-next-line
    }, [])
    
    const fetchOutfit = () => {
        fetch(url)
        .then(res => res.json())
        .then(res => setInfo(res))
    }

    const setInfo = res => {
        setOutfit(res);
        setUser(res.user);
        setTop(res.top);
        setBottom(res.bottom);
        setShoe(res.shoe)
        setUpdate(false);
        setEdit(false);
    }

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

    const creatorAccess = () => (
        <div>
            {update === false && 
            <div>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setUpdate(true)}>Update</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete}>Delete</button>
            </div>}
        </div>
    )

    const editButton = () => (
        edit ? creatorAccess() : <div><button className="btn btn-outline-secondary btn-sm" onClick={() => setEdit(true)}>Edit</button></div>
    )

    const outfitPrice = () => (
        top.price + bottom.price + shoe.price
    )

    const productDetail = product => {
        return (
            <div>
                <Link to={`/${product.category}/${product.id}`}>
                    <img className="outfit-index-img" src={product.img_url} alt={product}/>
                </Link>
                <p>{product.name}</p>
            </div>
        )
    }

    return(
        <div className="outfit-page">
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className="center-card">
                            <div className="outfit-page-card">
                                {productDetail(top)}
                                {productDetail(bottom)}
                                {productDetail(shoe)}
                            </div>
                        </div>
                        <div className="outfit-details">
                            {update ? <UpdateOutfit setInfo={setInfo} id={id} name={outfit.name}/> : <h4>{outfit.name}</h4> }
                            {user.id === currentUser.id  ? editButton() : <em>Created by: {user.name}</em> }<br/>
                            Price: ${outfitPrice()} 
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        Comments section
                    </div>
                </div>
        </div>
    )
}

export default OutfitPage