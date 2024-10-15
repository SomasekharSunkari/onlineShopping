import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const deliveryFee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const updateQuanity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData)


    }
    const navigate = useNavigate();
    const addtoCart = (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size !");
            return;
        }
        // Create a deep clone of the current cart items
        let cartData = structuredClone(cartItems);

        // Check if the item exists in the cart
        if (!cartData[itemId]) {
            cartData[itemId] = {};  // Initialize the item if it doesn't exist
        }

        // Check if the size exists for the item, otherwise initialize it
        if (!cartData[itemId][size]) {
            cartData[itemId][size] = 0;  // Initialize the size if it doesn't exist
        }

        // Increment the quantity of the item size
        cartData[itemId][size] += 1;

        // Update the cart items state
        setCartItems(cartData);
    };
    const getCartCount = () => {
        let count = 0;
        for (let itemId in cartItems) {
            for (let size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        count += cartItems[itemId][size];


                    }
                }
                catch (err) {

                }
            }
        }
        return count;
    };

    const getCartAmount = () => {
        let total = 0;
        for (const items in cartItems) {
            const itemInfo = products.find((item) => item._id === items);
            for (const item in cartItems[items]) {
                try {

                    if (cartItems[items][item] > 0) {
                        total += itemInfo.price * cartItems[items][item]
                   }
                }
                catch (er) {
                    console.log(er.message)
                }
            }
        }
        return total;
    }
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    const value = {
        products, currency, deliveryFee, search, setSearch, showSearch, setShowSearch, cartItems, addtoCart, getCartCount, updateQuanity,getCartAmount,navigate
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>

}