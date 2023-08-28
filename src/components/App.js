
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  let [time,setTime] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setTime((prevState)=>prevState+1)
    }, 1000);
    return ()=>{
      clearInterval(interval);
    }
  },[])
  console.log(time)

  return (
    <div>
        {/* Do not remove the main div */}
        You've been on this page for {time} seconds.
    </div>
  )
}

export default App
