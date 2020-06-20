import React, {useState, useEffect} from 'react'

export const FaveTopsContext = React.createContext('');
export const FaveBottomsContext = React.createContext('');
export const ShoesContext = React.createContext('');
export const FaveShoesContext = React.createContext('');
export const NewTopContext = React.createContext('');
export const NewBottomContext = React.createContext('');
export const NewShoeContext = React.createContext('');
export const TabKeyContext = React.createContext('');

const Store = ({children}) => {
    const abortController = new AbortController()

    const [faveTops, setFaveTops] = useState([]);
    const [faveBottoms, setFaveBottoms] = useState([]);
    const [shoes, setShoes] = useState('')
    const [faveShoes, setFaveShoes] = useState([]);
    const [newTop, setNewTop] = useState('');
    const [newBottom, setNewBottom] = useState('');
    const [newShoe, setNewShoe] = useState('');
    const [key, setKey] = useState('tops');

    useEffect(() => {
        getFaveTops();
        getFaveBottoms();
        getShoes();
        getFaveShoes();
        // eslint-disable-next-line 
    },[])

    const getFaveTops = async () => {
        await fetch('http://localhost:3000/favorite_tops')
        .then(res => res.json())
        .then(res => setFaveTops(res))
    }

    const getFaveBottoms = async () => {
        await fetch('http://localhost:3000/favorite_bottoms')
        .then(res => res.json())
        .then(res => setFaveBottoms(res))
    }

    const getShoes = async () => {
        await fetch('http://localhost:3000/shoes')
        .then(res => res.json())
        .then(res => setShoes(res))
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
            <FaveTopsContext.Provider value={[faveTops, setFaveTops]}>
            <FaveBottomsContext.Provider value={[faveBottoms, setFaveBottoms]}>
            <ShoesContext.Provider value={[shoes, setShoes]}>
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
            </ShoesContext.Provider>
            </FaveBottomsContext.Provider>
            </FaveTopsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Store