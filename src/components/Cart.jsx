import { useContext } from "react";
import { getProduct } from "../hook/getProduct";
import { AddToCart } from "./back/AddToCart";

const Cart = () => {

    const { cartItems } = useContext(AddToCart);
    return (
        <div className="cart">
            <div>
                <h1>Your items</h1>

            </div>

            <div className="cart">
            </div>

            <h2>Your cart is empty</h2>

            <div className="checkout">
                <button> Continue Shopping </button>
                <button> Checkout </button>
            </div>

        </div>);
}

export default Cart;