import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {username}=useParams();
  return (
    <div
    className='bg-slate-800 text-white h-20 flex justify-center items-center text-2xl'
    >User: {username}</div>
  )
}

export default User