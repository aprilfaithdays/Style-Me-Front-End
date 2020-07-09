import React, { useContext } from 'react';
import { OutfitsContext } from '../Context/Outfits';
import OutfitCard from '../Components/OutfitCard';
import { MyLikesContext } from '../Context/MyLikes';

const LikesPage = () => {
    const [outfits] = useContext(OutfitsContext);
    const [myLikes] = useContext(MyLikesContext);

    const likesList = () => {
        const likedList = [...myLikes];
        let likedId = [];
        for(let i = 0; i < likedList.length; i++){
            likedId.push(likedList[i].outfit_id);
        }
        return likedId;
    }

    const filterMyOutfits = () => {
        const list = [...outfits];
        const myLikes = likesList();
        const myList = list.filter(outfit => myLikes.includes(outfit.id));
        return myList.sort((a, b) => b.id - a.id);
    }

    const renderOutfits = () => {
        const myOutfits = filterMyOutfits();
        return myOutfits.map(outfit => <OutfitCard key={outfit.id} outfit={outfit}/>);
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