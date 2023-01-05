import React from 'react'
import { useState } from 'react'
import Profile from './Profile';

import Data from '../Data.json'

export default function Login () {

const [databasePassword, setDatabasePassword] = useState(null)

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

    // get database password from get request Data.json
const getPassword = (email) => {
  const user = Data.find(user => user.email === email)
  setDatabasePassword(user.password)
  return user.password
}

const Authenticaiton = (password, databasePassword) => {
  if (password === databasePassword) {
      return (
          <div>
              <h1>Correct Password</h1>
          </div>
      )
   } else {
      return (
          <div>
              <h1>Incorrect Password</h1>
          </div>
      )
}
}
 
  return (
    <div>
        <h1>Login</h1>

        <form>
            <label className="email">Email</label>
            <input type="email" name="email" id="email" onChange={onChangeEmail}/>

            <label className="password">Password</label>
            <input type="password" name="password" id="password" onChange={onChangePassword}/>

            <button type="submit" onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}




