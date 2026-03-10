import { createContext, useState } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setuser] = useState("")
    const [loading, setloading] = useState(true)

    return (
        <Authcontext.Provider value={{ user, setloading, setuser, loading }}>
            {children}
        </Authcontext.Provider>
    )
}