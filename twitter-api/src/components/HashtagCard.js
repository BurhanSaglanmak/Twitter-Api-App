import React from 'react'
import "./style.css"

function HashtagCard({ text, creation_date, location, name, profile_pic_url, user_id, username }) {
    return (
        <div className='allcard'>

        <div >
            <img src={profile_pic_url} className="img" alt="..." />
            <div >
                <h2 >{name}</h2>
                <h4 className='text' >{text}</h4>
                <p>Atıldığı Tarih: {creation_date} / Konum: {location} </p>
                <p>User Name: {username} / User ID: {user_id} </p>
            </div>
        </div>
        </div>

    )
}

export default HashtagCard