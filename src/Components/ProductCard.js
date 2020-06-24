import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard';
import { useContext } from 'react';
import { OutfitsContext } from '../Context/Outfits';
import '../Styling/ProductPage.css'

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
            <div className="product-section">
                <h3 className="title">{product.name}</h3>
                <div className="center-img">
                    <img className="show-img" src={product.img_url} alt="product"/>
                </div>
            </div>
                <h5 className="section-title">- Outfits Created with this Product -</h5>
            <div className="outfits-section">
                {renderOutfit()}
            </div>
        </div>
    )
}

export default ProductCard
