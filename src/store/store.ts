import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import AuthReducer from './AuthSlice';
const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: AuthReducer,
    },
});

export default store;

// why is this any what is this ?

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
