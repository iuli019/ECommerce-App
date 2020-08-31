import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, getProducts, deleteProduct, addProduct, updateProduct } from "../store/products";
import MyVerticallyCenteredModal from "./modal"
import "./components.css"

function Admin() {
    const products = useSelector(getProducts);
    const dispatch = useDispatch();


    const [show, setShow] = useState(false);
    const [id, setId] = useState();



    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch, products]);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }

    const handleAddUpdate = async (product, id) => {
        console.log(product)
        console.log(id);
        if (id === 0) {
            dispatch(addProduct(product));
            setShow(false);
        }
        else {
            let productForDispatch = { ...product }
            productForDispatch._id = id;
            dispatch(updateProduct(productForDispatch))
            setShow(false);
        }
    }



    return <div className="d-flex  flex-column">
        <div className="d-flex  flex-row  justify-content-between align-items-start flex-wrap mt-3 mr-4 mb-3 ml-4 pl-5 pr-5">

            {products.map((product) => {
                return (<div key={product._id} className="card m-2 " style={{ width: "18rem" }}>

                    <img className="card-img-top image card-psize" src={product.imageUrl} alt="img" />

                    <div className="card-body d-flex  flex-column  justify-content-center">
                        <p className="card-text d-flex  justify-content-center" to={`/product/${product._id}`}>{product.name}</p>
                        <p className=" d-flex  justify-content-center">{`Price: ${product.price}$`}</p>
                        <button className="btn btn-danger mb-2" onClick={() => handleDelete(product._id)} >Delete</button>
                        <button className="btn btn-secondary" onClick={() => { setShow(true); setId(product._id) }} >Update</button>
                    </div>

                </div>)
            })
            }
            <MyVerticallyCenteredModal show={show} onClose={() => setShow(false)} onButton={(product) => handleAddUpdate(product, id)} />
        </div>
        <button className='btn btn-dark footer'
            onClick={() => { setId(0); setShow(true) }}>Add Product</button>
    </div>
}

export default Admin

