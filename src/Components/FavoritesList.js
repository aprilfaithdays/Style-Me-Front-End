import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext } from '../Containers/Store';
import FavoriteCard from '../Components/FavoriteCard';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const FavoritesList = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops, setFaveTops] = useContext(FaveTopsContext)
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext)
    const [key, setKey] = useState('tops')
    
    const myList = list => {
        return list.filter(object => object.user_id === currentUser)
    }
    
    const filterMyFaveTops = () => {
        const topList = [...faveTops]
        const myTopList = myList(topList)
        return myTopList.map(fave => fave.top)
    }
    
    const filterMyFaveBottoms = () => {
        const bottomList = [...faveBottoms]
        const myBottomList = myList(bottomList)
        return myBottomList.map(fave => fave.bottom)
    }
    
    const filterMyFaveShoes = () => {
        const shoeList = [...faveShoes]
        const myShoeList = myList(shoeList)
        return myShoeList.map(fave => fave.shoe)
    }

    const [myTops] = useState(filterMyFaveTops())
    const [myBottoms] = useState(filterMyFaveBottoms())
    const [myShoes] = useState(filterMyFaveShoes())
    
    const removeFavorite = (category, id) => {
        let removeFave
        if (category === 'tops'){
            removeFave = faveTops.find(fave => fave.user_id === currentUser && fave.top_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveTops, removeFave.id)
            setFaveTops(updated)

        } else if (category === 'bottoms'){
            removeFave = faveBottoms.find(fave => fave.user_id === currentUser && fave.bottom_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveBottoms, removeFave.id)
            setFaveBottoms(updated)

        } else if (category === 'shoes'){
            removeFave = faveShoes.find(fave => fave.user_id === currentUser && fave.shoe_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveShoes, removeFave.id)
            setFaveShoes(updated)
        }
    }

    const deleteFave = (category, id) => {
        const url = `http://localhost:3000/favorite_${category}/${id}`
        fetch(url, {
            method: 'DELETE'
        })
    }

    const updateList = (list, id) => {
        const faveList = [...list]
        return faveList.filter(fave => fave.id !== id)
    }
        
    const renderMyFavorites = list => {
        if (list.length > 0){
            return list.map(product => {
                return <FavoriteCard 
                    key={product.id} 
                    product={product} 
                    removeFavorite={removeFavorite}
                    />
            })
        }
    }

    return(
        <Container fluid>
            <Col className="options">
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="tops" title="Tops" className="links">
                    {filterMyFaveTops().length !== 0 ? <div className="product-list">{renderMyFavorites(myTops)}</div> : 
                    <p>You don't have any favorite <Link to="/tops">tops</Link> in your wardrobe!</p>}
                </Tab>
                <Tab eventKey="bottoms" title="Bottoms" className="links">
                    {filterMyFaveBottoms().length !== 0 ? <div className="product-list">{renderMyFavorites(myBottoms)}</div> : 
                    <p>You don't have any favorite <Link to="/bottoms">bottoms</Link> in your wardrobe!</p>}
                </Tab>
                <Tab eventKey="shoes" title="Shoes" className="links">
                    {filterMyFaveShoes().length !== 0 ? <div className="product-list">{renderMyFavorites(myShoes)}</div> : 
                    <p>You don't have any favorite <Link to='/shoes'>shoes</Link> in your wardrobe!</p>}
                </Tab>
                </Tabs>
            </Col>
        </Container>
    )

}

export default FavoritesList