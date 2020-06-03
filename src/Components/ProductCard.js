import React, { useState, useEffect } from 'react';

const ProductCard = props => {
    const [product, setProduct] = useState('')
    const id = props.id
    const category = props.category

    useEffect(() => {
        fetch(`http://localhost:3000/${category}/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        // eslint-disable-next-line 
    }, [])


    return(
        <div className="container">
            <h3 className="title">{product.name}</h3>
            <div className="row">
                <div className="col-sm-4">
                    <img className="product-card" src={product.img_url} alt="product"/>
                </div>
                <div className="col-sm-8">
                    $ {product.price} - {product.color}
                </div>
            </div>
            {/* {console.log(product)} */}
        </div>
    )
}

export default ProductCard