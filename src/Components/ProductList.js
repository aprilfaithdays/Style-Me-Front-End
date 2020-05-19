import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {
    const product = props.product

    return(
        <div>
            <Link to={`/${product.category}/${product.id}`} >
                <img src={product.img_url} alt="product"/>
            </Link><br/>
            { props.favorite ? <button className="btn btn-sm" onClick={props.removeFavorite} value={product.id}> Remove Favorites </button> : 
            <button className="btn btn-sm" onClick={props.addFavorite} value={product.id}> Add Favorites </button>}
        </div>
    )
}

export default ProductList