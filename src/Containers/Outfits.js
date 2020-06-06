import React, { useContext, useEffect } from 'react';
import { OutfitsContext } from './Store';
import OutfitCard from '../Components/OutfitCard'


const Outfits = () => {
    const [outfits, setOutfits] = useContext(OutfitsContext)

    useEffect(() => {
        fetchOutfits()
        // eslint-disable-next-line
    },[])

    const fetchOutfits = async () => {
        await fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(res => setOutfits(res))
    }

    const renderOutfits = () => {
        const list = [...outfits]
        return list.map(outfit => <OutfitCard key={outfit.id} outfit={outfit} />)
    }

    return(
        <div className="container">
            <h3>Browse All Outfits</h3>
            <div className='outfit-list'>
                {renderOutfits()}
            </div>
        </div>
    )
}

export default Outfits