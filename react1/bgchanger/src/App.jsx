import { useState } from 'react'
import './index.css'

function App() {
   const [count, setCount] = useState('black')
   const body = document.querySelector('body');
   body.style.backgroundColor = `${count}`;

  return (
    <>
     <div className='box'>
      <div onClick={()=> setCount('red')} className='a red'>red</div>
      <div onClick={()=> setCount('greenyellow')} className='a green'>green</div>
      <div onClick={()=> setCount('rgb(116, 116, 224)')} className='a blue'>blue</div>
      <div onClick={()=> setCount('gray')} className='a gray'>gray</div>
      <div onClick={()=> setCount('yellow')} className='a yellow'>yellow</div>
      <div onClick={()=> setCount('pink')} className='a pink'>pink</div>
      <div onClick={()=> setCount('purple')} className='a purple'>purple</div>
      <div onClick={()=> setCount('white')} className='a white'>while</div>
     </div>
    </>
  )
}

export default App
