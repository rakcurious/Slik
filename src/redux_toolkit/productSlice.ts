import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Collection, Prods, collections } from "../index";

interface ProductState {
  products: Prods[];
  collections: Collection[];
  likes: any[];
}

const initialState: ProductState = {
  products: [],
  collections: collections,
  likes: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<any>) => {
      const { $id, ...updatedData } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.$id === $id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          ...updatedData,
        };
      }
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (product) => product.$id !== action.payload
      );
    },
    getProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    getLikes: (state, action: PayloadAction<any>) => {
      state.likes = action.payload;
    },
    updateLike: (state, action: PayloadAction<any>) => {
      const { $id, wishlist } = action.payload;
      const likeIndex = state.likes.findIndex(
        (product) => product.$id === $id
      );
      if (likeIndex !== -1) {
        state.likes[likeIndex] = {
          $id, wishlist
        };
      }
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, getProducts, getLikes, updateLike} =
  productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectCollections = (state: RootState) => state.products.collections;
export const selectLikes = (state: RootState) => state.products.likes;

export default productSlice.reducer;
