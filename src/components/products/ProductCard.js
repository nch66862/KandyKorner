export const ProductCard = ({ productObj, productTypeObj }) => {
    return (
        <section>
            <p>{productObj.name}</p>
            <p>Category: {productTypeObj.type}</p>
            <p>${productObj.price} /unit</p>
        </section>
    )
}