import { useState } from "react";
import userContext from "./userContext"
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    return (
        <userContext.Provider value={{user, setUser, password, setPassword}}>
        {children}
        </userContext.Provider>
    )

}
export default UserContextProvider;