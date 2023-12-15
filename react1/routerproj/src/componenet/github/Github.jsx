//import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom"
   
export default function Github() {
 
  const user = useLoaderData();
  
// const [user,setuser] = useState([])

// useEffect(()=>{
//     fetch('https://api.github.com/users/ajayhithub')
//     .then((res)=> res.json())
//     .then((data)=> { 
//       setuser(data);
//      })

// },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> 
    Github followers:  {user.followers}
    <img src={user.avatar_url} alt="git pic" width={300} />
    </div>
  )
}


export const githubinfo = async () =>{
      
 const respone = await fetch('https://api.github.com/users/ajayhithub')

   return respone.json();
}

