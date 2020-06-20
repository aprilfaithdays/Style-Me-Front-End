import React from 'react'
import ProductCard from '../Components/ProductCard';

const BottomContainer = props => {

    const renderBottom = () => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='bottoms' id={id}/>
    }

    return (
        <div>
            {renderBottom()}
        </div>
    )
}

export default BottomContainer