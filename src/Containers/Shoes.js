import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';

const Shoes = () => {
    const [shoes, setShoes] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(res => setShoes(res))
    }, [])

    const renderShoes = () => {
        const list = [...shoes]
        return list.map(shoe => {
            return <ProductList key={shoe.id} category='shoes' product={shoe}/>
        })        
    }

    const renderShoe = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='shoes' id={id}/>
    }

    return(
        <div>
            <Switch>
                <Route path='/shoes/:id' component={renderShoe} />
                <Route path='/shoes' component={renderShoes} />
            </Switch>
        </div>
    )
}

export default Shoes