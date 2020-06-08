import React, {useState, useEffect} from 'react'

export const OutfitsContext = React.createContext('')
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
    const [faveTops, setFaveTops] = useState('')
    const [faveBottoms, setFaveBottoms] = useState('')
    const [faveShoes, setFaveShoes] = useState('')
    const [newTop, setNewTop] = useState('')
    const [newBottom, setNewBottom] = useState('')
    const [newShoe, setNewShoe] = useState('')
    const [key, setKey] = useState('tops')

    useEffect(() => {
        getOutfits()
        // eslint-disable-next-line 
    },[])

    const getOutfits = async () => {
        await fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(res => setOutfits(res))
    }

    const cleanUp = () => {
        abortController.abort()
    }

    return (
        <div>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
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
            </OutfitsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Store