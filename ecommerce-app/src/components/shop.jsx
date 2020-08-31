import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, getProducts, updateProduct } from "../store/products";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./components.css"
// import { loadUsers, getUsers } from "../store/users";

function Shop() {
    const products = useSelector(getProducts);
    // const users = useSelector(getUsers);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadProducts());
        // dispatch(loadUsers());
    }, [dispatch, products]);

    const addToCart = (product) => {
        if (product.numberInStock > 0) {
            const productAdded = { ...product };
            productAdded.numberForCart = 1;
            productAdded.inCart = true;
            dispatch(updateProduct(productAdded));
            toast(`${product.name} added to cart!`)
        }
        else toast("Product unavailable")
    }


    return (

        <div className="d-flex  flex-row  justify-content-between align-items-start flex-wrap mt-3 mr-4 ml-4 pl-5 pr-5">

            {products.map((product) => {
                return (<div key={product._id} className="card m-2 " style={{ width: "18rem" }}>

                    <img className="card-img-top image card-psize" src={product.imageUrl} alt="img" />

                    <div className="card-body d-flex  flex-column  justify-content-center">
                        <Link className="card-text d-flex  justify-content-center" to={`/product/${product._id}`}>{product.name}</Link>
                        <p className=" d-flex  justify-content-center">{`Price: ${product.price}$`}</p>
                        <button className="btn btn-danger" onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                </div>)
            })
            }

        </div>

    )
}

export default Shop
