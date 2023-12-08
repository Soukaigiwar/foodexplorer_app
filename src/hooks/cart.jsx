import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);

    function loadCartFromBrowserCache() {
        const cartCache = JSON.parse(localStorage.getItem("@foodexplorer:cart"));

        if (!cartCache)
            return null;

        return cartCache;
    }

    function getQuantity() {
        if (newItem.length === 0) {
            return 0;
        }

        handleLocalStorage();
        return newItem.length;
    }

    function showItem() {
        if (newItem.length === 0) {
            return 0;
        }

        return newItem;
    }

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
                        }
                    });
                } else {
                    return [...prevItems, item];
                }
            });
        }

        return;
    }

    function cacheToCart(items) {
        items.map((item) => {
            setNewItem(...items, item);
        });
    }

    function handleLocalStorage() {
        try {
            localStorage.setItem("@foodexplorer:cart", JSON.stringify(newItem));
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                alert(error.response.data.message);
            } else {
                alert("Não foi possível incluir item no carrinho.");
            }
        }

        return;
    }

    useEffect(() => {
        const cartCache = loadCartFromBrowserCache();

        if (cartCache && cartCache !== "") {
            setNewItem([]);
            cacheToCart([cartCache]);
        }

    }, []);

    return (
        <CartContext.Provider value={{
            loadCartFromBrowserCache,
            addItemToCart,
            getQuantity,
            showItem,
        }}
        >{children}</CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };
