import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Models } from "appwrite";


interface UserState {
    userData: Models.Account<Models.Preferences> | null;
    isLoggedIn: boolean;
  }
  
  const initialState: UserState = {
    userData: null,
    isLoggedIn: false,
  };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<Models.Account<Models.Preferences> | null>) => {
        state.userData = action.payload;
      },
      setLoginStatus: (state, action: PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload;
      },
    },
  });
  
  export const { setUserData, setLoginStatus } = userSlice.actions;
  export const selectUserData = (state: RootState) => state.user.userData;
  export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
  export default userSlice.reducer;