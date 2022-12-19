import {ISignInResponse} from '@/types/api/user';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
  userInfo: null | ISignInResponse;
  isAuth: boolean;
}
const initialState: IInitialState = {
  userInfo: null,
  isAuth: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<ISignInResponse>) {
      state.isAuth = true;
      state.userInfo = action.payload;
    },
  },
});
export const {signInSuccess} = userSlice.actions;
export default userSlice.reducer;
