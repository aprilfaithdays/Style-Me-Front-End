import React, { useContext } from 'react';
import { OutfitsContext } from '../Containers/Store';
import OutfitCard from './OutfitCard';

const OutfitsCollection = () => {
    const [outfits] = useContext(OutfitsContext)

    const renderOutfits = () => {
        const list = [...outfits]
        return list.map(outfit => <OutfitCard key={outfit.id} outfit={outfit} />)
    }

    return(
        <div>
            OutfitCollection Component
            {renderOutfits()}
        </div>
    )
}

export default OutfitsCollection