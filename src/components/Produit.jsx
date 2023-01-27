import { useState } from "react";
import Panier from "./Panier";

const Produit = ({ src, title, text, price, link }) => {

    const [data, setData] = useState('');

    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }

    return (<>
        <div className="col-sm-3 mb-4">
            <div className="card bg-transparent" style={{ color: '#D1E8E2' }} >
                <img className="card-img-top" src={src} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Panier parentToChild={data} />
                    <button type="submit" onClick={() => parentToChild()} style={{ border: 'none', backgroundColor: 'transparent' }}>
                        Add to cart
                    </button>
                    <p>{price}</p>
                </div>
                <a href={link} className="card-link">Description</a>
            </div>
        </div>
    </>);
}

export default Produit;