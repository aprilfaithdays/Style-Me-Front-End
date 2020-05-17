import React, { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { Switch, Route } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Bottoms = () => {
    const [bottoms, setBottoms] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
    }, [])

    const renderBottoms = () => {
        const list = [...bottoms]
        return list.map(bottom => {
            return <ProductList key={bottom.id} category='bottoms' product={bottom}/>
        })
    }

    const renderBottom = props => {
        const id = parseInt(props.match.params.id, 0)
        return <ProductCard category='bottoms' id={id} />
    }

    return(
        <div>
            <Switch>
                <Route path='/bottoms/:id' component={renderBottom} />
                <Route path='/bottoms' component={renderBottoms} />
            </Switch>
        </div>
    )
}

export default Bottoms