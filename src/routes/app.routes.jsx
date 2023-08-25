import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Dashboard } from "../pages/Dashboard"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}