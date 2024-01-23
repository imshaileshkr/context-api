import React, { useState, useContext } from "react";
import userContext from '../context/userContext.js'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const {setUser, setPassword} = useContext(userContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(username)
    setPassword(password)
  };
  return (
    <div className=" bg-blue-400 p-4">
      <h1 className="mb-8 font-bold text-xl">Login</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <input className="m-2 p-2"
        required
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
         className="m-2 p-2"
          type="text"
          name="password"
          id="password"
          placeholder="password"
          value={password}
        required
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="m-2">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default Login;
