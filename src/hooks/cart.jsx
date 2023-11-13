import { createContext, useContext, useState, useEffect } from "react";
import { cartToString } from "../utils/string.js";
import { useAuth } from "./auth.jsx";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);

    function loadCartFromBrowserCache() {
        const cartCache = localStorage.getItem("@foodexplorer:cart");

        if (cartCache) {
            return cartCache;
        }

        return null;
    };

    function getQuantity() {
        if (newItem.length === 0) {
            return 0;
        };

        handleLocalStorage();
        return newItem.length;
    };

    function showItem() {
        if (newItem.length === 0) {
            return 0;
        };

        return newItem;
    };

    function addItemToCart(item) {
        if (item && item.id && item.quantity) {
            setNewItem(prevItems => {
                const itemIndex = prevItems
                    .findIndex(prev => prev.id === item.id);

                if (itemIndex !== -1) {
                    return prevItems.map((prev, index) => {
                        if (index === itemIndex) {
                            return {
                                ...prev,
                                quantity: prev.quantity + item.quantity
                            };
                        } else {
                            return prev;
                        };
                    });
                } else {
                    return [...prevItems, item];
                };
            });
        };

        return;
    };

    function stringToCart(str) {
        let array = str.split(' ');

        for (let i = 0; i < array.length; i += 2) {
            addItemToCart(
                {
                    id: parseInt(array[i]),
                    quantity: parseInt(array[i + 1])
                }
            );
        };
    };

    function handleLocalStorage() {
        try {
            localStorage.setItem("@foodexplorer:cart", cartToString(newItem));
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível incluir item no carrinho.");
            };
        };

        return;
    };

    useEffect(() => {
        const cartCache = loadCartFromBrowserCache();

        if (cartCache && cartCache !== "") {
            setNewItem([]);
            stringToCart(cartCache);
        };

    }, []);

    return (
        <CartContext.Provider value={{
            addItemToCart,
            getQuantity,
            showItem
        }}
        >{children}</CartContext.Provider>
    );
};

function useCart() {
    const context = useContext(CartContext);

    return context;
};

export { CartProvider, useCart };
