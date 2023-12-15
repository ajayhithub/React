import { useState, useContext } from "react"
import UserContextt from "../context/userContext"
function Login() {

     const [username,setusername] = useState('');
     const [password,setpassword] = useState('');
     const {setuser} = useContext(UserContextt)
     const submit = (e)=>{
         e.preventDefault();
         setuser({username,password})
     }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} placeholder="user"/>
      <input type="text" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="password"/>
      <button onClick={submit}>submit</button>
    </div>
  )
}

export default Login
