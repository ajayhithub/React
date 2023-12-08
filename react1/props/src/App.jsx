import './App.css'
import Card from './component/Card'
function App() {
 
  const obj = {
    name:"dixit",
    email:"dixit@gmail.com"
  }
  const arr = ["dixit","dixit@gmail.com"]
  return (
    <>
     <Card objdata={obj} arrdata={arr}/>
    </>
  )
}

export default App
