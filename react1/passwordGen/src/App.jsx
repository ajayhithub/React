import { useState,useCallback,useEffect,useRef } from "react";
import "./index.css";

function App() {
  const [len, setlen] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [pass, setpass] = useState("");
   
  // useRef 
  const passwordRef = useRef(null);
   
  const passGen = useCallback(()=>{
  let password = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
   if(num) str += "0123456789" 
   if(char) str += "!@#$%^&*()-=`~"
   
   for(let i=1;i<=len;i++)
   {
      let char = Math.floor(Math.random()*str.length+1)
      password  += str.charAt(char)
   }
    setpass(password); 
  }, [len,num,char,setpass]);
 
  const copyPasswordToClipboard = useCallback(()=>{
       passwordRef.current?.select();
     //  passwordRef.current?.setSelectionRange(0,4);   
       window.navigator.clipboard.writeText(pass);
  },[pass])

useEffect(()=>{
    passGen();
},[len,num,char,setpass,passGen]);

  return (    
    <>
         <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlen(e.target.value)}}
          />
          <label>Length: {len}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setnum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  );
}

export default App;
