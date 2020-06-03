import React from 'react'
import {Link} from 'react-router-dom'

const OutfitCard = props => {
    const outfit = props.outfit
    const top = outfit.top 
    const bottom = outfit.bottom
    const shoe = outfit.shoe
    const user = outfit.user

    return(
        <div>
            {/* {console.log(outfit)} */}
            <strong><Link to={`/outfits/${outfit.id}`}> {outfit.name} <br/></Link></strong>
             <em> Created by: {user.name}</em><br/>
            <img src={top.img_url} alt='top'/> <br/>
            <img src={bottom.img_url} alt='bottom'/> <br/>
            <img src={shoe.img_url} alt='shoe'/> 
        </div>
    )
}

export default OutfitCard