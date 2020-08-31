import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsOnStock, loadProducts, updateProduct } from "../store/products";
import { toast } from "react-toastify";
import "./components.css"

function ProductPage(props) {
    const products = useSelector(getProductsOnStock);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    const product = products.filter(product => product._id === props.match.params.id);
    const productForDisplay = { ...product[0] };
    console.log(productForDisplay);

    const addToCart = (product) => {
        if (product.numberInStock > 0) {
            const productAdded = { ...product };
            productAdded.numberForCart = 1;
            productAdded.inCart = true;
            dispatch(updateProduct(productAdded));
            toast(`${product.name} added to cart!`)
        }
    }

    return (
        <section className="d-flex  flex-row  justify-content-around flex-wrap m-3">
            <div className="d-flex flex-column mb-4">

                <img className="image-size justify-content-start" src={productForDisplay.imageUrl} alt='img' />


            </div>
            <div className="d-flex flex-column  justify-content-center ">

                <h1 className="align-self-center ">{productForDisplay.name}</h1>

                <span className="align-self-center">{productForDisplay.description}</span>
                <br />
                <h4 className="align-self-center ">{`Price: ${productForDisplay.price}$`}</h4>
                <br />
                <button className="btn btn-danger" onClick={() => addToCart(productForDisplay)}>Add to cart</button>

            </div>
        </section>


    )
}

export default ProductPage;