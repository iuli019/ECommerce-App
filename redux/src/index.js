import configureStore from "./store/configureStore";
import { loadProducts, deleteProduct, updateProduct } from "./store/products";

const store = configureStore();

store.dispatch(loadProducts());

store.dispatch(deleteProduct("5f3d45d373c5b11b9ca9ad72"));

// store.dispatch(
//   updateProduct({
//     id: "5f3d45d373c5b11b9ca9ad72",
//     name: "Masina",
//     description: "Dacia",
//     price: 5,
//     numberInStock: 2,
//   })
// );
