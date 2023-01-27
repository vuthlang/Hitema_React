import { createContext, useEffect, useState } from "react";
import { getProduct } from "../../hook/getProduct";

export const AddToCart = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < getProduct().length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const AddToCartProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = getProduct().find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return total;
    };

    const addItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const deleteItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addItem,
        updateCartCount,
        deleteItem,
        getTotal,
        checkout,
    };

    return (
        <AddToCart.Provider value={contextValue}>{props.children}</AddToCart.Provider>
    )
}