import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Login from './Login';


const SignUp = () => {
    const newUser = () => {
        return(
            <div>
                SignUp component
                <Link to='/login'>Login</Link>
            </div>
        )
    }

    return(
        <div>
            <Switch>
                <Route path="/signup" component={newUser} />
                <Route path="/" component={Login} />
            </Switch>
        </div>
    )
}

export default SignUp