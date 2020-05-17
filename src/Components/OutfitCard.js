import React from 'react'
import {Link} from 'react-router-dom'

const OutfitCard = props => {
    const outfit = props.outfit
    const top = outfit.top 
    const bottom = outfit.bottom
    const shoe = outfit.shoe
    const user = outfit.user

    return(
        <p>
            {/* {console.log(outfit)} */}
            <Link to={`/outfits/${outfit.id}`}> Outfit Name: {outfit.name} <br/></Link>
            <img src={top.img_url} alt='top'/> <br/>
            <img src={bottom.img_url} alt='bottom'/> <br/>
            <img src={shoe.img_url} alt='shoe'/> <br/>
            Created by: {user.name}
        </p>
    )
}

export default OutfitCard