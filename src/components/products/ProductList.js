import { useContext, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => {
    const { products, getProducts, getProductTypes, productTypes } = useContext(ProductContext)

    useEffect(() => {
        getProductTypes()
            .then(getProducts)
    }, [])

    return (
        <section className="products">
            <h3>Products</h3>
            {products.map(product => {
                const matchingType = productTypes.find(productType => productType.id === product.productTypeId)
                return <ProductCard key={product.id} productObj={product} productTypeObj={matchingType}></ProductCard>
            })}
        </section>
    )
}