import React,  { useState, useEffect } from 'react';

export const FaveShoesContext = React.createContext('');

const FaveShoes = ({children}) => {
    const abortController = new AbortController();
    const [faveShoes, setFaveShoes] = useState([]);

    useEffect(() => {
        getFaveShoes();
        // eslint-disable-next-line 
    },[])

    const getFaveShoes = async () => {
        await fetch('http://localhost:3000/favorite_shoes')
        .then(res => res.json())
        .then(res => setFaveShoes(res));
    }

    const cleanUp = () => abortController.abort();

    return (
        <div>
            <FaveShoesContext.Provider value={[faveShoes, setFaveShoes]}>
                {children}
            </FaveShoesContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default FaveShoes