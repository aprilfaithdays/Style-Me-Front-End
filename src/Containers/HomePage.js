import React, { useContext } from 'react';
import { OutfitsContext, CurrentUserContext } from './Store';
import OutfitCard from '../Components/OutfitCard';

const HomePage = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits] = useContext(OutfitsContext)

    const filterMyOutfits = () => {
        const list = [...outfits]
        const myList = list.filter(outfit => outfit.user_id === currentUser)
        return myList.map(outfit => {
            return <OutfitCard key={outfit.id} outfit={outfit}/>
        })
    }


    return(
        <div className="container">
            <h3>My Outfits</h3>
            <div className="outfit-list"> {filterMyOutfits()} </div>
        </div>
    )
}

export default HomePage