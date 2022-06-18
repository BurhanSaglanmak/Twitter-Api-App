import React, { useEffect, useState } from 'react'
import HashtagCard from './HashtagCard';
import ProfileCard from './ProfileCard'
import "./style.css"

function HashtagTweet({ data1,param,isTrue,setIsTrue,setIsTrue2,isTrue2 }) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [profile, setProfile] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://twitter154.p.rapidapi.com/${data1}`,
            params: param  ,
            headers: {
               // 'X-RapidAPI-Key': 'YOUR APİ KEY!!',
                'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
            }
        };
        if (data1!==""&& param!=="") {
            axios.request(options).then(function (response) {
                setIsLoading(false)
                //console.log(response.data.results);
               if (isTrue===true) {
                setData(response.data.results)            
                setIsTrue(false)
                setProfile([])
               }
                    
               if (isTrue2===true ) {
                setProfile(response.data)
                setIsTrue2(false)
                setData([])
               }
               
                    
                
            }).catch(function (error) {
                console.error(error);
            })
        }
        
    }, [data1,param,isTrue,isTrue2,setIsTrue,setIsTrue2])
    //console.log(hashtagData);
   // console.log(param);
    return (
        <div>
            {isLoading ? <div className='clock-loader'></div> :data?.map((item, index) => (
                <HashtagCard
                    key={index}
                    text={item.text}
                    creation_date={item.creation_date}
                    location={item.user.location}
                    name={item.user.name}
                    profile_pic_url={item.user.profile_pic_url}
                    index={index}
                    user_id={item.user.user_id}
                    username={item.user.username}
                />
            ))}
            {isLoading ? <div>Loading...</div> :profile?.map((item, index) => (
              <ProfileCard
                  key={index}
                  text={item.text}
                  creation_date={item.creation_date}
                  location={item.user.location}
                  name={item.user.name}
                  profile_pic_url={item.user.profile_pic_url}
                  index={index}
                  user_id={item.user.user_id}
                  username={item.user.username}
                  creation_date_born={item.user.creation_date}
              />
          ))}


        </div>
    )
}

export default HashtagTweet