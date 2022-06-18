import React, { useState } from 'react'
import "./style.css"
function ProfileName({setData,setParam,setIsTrue2}) {
  const[value,setValue]=useState("")
  function change(e){
    setValue(e.target.value)
  }
  function submit(e){
    e.preventDefault()
    setData("user/tweets")
    setParam({username: `${value}`, limit: '100'})
    setValue("")
    setIsTrue2(true)

  }
  return (
    <form onSubmit={submit} className="group">
        <input value={value} onChange={change} type="text" required/>
        <span class="highlight"></span>
      <span class="bar"></span>
      <label>isim giriniz...(100 tweet)</label>
    </form>
  )

  }
export default ProfileName