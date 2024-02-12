import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [itemQtd, setItemQtd] = useState(0);
    const [orderStatus, setOrderStatus] = useState("");

    const getOrderStatus = () => orderStatus;

    const setNewOrderStatus = (status) => setOrderStatus(status);

    const getQuantity = () => itemQtd;

    const getCart = () => cart;

    const showItem = () => {
        if (cart.length === 0) {
            return 0;
        }

        return cart;
    };

    const getTotal = () =>
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const clearCart = () => {
        setCart([]);
        setItemQtd(0);
    };

    async function addItemToCart(item) {
        const orderStatus = getOrderStatus();
        if (orderStatus !== "processing") {
            clearCart();
            setItemQtd(1);
            setNewOrderStatus("processing");
            localStorage.setItem("@foodexplorer:paymentStatus", "processing");
        }

        if (item && item.dish_id) {
            console.log("entrou para add item");

            setCart((prevItems) => {
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

    function removeItem(dish_id) {
        const newCart = cart.filter((item) => item.dish_id !== dish_id);
        setCart(newCart);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get("/orders/last");
                console.log("cart|useEffect|data:", data);

                if (
                    data &&
                    data.items &&
                    Object.keys(data.items).length !== 0 &&
                    (data.status === "processing")
                ) {
                    console.log("if");
                    setCart(data.items);
                    setItemQtd(data.items.length);
                    setOrderStatus(data.status);
                    console.log(
                        "cart|useEffect|data.items.length:",
                        data.items.length
                    );
                } else if (
                    data &&
                    data.items &&
                    Object.keys(data.items).length !== 0 &&
                    (data.status === "pending" || "paid")
                ) {
                    setCart(data.items);
                    setItemQtd(data.items.length);
                    setOrderStatus(data.status);
                    console.log("else if", data.status);
                } else {
                    console.log("else");
                    setCart([]);
                }
            } catch (error) {
                //console.log(error.message);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        setItemQtd(cart.length);
    }, [cart]);

    useEffect(() => {
        console.log(itemQtd);
    }, [itemQtd]);

    return (
        <CartContext.Provider
            value={{
                addItemToCart,
                clearCart,
                removeItem,
                showItem,
                getQuantity,
                getCart,
                getOrderStatus,
                setNewOrderStatus,
                getTotal,
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
