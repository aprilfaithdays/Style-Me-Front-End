import React, { useContext } from 'react';
import ProductList from '../Components/ProductList';
import { FaveShoesContext, ShoesContext } from '../Context/Store';
import { CurrentUserContext } from '../Context/CurrentUser';

const Shoes = () => {
    const faveShoesUrl = 'http://localhost:3000/favorite_shoes'
    const [currentUser] = useContext(CurrentUserContext)
    const [faveShoes, setFaveShoes] = useContext(FaveShoesContext)
    const [shoes] = useContext(ShoesContext)


    const filterMyFaveShoes = () => {
        const list = [...faveShoes]
        return list.filter(fave => fave.user_id === currentUser.id)
    }

    const faveShoesId = () => {
        const myList = filterMyFaveShoes()
        return myList.map(fave => fave.shoe_id)
    }

    const addFavorite = e => {
        const id = e.target.value
        fetch(faveShoesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: currentUser.id,
                shoe_id: id
            })
        })
        .then(res => res.json())
        .then(res => setFaveShoes([...faveShoes, res]))
    }

    const removeFavorite = e => {
        const id = parseInt(e.target.value, 0)
        const myList = filterMyFaveShoes()
        const fave = myList.find(fave => (fave.user_id === currentUser.id && fave.shoe_id === id))

        fetch(`${faveShoesUrl}/${fave.id}`, {
            method: 'DELETE'
        })
        removedFave(fave.id)
    }

    const removedFave = id => {
        const faveShoesList = [...faveShoes]
        const updated = faveShoesList.filter(fave => fave.id !== id)
        setFaveShoes(updated)
    }

    const renderShoes = () => {
        const list = [...shoes]
        const faveShoes = faveShoesId()
        return list.map(shoe => {
            return <ProductList 
                key={shoe.id} 
                product={shoe} 
                favorite={faveShoes.includes(shoe.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        }) 
    }

    return(
        <div>
            <h3 className="title">Shoes</h3>
            <div className='product-list'>
                {renderShoes()}
            </div>
        </div>
    )
}

export default Shoes