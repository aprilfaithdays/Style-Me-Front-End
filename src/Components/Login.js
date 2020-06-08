import React, { useState, useEffect, useContext } from 'react';
import { Link} from 'react-router-dom'
import { CurrentUserContext } from '../Context/CurrentUser';
import Welcome from './Welcome';

const Login = props => {
    const abortController = new AbortController()
    const [, setCurrentUser] = useContext(CurrentUserContext)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(res => setUsers(res))
        // eslint-disable-next-line
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        const user = users.find(user => user.username === username)
        if (user) {
            if(user.password === password){
                localStorage.id = user.id;
                setCurrentUser(user)
                props.history.push('/')
                return cleanUp()
            } else {
                alert("Can't find username/password combo")
            }
        } else {
            alert("Can't find username/password combo")
        }
    }

    const cleanUp = () => {
        abortController.abort()
    }

    const returningUser = () => {
        return(
            <div>
                <h5>Login</h5>
                <form onSubmit={handleSubmit}>
                    <input className="form-control form-control-sm" type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username}/>
                    <input className="form-control form-control-sm" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
                    <button className="btn btn-outline-secondary btn-sm">Login</button>
                </form>
                New to this? <span>➤ </span><Link to='/signup'>Sign Up</Link>
            </div>
        )
    }

    return(
        <div>
            <Welcome form={returningUser()} />
        </div>
    )
}

export default Login