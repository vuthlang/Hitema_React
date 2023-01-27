import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom"
import Footer from './components/front/Footer'

function App() {

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default App
