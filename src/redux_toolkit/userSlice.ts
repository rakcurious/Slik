import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface UserState {
    userData: any;
  }
  
  const initialState: UserState = {
    userData: null,
  };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserData: (state, action: PayloadAction<any>) => {
        state.userData = action.payload;
      },
    },
  });
  
  export const { setUserData } = userSlice.actions;
  export const selectUserData = (state: RootState) => state.user.userData;
  export default userSlice.reducer;