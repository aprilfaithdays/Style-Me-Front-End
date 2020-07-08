import React, { useContext, useState } from 'react';
import { OutfitsContext } from '../Context/Outfits';
import { CurrentUserContext } from '../Context/CurrentUser';
import OutfitCard from '../Components/OutfitCard';

const LikesPage = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits] = useContext(OutfitsContext)
    const [likes, setLikes] = useState([])


    const likesList = () => {
        const likedList = [...currentUser.likes];
        let likedId = [];
        for(let i = 0; i < likedList.length; i++){
            likedId.push(likedList[i].outfit_id)
        }
        return likedId
    }

    const filterMyOutfits = () => {
        const list = [...outfits]
        const myLikes = likesList()
        const myList = list.filter(outfit => myLikes.includes(outfit.id))
        return myList.sort((a, b) => b.id - a.id)
    }

    const renderOutfits = () => {
        const myOutfits = filterMyOutfits()
        return myOutfits.map(outfit => {
            return <OutfitCard key={outfit.id} outfit={outfit}/>
        })
    }

    const renderMyOutfits = () => (
        <div>
            <h3>Liked Outfits</h3>
            <div className="outfit-list">
                {renderOutfits()}
            </div>
        </div>
    )

    return(
        <div>
            {filterMyOutfits().length > 0 && renderMyOutfits()} 
        </div>
    )
}

export default LikesPage