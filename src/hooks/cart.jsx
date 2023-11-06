import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [newItem, setNewItem] = useState([]);
    //const [cart, setCart] = useState(null);


    function readCartCache() {
        const cartCache = localStorage.getItem("@foodexplorer:cart");
        
        
        
        
        
        
        
        
        
        
        
        // todo: repair cache load and store










        if (cartCache) {
            //console.log(cartCache);
            //console.log("string to cart: ", stringToCart(cartCache));
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
        if (newItem.length === 0) {
            return 0;
        };

        return newItem;
    };

    function addItemToCart(item) {
        if (item && item.id && item.quantity) {
            if (newItem.length === 0) {
                setNewItem([{ id: item.id, quantity: item.quantity }]);
            } else {
                setNewItem(prevItems =>
                    [...prevItems, { id: item.id, quantity: item.quantity }]
                );
            };
        };

        return;
    }

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
        let tempArray = [];
        for (let i = 0; i < array.length; i += 2) {
            let tempObject = {};

            addItemToCart(
                {
                    id: parseInt(array[i]),
                    quantity: parseInt(array[i + 1])
                }
            )





            
        }
        
    }

    // function stringParaArray(str) {
    //     let array = str.split(' ');
    //     let arrayDeObjetos = [];
    //     for (let i = 0; i < array.length; i += 2) {
    //         let objeto = {};
    //         objeto[array[i]] = parseInt(array[i + 1]);
    //         arrayDeObjetos.push(objeto);
    //     }
    //     return arrayDeObjetos;
    // }
    
    

    // function stringToCart(str) {
    //     let array = str.split(' ');
    //     console.log(array.lenght);
    //     let newArray = [];
    //     for (let i = 0; i < array.length; i += 2) {
    //         // if (newItem.length > 0) {
    //         //     console.log('ja tinha item');
    //         // }
    //         addItemToCart({
    //             id: parseInt(array[i]),
    //             quantity: parseInt(array[i + 1])
    //         });
    //         // if (newItem ) {
    //             // setNewItem(prevItems =>
    //             //     [
    //             //         ...prevItems,
    //             //         {
    //             //             id: parseInt(array[i]),
    //             //             quantity: parseInt(array[i + 1])
    //             //         }
    //             //     ]);
    //             // newArray.push( {
    //             //     id: parseInt(array[i]),
    //             //     quantity: parseInt(array[i + 1])
    //             // });
    //         // };
            

    //         // setNewItem(prevItems =>
    //         //     [...prevItems, newArray]
    //         // );
        
    //     }
    // }

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


// async function resetCart() {
//     localStorage.removeItem(`@foodexplorer:cart`);
//     setData({});
// }

return (
    <CartContext.Provider value={{
        readCartCache,
        handleLocalStorage,
        addItemToCart,
        //resetCart,
        getQuantity,
        showItem
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
