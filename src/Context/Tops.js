import React,  { useState, useEffect } from 'react';

export const TopsContext = React.createContext('');

const Tops = ({children}) => {
    const abortController = new AbortController()
    const [tops, setTops] = useState([]);

    useEffect(() => {
        getTops();
        // eslint-disable-next-line 
    },[])

    const getTops = async () => {
        await fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(res => setTops(res))
    }

    const cleanUp = () => abortController.abort()

    return (
        <div>
            <TopsContext.Provider value={[tops, setTops]}>
                {children}
            </TopsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Tops