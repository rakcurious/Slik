import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Prods } from "..";


interface UserState {
    userData: any | null;
    wishlist: any | null;
    wishlistIds: any;
  }
  
  const initialState: UserState = {
    userData: null,
    wishlist: null,
    wishlistIds: null,
  };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<any>) => {
        state.userData = action.payload;
      },
      setWishlist: (state, action: PayloadAction<Prods[] | []>) => {
        state.wishlist = action.payload;
        state.wishlistIds = action.payload.map((prod)=> prod.$id)
      },
    },
  });
  
  export const { setUserData, setWishlist } = userSlice.actions;
  export const selectUserData = (state: RootState) => state.user.userData;
  export const selectWishlist = (state: RootState) => state.user.wishlist;
  export const selectWishlistIds = (state: RootState) => state.user.wishlistIds;
  export default userSlice.reducer;