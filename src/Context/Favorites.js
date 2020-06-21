import React, { useState } from 'react';

export const MyTopsContext = React.createContext([]);
export const MyBottomsContext = React.createContext([]);

const Favorites = ({children}) => {
    const [myTops, setMyTops] = useState([])
    const [myBottoms, setMyBottoms] = useState([])

    return (
        <div>
            <MyTopsContext.Provider value={[myTops, setMyTops]}>
            <MyBottomsContext.Provider value={[myBottoms, setMyBottoms]}>
                {children}
            </MyBottomsContext.Provider>
            </MyTopsContext.Provider>
        </div>
    )
}

export default Favorites