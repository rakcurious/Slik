// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product, Prods } from "../../utils/data";
import { Models } from "appwrite";

// interface Product {
//   id: string;
//   title: string;
//   target: string;
//   images: string[];
//   price: string;
//   brand: string;
//   likes?: number;
//   category: string;
//   clicks?: number;
//   userid: string;
//   collection: string;
// }




interface ProductState {
  products: any[];
  isLoggedIn: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoggedIn: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action:  PayloadAction<Prods>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Prods>) => {
      const { id, ...updatedData } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
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
        (product) => product.id !== action.payload
      );
    },
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getProducts: (state, action: PayloadAction<any>) => {
        state.products = action.payload;
      },
  },
});

export const { addProduct, updateProduct, deleteProduct, setLoginStatus, getProducts } =
  productSlice.actions;

  export const selectProducts = (state: RootState) => state.products


export default productSlice.reducer;
