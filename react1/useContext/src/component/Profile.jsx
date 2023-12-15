import {useContext } from "react"
import UserContextt from "../context/userContext"

function Profile() {

    const {user} = useContext(UserContextt);
    
    if(!user)  return <div>please login</div>

    
    return <div>Welcome {user.username}</div>
}

export default Profile
