import React, { useState } from 'react'

function Github() {

    const [data,setData]=useState({})
    fetch('https://api.github.com/users/sarbajits')
    .then((res)=>res.json())
    .then(data=>{
        setData(data)
    })
  return (
    <div className='h-full-20'>
        <h1>Github Information</h1>
        <div>
            <img
            className="h-20" src={data.avatar_url} alt="" />
        </div>
    </div>
  )
}

export default Github