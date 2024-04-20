import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Collection, Prods } from "../index";

interface ProductState {
  products: Prods[];
  collections: Collection[];
}

const initialState: ProductState = {
  products: [],
  collections: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Prods>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Prods>) => {
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
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.$id !== action.payload
      );
    },
    getProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    addCollection: (state, action: PayloadAction<Collection>) => {
      state.collections.push(action.payload);
    },
    updateCollection: (state, action: PayloadAction<Collection>) => {
      const { $id, ...updatedData } = action.payload;
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.$id === $id
      );
      if (collectionIndex !== -1) {
        state.collections[collectionIndex] = {
          ...state.collections[collectionIndex],
          ...updatedData,
        };
      }
    },
    deleteCollection: (state, action: PayloadAction<string>) => {
      state.collections = state.collections.filter(
        (collection) => collection.$id !== action.payload
      );
    },
    getCollections: (state, action: PayloadAction<any>) => {
      state.collections = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, getProducts, addCollection, updateCollection, deleteCollection, getCollections } =
  productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectCollections = (state: RootState) => state.products.collections;

export default productSlice.reducer;
