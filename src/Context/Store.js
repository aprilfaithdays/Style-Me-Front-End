import React, {useState, useEffect} from 'react'

export const OutfitsContext = React.createContext('');
export const TopsContext = React.createContext('');
export const FaveTopsContext = React.createContext('');
export const BottomsContext = React.createContext('');
export const FaveBottomsContext = React.createContext('');
export const ShoesContext = React.createContext('');
export const FaveShoesContext = React.createContext('');
export const NewTopContext = React.createContext('');
export const NewBottomContext = React.createContext('');
export const NewShoeContext = React.createContext('');
export const TabKeyContext = React.createContext('');

const Store = ({children}) => {
    const abortController = new AbortController()

    const [outfits, setOutfits] = useState('');
    const [tops, setTops] = useState([]);
    const [faveTops, setFaveTops] = useState([]);
    const [bottoms, setBottoms] = useState([]);
    const [faveBottoms, setFaveBottoms] = useState([]);
    const [shoes, setShoes] = useState('')
    const [faveShoes, setFaveShoes] = useState([]);
    const [newTop, setNewTop] = useState('');
    const [newBottom, setNewBottom] = useState('');
    const [newShoe, setNewShoe] = useState('');
    const [key, setKey] = useState('tops');

    useEffect(() => {
        getOutfits();
        getTops();
        getFaveTops();
        getBottoms();
        getFaveBottoms();
        getShoes();
        getFaveShoes();
        // eslint-disable-next-line 
    },[])

    const getOutfits = async () => {
        await fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(res => setOutfits(res))
    }

    const getTops = async () => {
        await fetch('http://localhost:3000/tops')
        .then(res => res.json())
        .then(res => setTops(res))
    }

    const getFaveTops = async () => {
        await fetch('http://localhost:3000/favorite_tops')
        .then(res => res.json())
        .then(res => setFaveTops(res))
    }

    const getBottoms = async () => {
        await fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
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
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <TopsContext.Provider value={[tops, setTops]}>
            <BottomsContext.Provider value={[bottoms, setBottoms]}>
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
            </BottomsContext.Provider>
            </TopsContext.Provider>
            </OutfitsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Store