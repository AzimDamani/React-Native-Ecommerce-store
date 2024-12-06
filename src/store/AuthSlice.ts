import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type AuthState = {
    token: string | null,
    isAuth: boolean
}

const initialState: AuthState =  {
    token: null,
    isAuth: false,
};

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        loginSuccess:  (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuth = true;
            // AsyncStorage.setItem("authToken", state.token);
        },
        logout: (state) => {
            state.token = null;
            state.isAuth = false;
        },


    },
});


export const {loginSuccess, logout} = AuthSlice.actions;
export default AuthSlice.reducer;
