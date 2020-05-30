import React, { useState, useEffect } from 'react';

const ProductCard = props => {
    const [product, setProduct] = useState('')
    const id = props.id
    const category = props.category
    const outfits = product.outfits

    useEffect(() => {
        fetch(`http://localhost:3000/${category}/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
    }, [id, category])

    const renderOutfits = () => {
        console.log(outfits)
        // if(outfits.length > 0){
        //     return {
        //         <div>
        //             huh
        //         </div>
        //     }
        // }
    }

    return(
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
                <img className="product-card" src={product.img_url} alt="product"/>
            </div>
            <div className="col-sm-8">
                <h3>{product.name}</h3>
                $ {product.price} - {product.color}
                {renderOutfits()}
            </div>
        </div>
            {/* {console.log(product)} */}
        </div>
    )
}

export default ProductCard