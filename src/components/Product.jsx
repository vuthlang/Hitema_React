import React, { useContext } from "react";
import { AddToCart } from "./back/AddToCart";
import { getProduct } from "../hook/getProduct";

const Product = () => {

    const { addToCart, cartItems } = useContext(AddToCart);
    const [products] = getProduct();

    const cartItemCount = cartItems[products.id];

    return (<>

        <div>
            <center>
                <h1 style={{ color: 'white', margin: '50px' }}>Products</h1>
            </center>
            <div className="row" style={{ marginLeft: '80px', marginRight: '80px' }}>
                {products.map(product => {
                    return <div className="col-sm-3 mb-4" key={product.id}>
                        <div className="card bg-transparent" style={{ color: '#D1E8E2' }} >
                            <img className="card-img-top" src={product.src} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.text}</p>
                                <div className="row">
                                    <div className="col-sm">
                                        <button type="submit" onClick={() => addToCart(product.id)} style={{ backgroundColor: 'transparent', minWidth: '100px', borderRadius: '14px', color: 'white' }}>
                                            Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                                        </button>
                                    </div>
                                    <div className="col-sm">
                                        <p>{product.price}€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>);
}

export default Product;