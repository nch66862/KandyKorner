import { React, useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
            .then(getProducts)
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct, getProductTypes, productTypes
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}