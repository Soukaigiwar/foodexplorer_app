import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import dark from "./styles/dark";
// import light from "./styles/light";

import { AuthProvider } from "./hooks/auth";

import { Routes } from "./routes";
import { CartProvider } from "./hooks/cart";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <AuthProvider>
                <CartProvider>
                    <Routes />
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
