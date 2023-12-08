import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <>
    <div>
      <h1>Custom app </h1>
    </div>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <App/>  {/* you can write as App() */}
    <Myapp/>    {/* you can write as Myapp() */}
    ele
    </React.StrictMode>,
)

// const ele = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//    ele
// )

// const user = "ajay";
// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'click visit google'
//    user
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement
// )
    