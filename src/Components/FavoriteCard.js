import React from 'react'

const FavoriteCard = props => {
    const product = props.product

    const handleRemove = () => {
        props.removeFavorite(product.category, product.id)
    }

    return(
        <div>
            <img src={product.img_url} alt="product"/><br/>
            {props.create && <button>Select</button>}
            <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0" onClick={handleRemove}>Remove</button>
            {/* {console.log(product)} */}
        </div>
    )
}

export default FavoriteCard