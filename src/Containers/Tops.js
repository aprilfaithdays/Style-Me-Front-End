import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductCard from '../Components/ProductCard';

const Tops = () => {
    const [tops, setTops] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(res => setTops(res))
    }, [])

    const renderTops = () => {
        const list = [...tops]
        return list.map(top => {
            return <ProductList key={top.id} product={top} />
        })        
    }

    const renderTop = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='tops' id={id}/>
    }

    return(
        <div>
            <Switch>
                <Route path='/tops/:id' component={renderTop} />
                <Route path='/tops' component={renderTops} />
            </Switch>
        </div>
    )
}

export default Tops