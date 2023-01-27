import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (<>
        <div>
            <nav className="navbar navbar-expand navbar-dark container" align="center">
                <span className="navbar-brand fs-2">SHOP</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">CART</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className="nav-link">PRODUCTS</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>);
}

export default Navbar;