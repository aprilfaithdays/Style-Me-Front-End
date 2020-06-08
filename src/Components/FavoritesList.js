import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
// import { CurrentUserContext, FaveTopsContext, FaveBottomsContext, FaveShoesContext, NewTopContext, NewBottomContext, NewShoeContext, TabKeyContext } from '../Containers/Store';
import { FaveTopsContext, FaveBottomsContext, FaveShoesContext, NewTopContext, NewBottomContext, NewShoeContext, TabKeyContext } from '../Containers/Store';
import { CurrentUserContext } from '../Context/CurrentUser';
import FavoriteCard from '../Components/FavoriteCard';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const FavoritesList = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops, setFaveTops] = useContext(FaveTopsContext)
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext)
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext)
    const [, setNewTop] = useContext(NewTopContext)
    const [, setNewBottom] = useContext(NewBottomContext)
    const [, setNewShoe] = useContext(NewShoeContext)
    const [key, setKey] = useContext(TabKeyContext)
    
    const myList = list => {
        return list.filter(object => object.user_id === currentUser.id)
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
            removeFave = faveTops.find(fave => fave.user_id === currentUser.id && fave.top_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveTops, removeFave.id)
            setFaveTops(updated)

        } if (category === 'bottoms'){
            removeFave = faveBottoms.find(fave => fave.user_id === currentUser.id && fave.bottom_id === id)
            deleteFave(category, removeFave.id)
            let updated = updateList(faveBottoms, removeFave.id)
            setFaveBottoms(updated)

        } if (category === 'shoes'){
            removeFave = faveShoes.find(fave => fave.user_id === currentUser.id && fave.shoe_id === id)
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

    const selectFavorite = (category, id, img_url) => {
        if (category === 'tops'){
            setNewTop([img_url, id])
        } if (category === 'bottoms'){
            setNewBottom([img_url, id])
        } if (category === 'shoes'){
            setNewShoe([img_url, id])
        }
    }
        
    const renderMyFavorites = list => {
        if (list.length > 0){
            return list.map(product => {
                return <FavoriteCard 
                    key={product.id} 
                    product={product} 
                    removeFavorite={removeFavorite}
                    selectFavorite={selectFavorite}
                    />
            })
        }
    }

    const renderProducts = list => (
        <div className="product-list">{renderMyFavorites(list)}</div>
    )

    const emptyFaves = category => (
        <p>You don't have any favorite <Link to={`/${category}`}>{category}</Link> in your wardrobe!</p>
    )

    return(
        <Container fluid>
            <Col className="options">
                <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="tops" title="Tops">
                    {filterMyFaveTops().length !== 0 ? renderProducts(myTops) : emptyFaves('tops')}
                </Tab>
                <Tab eventKey="bottoms" title="Bottoms">
                    {filterMyFaveBottoms().length !== 0 ? renderProducts(myBottoms) : emptyFaves('bottoms')}
                </Tab>
                <Tab eventKey="shoes" title="Shoes">
                    {filterMyFaveShoes().length !== 0 ? renderProducts(myShoes) : emptyFaves('shoes')}
                </Tab>
                </Tabs>
            </Col>
        </Container>
    )

}

export default FavoritesList