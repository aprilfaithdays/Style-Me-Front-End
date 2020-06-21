import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FavoritesList from '../Components/FavoritesList';
import CreateOutfitForm from '../Components/CreateOutfitForm';
import { useContext } from 'react';
import { MyTopsContext } from '../Context/Favorites';
import { useEffect } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';
import { FaveTopsContext } from '../Context/FaveTops';

const CreateOutfit = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const [faveTops] = useContext(FaveTopsContext)
    const [, setMyTops] = useContext(MyTopsContext)

    useEffect(() => {
        getMyTops()
        // eslint-disable-next-line 
    },[faveTops])

    const myList = list => {
        return list.filter(object => object.user_id === currentUser.id)
    }

    const getMyTops = () => {
        const topList = [...faveTops]
        const myTopList = myList(topList)
        const tops = myTopList.map(fave => fave.top)
        setMyTops(tops)
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