import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import App from './App';
import Product from "./components/Product";
import MentionLegale from "./components/front/MentionLegale";
import Cart from "./components/Cart";
import { AddToCart, AddToCartProvider } from "./components/back/AddToCart";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AddToCartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Product />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="mention-legale" element={<MentionLegale />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AddToCartProvider>
    </React.StrictMode>
)
