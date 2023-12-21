import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { OrderResume } from "../pages/OrderResume";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes/:id" element={<Dish />} />
            <Route path="/add_new_dish" element={<NewDish />} />
            <Route path="/order" element={<OrderResume />} />
        </Routes>
    );
}