import React, { useState } from 'react'
import "./style.css"
function HashtagInput({setData,setParam,setIsTrue}) {
    const[value,setValue]=useState("")
    function change(e){
        setValue(e.target.value)

    }
    function submit(e){
        e.preventDefault()
        setValue("")
        setData("search/search")
        setParam({query: `#${value}`, limit: '20', start_date: '2020-01-01', language: 'tr'})
        setIsTrue(true)

    }
  return (
    <form onSubmit={submit} className="group">
        <input value={value} onChange={change}  type="text" required/>
        <span class="highlight"></span>
      <span class="bar"></span>
      <label>hashtag giriniz giriniz..</label>
    </form>
  )
}

export default HashtagInput