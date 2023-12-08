import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { OrderResume } from "../pages/OrderResume";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes/:id" element={<Dish />} />
            <Route path="/order" element={<OrderResume />} />
        </Routes>
    );
}