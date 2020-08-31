import { getProductFromCart, loadProducts, updateProduct } from "../store/products";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react"
import { toast } from "react-toastify";
import "./components.css"

function Cart() {


    const productsFromCart = useSelector(getProductFromCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch, productsFromCart]);



    const handleAdd = (product) => {
        if (product.numberForCart < product.numberInStock) {
            const changedProduct = { ...product }
            changedProduct.numberForCart++;
            dispatch(updateProduct(changedProduct));
        }

        else toast("Insufficient stock!");
    }
    const handleMinus = (product) => {
        if (product.numberForCart > 1) {
            const changedProduct = { ...product }
            changedProduct.numberForCart--;
            dispatch(updateProduct(changedProduct));
        }
    }
    const handleDelete = (product) => {
        const changedProduct = { ...product }
        changedProduct.inCart = false;
        dispatch(updateProduct(changedProduct));

    }


    const total = () => {
        let x = 0;

        for (let i = 0; i < productsFromCart.length; i++) {
            x = x + (productsFromCart[i].price * productsFromCart[i].numberForCart);
        }
        return x;

    }

    const checkOut = () => {
        if (localStorage.getItem("token") != null)
            productsFromCart.map(product => {
                const changedProduct = { ...product }
                changedProduct.numberInStock = product.numberInStock - product.numberForCart;
                changedProduct.inCart = false;
                dispatch(updateProduct(changedProduct));

            })
        else window.location = "/login";;
    }


    return (
        <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-row align-items-start">

                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Number</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>

                    </thead>

                    {
                        productsFromCart.map(product => (

                            <tbody key={product._id}>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td className="d-flex flex-row justify-content-start">


                                        <button className="btn" onClick={() => handleMinus(product)} >
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </button>

                                        <input className="text input-size" value={product.numberForCart} />
                                        <button className="btn" onClick={() => handleAdd(product)}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>


                                    </td>
                                    <td>{product.numberForCart * product.price}</td>
                                    <td onClick={() => handleDelete(product)}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></td>
                                </tr>
                            </tbody>
                        )
                        )
                    }

                </table>
            </div>
            <br />

            <div className="d-flex flex-column justify-content-end footer">
                <button className='btn btn-dark '>{`Total: ${total()}`}</button>
                <button className='btn btn-danger ' onClick={checkOut}>Check Out</button>
            </div>
        </div>




    )

}
export default Cart;

// plus and minus functions;