import { useState } from "react";
import UserContextt from "./userContext";

const UserContextProvider = ({children}) => {
    
      const [user,setuser] = useState(null)

    return (
        <UserContextt.Provider value={{user,setuser}}>
        {children}
        </UserContextt.Provider>
    )
}

export default UserContextProvider;



