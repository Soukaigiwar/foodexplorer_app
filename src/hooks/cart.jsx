import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);

    function loadCartFromBrowserCache() {
        let cartCache = localStorage.getItem("@foodexplorer:cart");

        if (cartCache) {
            cartCache = JSON.parse(cartCache);

            if (cartCache.length > 0) {
                return cartCache;
            } else { 
                return;
            }
        }

        return cartCache;
    }

    function getQuantity() {
        if (handleLocalStorage() && newItem && newItem.length === 0) {
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

    function addItemToCart(item, orderStatus = "processing") {
        console.log("item to add dish_id", item.dish_id);
        
        
        console.log("orderStatus:", orderStatus);

        const hasItemAndProcessingOrder = localStorage.getItem("@foodexplorer:status");
        if (hasItemAndProcessingOrder && hasItemAndProcessingOrder !== "processing") {
            clearCart();
        }

        if (item && item.dish_id && item.quantity) {

            let orderStatusFromCache = localStorage.getItem("@foodexplorer:status");

            if (!orderStatusFromCache) {
                localStorage.setItem("@foodexplorer:status", orderStatus);
            }
            setNewItem(prevItems => {
                const itemIndex = prevItems
                    .findIndex(prev => prev.dish_id === item.dish_id);
                console.log("item no hook cart:", item);

                if (itemIndex !== -1) {
                    return prevItems.map((prev, index) => {
                        if (index === itemIndex) {
                            const newItem = {
                                ...prev,
                                dish_id: item.dish_id,
                                title: item.title,
                                price: item.price,
                                quantity: prev.quantity + item.quantity,
                                image_title: item.image_title,
                                image_filename: item.image_filename
                            };


                            return newItem;
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

    function clearCart() {
        setNewItem([]);
    }

    function deleteItem(dish_id) {
        if (newItem.length === 1) {
            setNewItem([]);
            localStorage.removeItem("@foodexplorer:cart");

            return;
        }

        setNewItem(newItem.filter(item => item.dish_id !== dish_id));
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
                alert(error.response.data.message);
            } else {
                alert("Não foi possível incluir item no carrinho.");
            }
        }

        return;
    }

    useEffect(() => {
        const cartCache = loadCartFromBrowserCache();
        const statusCache = localStorage.getItem("@foodexplorer:status");
        if (!statusCache) {
            // localStorage.setItem("@foodexplorer:status", "processing");
        }

        if (cartCache && cartCache !== "") {
            setNewItem([]);
            cacheToCart([cartCache]);
        }

    }, []);

    return (
        <CartContext.Provider value={{
            loadCartFromBrowserCache,
            addItemToCart,
            deleteItem,
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
