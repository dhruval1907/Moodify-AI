import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
// import Feed from "./features/posts/pages/Feed"
// import Createpost from "./features/posts/pages/Createpost"


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hey this is home page !</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes