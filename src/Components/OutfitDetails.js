import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OutfitDetails = props => {
    const id = parseInt(props.match.params.id,0)
    const [outfit, setOutfit] = useState('')
    const [user, setUser] = useState('')
    const [top, setTop] = useState('')
    const [bottom, setBottom] = useState('')
    const [shoe, setShoe] = useState('')

    useEffect(() => {
        fetchOutfit()
        // eslint-disable-next-line
    }, [id])

    const fetchOutfit = () => {
        fetch(`http://localhost:3000/outfits/${id}`)
        .then(res => res.json())
        .then(res => {
            setOutfit(res);
            setUser(res.user);
            setTop(res.top);
            setBottom(res.bottom);
            setShoe(res.shoe)
        })
    }

    const outfitPrice = () => {
        return top.price + bottom.price + shoe.price
    }

    return(
        <div className="container">
            <h3>{outfit.name}</h3>
            Created by: {user.name}<br/>
            Price: ${outfitPrice()} <br/>
            <Link to={`/tops/${top.id}`}>
                <img src={top.img_url} alt='top'/> 
            </Link><br/> 
            <Link to={`/bottoms/${bottom.id}`}>
                <img src={bottom.img_url} alt='bottom'/>
            </Link><br/>
            <Link to={`/shoes/${shoe.id}`}>
                <img src={shoe.img_url} alt='shoe'/>
            </Link><br/>
        </div>
    )
}

export default OutfitDetails