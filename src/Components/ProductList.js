import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {
    const product = props.product
    return(
        <div>
            <Link to={`/${props.category}/${product.id}`} >
                <img src={product.img_url} alt="product"/>
            </Link>
        </div>
    )
}

export default ProductList