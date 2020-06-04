import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'


const Login = () => {

    const returningUser = () => {
        return(
            <div>
                Login component
                <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }


    return(
        <div>
            {returningUser()}
            {/* <Switch>
                <Route path="/login" component={returningUser} />
            </Switch> */}
        </div>
    )
}

export default Login