import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [data, setData] = useState({})
    
    async function handleCartCache() {
        const cart = localStorage.getItem("@foodexplorer:cart");
        
        if (cart) setData({ cart });
    }

    async function addItemToCart({ id, quantity }) {
        if (data) {
            console.log(data);
        }
        try {
            localStorage
                .setItem("@foodexplorer:cart", JSON.stringify(id, quantity));

            setData({ cart });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível incluir item no carrinho.");
            };
        };
    };

    async function resetCart() {
        localStorage.removeItem(`@foodexplorer:cart`);
        setData({});
    }

    return (
        <CartContext.Provider value={{
            handleCartCache,
            addItemToCart,
            resetCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
