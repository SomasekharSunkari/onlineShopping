import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const deliveryFee = 10;
    const [search, setSearch] = useState("");
    const backend_url = "http://localhost:4001"
    const [token, setToken] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
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
    const getCartItems = async () => {

        try {
            console.log("TOken is")
            console.log(token)
            console.log("TOken is")

            const cartData1 = await axios.post(backend_url + "/api/cart/getCart", {}, { headers: { token } },);
            console.log("Indied get Carts")
            console.log(cartData1)
            console.log("Indied get Carts")

        }
        catch (err) {
            console.log(err.message)

        }
    }

    const getProducts = async () => {

        try {
            const response = await axios.get(backend_url + "/api/product/listproducts");
            if (response.data.success) {
                // console.log(response.)
                setProducts(response.data.products)
            }
            else {
                console.log("error happend in getting products !")
                toast.error("Error in Listing products !")
            }
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)

        }
    }
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
                    console.log("Error happend at cart Calculations")
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
        getProducts();
    }, [])
    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        console.log(token)

    }, []);
    useEffect(() => {
        getCartItems()
    }, [cartItems]);
    const value = {
        products, currency, deliveryFee, search, setSearch, showSearch, setShowSearch, cartItems, addtoCart, getCartCount, updateQuanity, getCartAmount, navigate, backend_url, setCartItems
        , token, setToken
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>

}