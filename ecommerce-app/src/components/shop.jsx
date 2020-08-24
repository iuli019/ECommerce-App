import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, getProductsOnStock } from "../store/products";

function Shop() {
    const dispatch = useDispatch();
    const products = useSelector(getProductsOnStock);

    useEffect(() => {
        dispatch(loadProducts());
    }, []);


    return (
        <ul>
            {products.map((product) => (<li key={product._id}>{product.name}</li>))}
        </ul>)
}

export default Shop
