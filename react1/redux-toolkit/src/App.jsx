import Addtodo from './component/Addtodo';
import Todos from './component/Todos';

function App() {

  return (
    <div className='text-center p-4 '>
    <h1>redux</h1>
    <Addtodo/>
    <Todos/>
    </div>
  )
}

export default App
