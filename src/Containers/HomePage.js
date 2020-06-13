import React, { useContext } from 'react';
import { OutfitsContext } from '../Context/Store';
import { CurrentUserContext } from '../Context/CurrentUser';
import OutfitCard from '../Components/OutfitCard';

const HomePage = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits] = useContext(OutfitsContext)

    const filterMyOutfits = () => {
        const list = [...outfits]
        const myList = list.filter(outfit => outfit.user_id === currentUser.id)
        myList.sort((a, b) => b.id - a.id)
        return myList.map(outfit => {
            return <OutfitCard key={outfit.id} outfit={outfit}/>
        })
    }


    return(
        <div>
            <h3>My Outfits</h3>
            <div className="outfit-list"> {filterMyOutfits()} </div>
            {/* {console.log(outfits)} */}
        </div>
    )
}

export default HomePage