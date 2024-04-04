import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Prods } from "../../utils/data";

interface ProductState {
  products: any[];
}

const initialState: ProductState = {
  products: [],
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
  },
});

export const { addProduct, updateProduct, deleteProduct, getProducts } =
  productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
