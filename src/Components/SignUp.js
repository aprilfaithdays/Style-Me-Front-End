import React, { useState, useContext } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Login from './Login';
import { CurrentUserContext } from '../Containers/Store';

const SignUp = () => {
    const [, setCurrentUser] = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [match, setMatch] = useState(true)

    const handleSignUp = (e, props) => {
        e.preventDefault()
        if (password === confirmPassword){
            addUser(props)
        } else {
            setMatch(false)
        }
    }

    const addUser = props => {
        const img_url = 'https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg'
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, username, password, img_url })       
        })
        .then(res => res.json())
        .then(res => {
            localStorage.id = res.id;
            setCurrentUser(parseInt(localStorage.id, 0))
        })
        props.history.push('/home')
    }

    const newUser = props => {
        return(
            <div>
                <h5>Sign Up</h5>
                <form onSubmit={e => handleSignUp(e, props)}>
                    <input className="form-control form-control-sm" type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="form-control form-control-sm" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input className="form-control form-control-sm" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input className="form-control form-control-sm" type="password" placeholder="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    {match === false && <small className="error form-text">*Passwords don't match.</small>}
                    <button className="btn btn-outline-secondary btn-sm" type="submit">Sign Up</button>
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