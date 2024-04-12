import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Models } from "appwrite";


interface UserState {
    userData: Models.Account<Models.Preferences> | null;
    wishlist: any;
  }
  
  const initialState: UserState = {
    userData: null,
    wishlist: []
  };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<Models.Account<Models.Preferences> | null>) => {
        state.userData = action.payload;
      },
      setWishlist: (state, action: PayloadAction<string[]>) => {
        state.wishlist = action.payload;
      },
    },
  });
  
  export const { setUserData, setWishlist } = userSlice.actions;
  export const selectUserData = (state: RootState) => state.user.userData;
  export const selectWishlist = (state: RootState) => state.user.wishlist;
  export default userSlice.reducer;