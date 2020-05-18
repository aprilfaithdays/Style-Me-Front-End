import React, { useState, useEffect } from 'react';

const ProductCard = props => {
    const [product, setProduct] = useState('')
    const id = props.id
    const category = props.category

    useEffect(() => {
        fetch(`http://localhost:3000/${category}/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
    }, [id, category])

    return(
        <div>
            ProductCard Component<br/>
            <img src={product.img_url} alt="product"/>
            {/* {console.log(product)} */}
        </div>
    )
}

export default ProductCard