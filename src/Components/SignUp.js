import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Login from './Login';


const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const newUser = () => {
        return(
            <div>
                <h5>Sign Up</h5>
                <form>
                    <input className="form-control form-control-sm" type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username}/>
                    <input className="form-control form-control-sm" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
                    <input className="form-control form-control-sm" type="password" placeholder="confirm password" onChange={e => setPassword(e.target.value)} value={password}/>
                    <button className="btn btn-outline-secondary btn-sm">Sign Up</button>
                </form>
                Been here before? <span>➤ </span> <Link to='/login'>Login</Link>
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