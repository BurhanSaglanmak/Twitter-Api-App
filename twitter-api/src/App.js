
import { useState } from 'react';
import './App.css';
import HashtagInput from './components/HashtagInput';
import HashtagTweet from './components/HashtagTweet';
import ProfileName from './components/ProfileName';

function App() {
  const[data,setData]=useState("")
  const[param,setParam]=useState("")
  const[isTrue,setIsTrue]=useState(false)
  const[isTrue2,setIsTrue2]=useState(false)
  return (
    <div className="App">
      <div className='hashtag'>
      <h2 className='hashtag1'>#</h2>
      <HashtagInput setIsTrue={setIsTrue} setParam={setParam} setData={setData}    />
      <ProfileName setIsTrue2={setIsTrue2} setParam={setParam} setData={setData}  />
      </div>
      <HashtagTweet isTrue2={isTrue2} setIsTrue2={setIsTrue2} setIsTrue={setIsTrue} isTrue={isTrue} param={param} data1={data}  />
      
    </div>
  );
}

export default App;
