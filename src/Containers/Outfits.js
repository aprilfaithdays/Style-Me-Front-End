import React, { useContext, useEffect } from 'react';
import { OutfitsContext } from './Store';
import OutfitsCollection from '../Components/OutfitsCollection';

const Outfits = () => {
    const [, setOutfits] = useContext(OutfitsContext)

    useEffect(() => {
        fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(list => setOutfits(list))
        // eslint-disable-next-line
    },[])

    return(
        <div>
            <OutfitsCollection />
        </div>
    )
}

export default Outfits