import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard';
import { useContext } from 'react';
import { OutfitsContext } from '../Context/Outfits';

const ProductCard = props => {
    const [product, setProduct] = useState('')
    const [outfits] = useContext(OutfitsContext)
    const id = props.id
    const category = props.category

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line 
    }, [])

    const getProduct = () => {
        fetch(`http://localhost:3000/${category}/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
    }

    const productOutfits = () => {
        const list = [...outfits]
        let productList 
        if (category === 'tops') {
            productList = list.filter(outfit => outfit.top_id === id)
        } if (category === 'bottoms') {
            productList = list.filter(outfit => outfit.bottom_id === id)
        } if (category === 'shoes') {
            productList = list.filter(outfit => outfit.shoe_id === id)
        }
        return productList
    }

    const renderOutfit = () => {
        const list = [...productOutfits()]
        list.sort((a, b) => b.id - a.id)
        return list.map(outfit => { console.log(outfit)
            return <OutfitCard key={outfit.id} outfit={outfit}/>
        })
    }

    return(
        <div>
            <div className="product-info">
                <h3 className="title">{product.name}</h3>
                <div className="row">
                    <div className="col-sm-4">
                        <img className="product-img" src={product.img_url} alt="product"/>
                    </div>
                    <div className="col-sm-8">
                        $ {product.price} - {product.color}
                    </div>
                </div>
            </div>
                <h4>Outfits Created with this Product:</h4>
            <div className="outfit-list">
                {renderOutfit()}
            </div>
        </div>
    )
}

export default ProductCard