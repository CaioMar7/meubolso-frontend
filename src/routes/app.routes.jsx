import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/SignIn"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
    )
}