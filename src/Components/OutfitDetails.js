import React, { useEffect, useState } from 'react';

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
        <div>
            <h3>{outfit.name}</h3>
            Created by: {user.name}<br/>
            Price: ${outfitPrice()} <br/>
            <img src={top.img_url} alt='top'/> <br/>
            <img src={bottom.img_url} alt='bottom'/> <br/>
            <img src={shoe.img_url} alt='shoe'/> <br/>
        </div>
    )
}

export default OutfitDetails