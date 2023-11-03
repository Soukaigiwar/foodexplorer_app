import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState(null);


    async function handleCartCache() {
        const cart = localStorage.getItem("@foodexplorer:cart");
    }

    function getQuantity() {
        if (newItem === null) {
            return 0;
        } 
        
        return newItem.length;
    }


    function addItemToCart(item) {
        if (item && item.id && item.quantity) {
            if (newItem === null) {
                setNewItem([{id: item.id, quantity: item.quantity}]);
            } else {
                setNewItem(prevItems => [...prevItems, {id: item.id, quantity: item.quantity}]);
            }
        }
        return;
    }
    

    function localSt() {
        localStorage
            .setItem("@foodexplorer:cart", JSON.stringify(item.id, item.quantity));

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

    // useEffect(() => {
    //     setData(prevState => [...prevState, newItem])
    // }, [newItem])

    return (
        <CartContext.Provider value={{
            handleCartCache,
            addItemToCart,
            //resetCart,
            getQuantity
        }}
        >
            {children}
        </CartContext.Provider>
    )
}


function useCart() {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };
