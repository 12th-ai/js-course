import React, { useState } from 'react'
import Navbar from './Navbar';
function App() {


  const [name,setname]= useState('mihigo');

  const handlesubmit=()=>{
    setname('prince');
 
  }

  const [count , setcount ] = useState(0);

  const increment =()=>{  
    setcount(count + 1);
  }

  return (
    <div>
      <Navbar />
      <h1>hello world</h1>
      <h1>{name}</h1>

      <button onClick={handlesubmit}>click</button>
      <h1>count : {count}</h1>
      <button onClick={increment}>increment</button>  
    

    </div>
  )
}

export default App