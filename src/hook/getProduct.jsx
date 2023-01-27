import { useState, useEffect } from "react";
import axios from "axios"

export function getProduct() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}products.json`)
            .then(reponse => {
                const resultat = []
                for (const key in reponse.data) {
                    if (reponse.data[key]) resultat.push({ ...reponse.data[key], id: key })
                }
                setProducts(resultat)
            })
    }, [products.length])

    return [products, setProducts];
}