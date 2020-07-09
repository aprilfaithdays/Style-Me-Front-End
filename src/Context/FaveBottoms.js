import React,  { useState, useEffect } from 'react';

export const FaveBottomsContext = React.createContext('');

const FaveBottoms = ({children}) => {
    const abortController = new AbortController();
    const [faveBottoms, setFaveBottoms] = useState([]);

    useEffect(() => {
        getFaveBottoms();
        // eslint-disable-next-line 
    },[])

    const getFaveBottoms = async () => {
        await fetch('http://localhost:3000/favorite_bottoms')
        .then(res => res.json())
        .then(res => setFaveBottoms(res));
    }

    const cleanUp = () => abortController.abort();

    return (
        <div>
            <FaveBottomsContext.Provider value={[faveBottoms, setFaveBottoms]}>
                {children}
            </FaveBottomsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default FaveBottoms