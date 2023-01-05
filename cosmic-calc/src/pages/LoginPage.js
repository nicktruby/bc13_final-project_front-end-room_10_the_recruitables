import React from 'react'
import { useState } from 'react'
import Profile from './profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import data from './Data.json'

export default function Login () {

const [password, setPassword] = useState('')

const [payload, setPayload] = useState({
    email: null,
    password: null,
  });

  function onChangeEmail(e) {
    let text = e.target.value;
    setPayload({ ...payload, email: text });
    console.log(text);
  }

  function onChangePassword(e) {
    let text = e.target.value;
    setPayload({ ...payload, password: text });
    console.log(text);
  }

    function handleClick(e) {   
        e.preventDefault()
        const databasePassword = getPassword(payload.userName)
        Authenticaiton(payload.password, databasePassword)
    }
 
const LoginForm = () => {
  return (
    <div>
        <h1>Login</h1>

        <form>
            <label className="email">Email</label>
            <input type="email" name="email" id="email" onChange={onChangeEmail}/>

            <label className="password">Password</label>
            <input type="password" name="password" id="password" onChange={onChangePassword}/>

            <button type="submit" handleClick={handleClick}>Login</button>
        </form>
    </div>
  )
}


// get database password from get request Data.json
async function getPassword (email) {
    const response = await fetch('http://localhost:3000/Data.json')
    const data = await response.json()
    const databasePassword = data.find((item) => item.email === email)
    return databasePassword
}


const Authenticaiton = (password, databasePassword) => {
    if (password === databasePassword) {
        return (
             <Profile />
        )
     } else {
        return (
            <div>
                <h1>Incorrect Password</h1>
            </div>
        )
}
}
}

