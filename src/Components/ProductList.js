import React from 'react';

const ProductList = props => {
    const product = props.product
    return(
        <div>
            <img src={product.img_url} alt="product"/>

        </div>
    )
}

export default ProductList