import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([loadCartFromBrowserCache()]);

    function loadCartFromBrowserCache() {
        const cartCache = localStorage.getItem("@foodexplorer:cart");
        
        if (cartCache && cartCache !== "") {
            stringToCart(cartCache);
            return cartCache;
        };


    };

    function getQuantity() {
        if (newItem.length === 0) {
            return 0;
        };

        handleLocalStorage();
        return newItem.length;
    };

    function showItem() {
        if (newItem.length === 0 || !newItem) {
            console.log("aqui");
            return 0;
        };

        return newItem;
    };

    function addItemToCart(item) {
        if (item && item.id && item.quantity) {
            setNewItem(prevItems => {
                const itemIndex = prevItems.findIndex(prev => prev.id === item.id);

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


    function cartToString() {
        if (newItem) {
            let result = "";
            for (let i = 0; i < newItem.length; i++) {
                for (let key in newItem[i]) {
                    result += newItem[i][key] + ' ';
                };
            };
            return result.trim();
        };

        return "";
    };


    function stringToCart(str) {
        let array = str.split(' ');

        for (let i = 0; i < array.length; i += 2) {
            addItemToCart(
                {
                    id: parseInt(array[i]),
                    quantity: parseInt(array[i + 1])
                }
            )
        }
    }

    function handleLocalStorage() {
        try {
            localStorage.setItem("@foodexplorer:cart", cartToString());
        } catch {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível incluir item no carrinho.");
            };
        };

        return;
    };



    async function resetCart() {
        setNewItem([]);
    }

    return (
        <CartContext.Provider value={{
            loadCartFromBrowserCache,
            handleLocalStorage,
            addItemToCart,
            stringToCart,
            getQuantity,
            showItem
        }}
        >{children}</CartContext.Provider>
    );
};



function useCart() {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };
