import React,  { useState, useEffect } from 'react';

export const ShoesContext = React.createContext('');

const Shoes = ({children}) => {
    const abortController = new AbortController();
    const [shoes, setShoes] = useState('');

    useEffect(() => {
        getShoes();
        // eslint-disable-next-line 
    },[]);

    const getShoes = async () => {
        await fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(res => setShoes(res));
    }

    const cleanUp = () => abortController.abort();

    return (
        <div>
            <ShoesContext.Provider value={[shoes, setShoes]}>
                {children}
                </ShoesContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Shoes