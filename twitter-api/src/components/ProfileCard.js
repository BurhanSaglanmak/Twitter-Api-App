import React from 'react'
import "./style.css"

function ProfileCard({ text, creation_date, location, name, profile_pic_url, user_id, username,creation_date_born }) {
    return (
        <div className='allcard'>

        <div >
            <img src={profile_pic_url} className="img" alt="..." />
            <div >
                <h2 >{name}</h2>
                <h4 className='text' >{text}</h4>
                <p>Atıldığı Tarih: {creation_date} / Konum: {location} </p>
                <p>User Name: {username} / User ID: {user_id} </p>
                <p>Birth: {creation_date_born} </p>
            </div>
        </div>
        </div>

    )
}

export default ProfileCard