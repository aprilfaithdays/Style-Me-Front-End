import React,  { useState, useEffect } from 'react';

export const OutfitsContext = React.createContext('');

const Outfits = ({children}) => {
    const abortController = new AbortController()
    const [outfits, setOutfits] = useState('');

    useEffect(() => {
        getOutfits();
        // eslint-disable-next-line 
    },[])

    const getOutfits = async () => {
        await fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(res => setOutfits(res))
    }

    const cleanUp = () => abortController.abort()

    return (
        <div>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
                {children}
            </OutfitsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Outfits