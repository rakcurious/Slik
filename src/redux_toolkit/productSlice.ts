import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Collection, Prods, collections } from "../index";

interface ProductState {
  products: Prods[];
  collections: Collection[];
}

const initialState: ProductState = {
  products: [],
  collections: collections,
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
  },
});

export const { addProduct, updateProduct, deleteProduct, getProducts} =
  productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectCollections = (state: RootState) => state.products.collections;

export default productSlice.reducer;
