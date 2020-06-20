import React from 'react'
import ProductCard from '../Components/ProductCard';

const TopContainer = props => {

    const renderTop = () => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='tops' id={id}/>
    }

    return (
        <div>
            {renderTop()}
        </div>
    )
}

export default TopContainer