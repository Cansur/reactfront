import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://jsonplaceholder.typicode.com/photos'
    }).then(response => setPosts(response.data))
  },[]);
  
  return (
    <div>
      <ul>
        {posts.map((item,index)=>
        <li key={index}>
          <div>{item.title}</div>
          <div><img src={item.thumbnailUrl}/></div>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
