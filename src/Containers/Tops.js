import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';

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

    const renderTop = () => {
        return(
            <div>
                Top Detail
            </div>
        )
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