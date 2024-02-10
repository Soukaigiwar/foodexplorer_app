import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);
    const [itemQtd, setItemQtd] = useState(0);
    const [orderStatus, setOrderStatus] = useState("");

    const getOrderStatus = () => orderStatus;

    const getQuantity = () => itemQtd;

    const showItem = () => {
        if (newItem.length === 0) {
            return 0;
        }

        return newItem;
    };

    const clearCart = () => setNewItem([]);

    function addItemToCart(item) {
        if (item && item.dish_id && item.quantity) {
            setNewItem((prevItems) => {
                const itemIndex = prevItems.findIndex(
                    (prev) => prev.dish_id === item.dish_id
                );

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
                                image_filename: item.image_filename,
                            };

                            // console.log(newItem);

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

    function deleteItem() {
        if (newItem.length === 1) {
            setNewItem([]);

            return;
        }
    }

    useEffect(async () => {
        async function fetchData() {
            try {
                const { data } = await api.get("/orders/last");
                console.log(data);
                console.log("cart|useEffect|data.items:", data.items);

                if (Object.keys(data.items).length !== 0) {
                    console.log(
                        "cart|useEffect|data.items.length:",
                        data.items.length
                    );
                    setItemQtd(data.items.length);
                    setOrderStatus(data.status);
                }

                // return data;
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <CartContext.Provider
            value={{
                addItemToCart,
                clearCart,
                deleteItem,
                getQuantity,
                showItem,
                getOrderStatus,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };
