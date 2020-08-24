import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "products",
  initialState: { list: [], loading: false, lastFetch: null },
  reducers: {
    productsRequestFailed: (products, action) => {
      products.loading = false;
    },
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
      products.lastFetch = Date.now();
    },

    productAdded: (products, action) => {
      products.list.push(action.payload);
    },

    productDeleted: (products, action) => {
      const index = products.list.findIndex(
        (product) => product._id === action.payload.id
      );
      delete products.list[index];
    },

    productUpdated: (products, action) => {
      const index = products.list.findIndex(
        (product) => product._id === action.payload.id
      );
      const updatedProduct = action.payload;

      products.list[index] = updatedProduct;
    },
  },
});

export const {
  productAdded,
  productDeleted,
  productUpdated,
  productsReceived,
  productsRequested,
  productsRequestFailed,
} = slice.actions;
export default slice.reducer;

// action creators
const url = "/products";

export const loadProducts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.products;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const addProduct = (product) =>
  apiCallBegan({
    url: url + "/add",
    method: "post",
    data: product,
    onSuccess: productAdded.type,
  });

//command resolvedBug:event
export const deleteProduct = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: productDeleted.type,
  });

export const updateProduct = (product) =>
  apiCallBegan({
    url: url + "/update/" + product.id,
    method: "post",
    onSuccess: productUpdated.type,
  });

//selector
export const getProductsOnStock = createSelector(
  (state) => state.entities.products,
  (products) => products.filter((product) => product.numberInStock != 0)
);
