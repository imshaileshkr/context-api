import React, { useContext } from 'react'
import userContext from '../context/userContext.js'

function Profile() {
  const { user, password} =  useContext(userContext);
  return user? (
    <div className='mt-9 bg-blue-400 p-4'>
      <h2 className='font-bold text-md mb-2'>Welcome</h2>

      <p>username: {user}</p>
      <p>password: {password}</p>
    </div>
  ) : <div>Please Login...</div>
}

export default Profile