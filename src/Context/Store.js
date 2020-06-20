import React, {useState, useEffect} from 'react'

export const FaveBottomsContext = React.createContext('');
export const FaveShoesContext = React.createContext('');
export const NewTopContext = React.createContext('');
export const NewBottomContext = React.createContext('');
export const NewShoeContext = React.createContext('');
export const TabKeyContext = React.createContext('');

const Store = ({children}) => {
    const abortController = new AbortController()

    const [faveBottoms, setFaveBottoms] = useState([]);
    const [faveShoes, setFaveShoes] = useState([]);
    const [newTop, setNewTop] = useState('');
    const [newBottom, setNewBottom] = useState('');
    const [newShoe, setNewShoe] = useState('');
    const [key, setKey] = useState('tops');

    useEffect(() => {
        getFaveBottoms();
        getFaveShoes();
        // eslint-disable-next-line 
    },[])

    const getFaveBottoms = async () => {
        await fetch('http://localhost:3000/favorite_bottoms')
        .then(res => res.json())
        .then(res => setFaveBottoms(res))
    }

    const getFaveShoes = async () => {
        await fetch('http://localhost:3000/favorite_shoes')
        .then(res => res.json())
        .then(res => setFaveShoes(res))
    }

    const cleanUp = () => {
        abortController.abort()
    }

    return (
        <div>
            <FaveBottomsContext.Provider value={[faveBottoms, setFaveBottoms]}>
            <FaveShoesContext.Provider value={[faveShoes, setFaveShoes]}>
            <NewTopContext.Provider value={[newTop, setNewTop]}>
            <NewBottomContext.Provider value={[newBottom, setNewBottom]}>
            <NewShoeContext.Provider value={[newShoe, setNewShoe]}>
            <TabKeyContext.Provider value={[key, setKey]}>
                {children}
            </TabKeyContext.Provider>
            </NewShoeContext.Provider>
            </NewBottomContext.Provider>
            </NewTopContext.Provider>
            </FaveShoesContext.Provider>
            </FaveBottomsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Store