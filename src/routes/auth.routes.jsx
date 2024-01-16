import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
// import { Teste } from "../pages/Teste";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            {/* <Route path="/teste" element={<Teste />} /> */}
        </Routes>
    );
}
