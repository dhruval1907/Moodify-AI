import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
import Protected from "./features/auth/components/protected"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={
                        <Protected>
                            <h1>Hey this is home page !</h1>
                        </Protected>
                    }
                />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes