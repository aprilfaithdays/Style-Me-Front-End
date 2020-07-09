import React,  { useState, useEffect } from 'react';

export const FaveTopsContext = React.createContext('');

const FaveTops = ({children}) => {
    const abortController = new AbortController();
    const [faveTops, setFaveTops] = useState([]);

    useEffect(() => {
        getFaveTops();
        // eslint-disable-next-line 
    },[])

    const getFaveTops = async () => {
        await fetch('http://localhost:3000/favorite_tops')
        .then(res => res.json())
        .then(res => setFaveTops(res));
    }

    const cleanUp = () => abortController.abort();

    return (
        <div>
            <FaveTopsContext.Provider value={[faveTops, setFaveTops]}>
                {children}
            </FaveTopsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default FaveTops