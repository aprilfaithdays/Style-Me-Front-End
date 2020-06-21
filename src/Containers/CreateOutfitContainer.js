import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FavoritesList from '../Components/FavoritesList';
import CreateOutfitForm from '../Components/CreateOutfitForm';
import { useContext } from 'react';
import { MyTopsContext, MyBottomsContext } from '../Context/Favorites';
import { useEffect } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';
import { FaveTopsContext } from '../Context/FaveTops';
import { FaveBottomsContext } from '../Context/FaveBottoms';

const CreateOutfit = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops] = useContext(FaveTopsContext)
    const [, setMyTops] = useContext(MyTopsContext)

    const [faveBottoms] = useContext(FaveBottomsContext)
    const [, setMyBottoms] = useContext(MyBottomsContext)

    useEffect(() => {
        getMyTops();
        getMyBottoms();
        // eslint-disable-next-line 
    },[faveTops, faveBottoms])

    const myList = list => {
        return list.filter(object => object.user_id === currentUser.id)
    }

    const getMyTops = () => {
        const topList = [...faveTops]
        const myTopList = myList(topList)
        const tops = myTopList.map(fave => fave.top)
        setMyTops(tops)
    }

    const getMyBottoms = () => {
        const bottomList = [...faveBottoms]
        const myBottomList = myList(bottomList)
        const bottoms = myBottomList.map(fave => fave.bottom)
        setMyBottoms(bottoms)
    }

    const createOutfitPage = props => {
        return (
            <div>
                <h3 className="title">Create an Outfit!</h3>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <CreateOutfitForm {...props}/>
                        </div>
                        <div className='col-sm-8'>
                            <FavoritesList />
                        </div>
                    </div>
            </div>
        )
    }

    return(
        <div>
            <Switch>
                <Route path="/outfits/new" component={createOutfitPage}/>
            </Switch>
        </div>
    )
}

export default CreateOutfit