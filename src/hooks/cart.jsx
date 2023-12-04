import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth.jsx";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);

    function loadCartFromBrowserCache() {
        const cartCache = localStorage.getItem("@foodexplorer:cart");

        if (cartCache) {
            return JSON.parse(cartCache);
        };

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
        if (item && item.dish_id && item.quantity) {
            setNewItem(prevItems => {
                const itemIndex = prevItems
                    .findIndex(prev => prev.dish_id === item.dish_id);

                if (itemIndex !== -1) {
                    return prevItems.map((prev, index) => {
                        if (index === itemIndex) {
                            return {
                                ...prev,
                                dish_id: item.dish_id,
                                title: item.title,
                                price: item.price,
                                quantity: prev.quantity + item.quantity,
                                image_title: item.image_title,
                                image_filename: item.image_filename
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

    function cacheToCart(str) {
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
        console.log("newItem:", newItem);
        try {
            localStorage.setItem("@foodexplorer:cart", JSON.stringify(newItem));
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
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
            console.log("aqui");
            setNewItem([]);
            //stringToCart(cartCache);
        };

    }, []);

    return (
        <CartContext.Provider value={{
            loadCartFromBrowserCache,
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
