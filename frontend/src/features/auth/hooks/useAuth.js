import { loginuser, register, getMe, logout } from "../services/auth.api";
import { Authcontext, AuthProvider } from "../auth.context";
import { useContext, useEffect } from "react";


export const useAuth = () => {

    const context = useContext(Authcontext)

    const { user, setuser, loading, setloading } = context

    async function handleRegister({ username, email, password }) {
        setloading(true)
        const data = await register({ username, email, password })
        setuser(data.user)
        setloading(false)
    }

    async function handleLogin({ username, email, password }) {
        setloading(true)
        const data = await loginuser({ username, email, password })
        setuser(data.user)
        setloading(false)
    }

    async function handleGetme() {
        setloading(true)
        const data = await getMe()
        setuser(data.user)
        setloading(false)
    }

    useEffect(() => {
        handleGetme()
    }, [])

    async function handleLogout() {
        setloading(true)
        const data = await logout()
        setuser(null)
        setloading(false)
    }

    return ({
        user, loading, handleLogin, handleRegister, handleGetme, handleLogout
    })

}