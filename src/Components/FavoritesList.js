import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewTopContext, NewBottomContext, NewShoeContext, TabKeyContext } from '../Context/CreateOutfit';
import { FaveShoesContext } from '../Context/FaveShoes';
import { FaveBottomsContext } from '../Context/FaveBottoms';
import { FaveTopsContext } from '../Context/FaveTops';
import { CurrentUserContext } from '../Context/CurrentUser';
import FavoriteCard from '../Components/FavoriteCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { MyTopsContext, MyBottomsContext, MyShoesContext } from '../Context/Favorites';

const FavoritesList = () => {
    const [currentUser] = useContext(CurrentUserContext);

    const [faveTops, setFaveTops] = useContext(FaveTopsContext);
    const [faveBottoms, setFaveBottoms] = useContext(FaveBottomsContext);
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext);

    const [, setNewTop] = useContext(NewTopContext);
    const [, setNewBottom] = useContext(NewBottomContext);
    const [, setNewShoe] = useContext(NewShoeContext);

    const [key, setKey] = useContext(TabKeyContext);

    const [myTops] = useContext(MyTopsContext);
    const [myBottoms] = useContext(MyBottomsContext);
    const [myShoes] = useContext(MyShoesContext);
    
    const removeFavorite = (category, id) => {
        if (category === 'tops'){
            let removeFave = faveTops.find(fave => fave.user_id === currentUser.id && fave.top_id === id);
            deleteFave(category, removeFave.id);
            let updated = updateList(faveTops, removeFave.id);
            setFaveTops(updated);

        } if (category === 'bottoms'){
            let removeFave = faveBottoms.find(fave => fave.user_id === currentUser.id && fave.bottom_id === id);
            deleteFave(category, removeFave.id);
            let updated = updateList(faveBottoms, removeFave.id);
            setFaveBottoms(updated);

        } if (category === 'shoes'){
            let removeFave = faveShoes.find(fave => fave.user_id === currentUser.id && fave.shoe_id === id);
            deleteFave(category, removeFave.id);
            let updated = updateList(faveShoes, removeFave.id);
            setFaveShoes(updated);
        };
    }

    const deleteFave = (category, id) => {
        fetch(`http://localhost:3000/favorite_${category}/${id}`, {
            method: 'DELETE'
        });
    }

    const updateList = (list, id) => {
        const faveList = [...list];
        return faveList.filter(fave => fave.id !== id);
    }

    const selectFavorite = (category, id, img_url) => {
        if (category === 'tops'){ setNewTop([img_url, id]) };
        if (category === 'bottoms'){ setNewBottom([img_url, id]) };
        if (category === 'shoes'){ setNewShoe([img_url, id]) };
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
        };
    }

    const renderProducts = list => <div className="product-list">{renderMyFavorites(list)}</div>

    const emptyFaves = category => <p>You don't have any favorite <Link to={`/${category}`}>{category}</Link> in your wardrobe!</p>
    
    return(
        <Container fluid>
            <Col className="options">
                <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="tops" title="Tops">
                    {myTops.length !== 0 ? renderProducts(myTops) : emptyFaves('tops')}
                </Tab>
                <Tab eventKey="bottoms" title="Bottoms">
                    {myBottoms.length !== 0 ? renderProducts(myBottoms) : emptyFaves('bottoms')}
                </Tab>
                <Tab eventKey="shoes" title="Shoes">
                    {myShoes.length !== 0 ? renderProducts(myShoes) : emptyFaves('shoes')}
                </Tab>
                </Tabs>
            </Col>
        </Container>
    )
}

export default FavoritesList