import { useState } from "react";

function App() {

   let [count,setcount] = useState(15);
   const addvalue = ()=>{
    //  count = count+1;
    //  setcount(count);
      if(count<30)
      setcount(count+1);   
   }
   const revomevalue = ()=>{
    if(count>0)
    setcount(count-1);
   }
  return (
    <>
     <h1>chai or react || count between 0 to 30</h1>

     <h2>counter {count}</h2>
     <button onClick={addvalue}>add value</button>
     <br/>
     <button onClick={revomevalue}>remove value</button>
    </>
  )
}

export default App
