import React, {useState, useEffect} from 'react'

export const OutfitsContext = React.createContext('')
export const TopsContext = React.createContext('')
export const FaveTopsContext = React.createContext('')
export const FaveBottomsContext = React.createContext('')
export const FaveShoesContext = React.createContext('')
export const NewTopContext = React.createContext('')
export const NewBottomContext = React.createContext('')
export const NewShoeContext = React.createContext('')
export const TabKeyContext = React.createContext('')

const Store = ({children}) => {
    const abortController = new AbortController()

    const [outfits, setOutfits] = useState('')
    const [tops, setTops] = useState([])
    const [faveTops, setFaveTops] = useState('')
    const [faveBottoms, setFaveBottoms] = useState('')
    const [faveShoes, setFaveShoes] = useState('')
    const [newTop, setNewTop] = useState('')
    const [newBottom, setNewBottom] = useState('')
    const [newShoe, setNewShoe] = useState('')
    const [key, setKey] = useState('tops')

    useEffect(() => {
        getOutfits()
        getTops()
        getFaveTops()
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
        return cleanUp()
    }

    const getFaveTops = async () => {
        await fetch('http://localhost:3000/favorite_tops')
        .then(res => res.json())
        .then(res => setFaveTops(res))
        return cleanUp()
    }

    const cleanUp = () => {
        abortController.abort()
    }

    return (
        <div>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <TopsContext.Provider value={[tops, setTops]}>
            <FaveTopsContext.Provider value={[faveTops, setFaveTops]}>
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
            </FaveTopsContext.Provider>
            </TopsContext.Provider>
            </OutfitsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Store