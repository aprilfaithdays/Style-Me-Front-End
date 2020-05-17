import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';

const Auth = () => {
    return(
        <div>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Login} />
            </Switch>
        </div>
    )
}

export default Auth