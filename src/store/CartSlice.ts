import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CartState = {
    items: Product[];
    totalPrice: number
}
const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

const saveCartToStorage = async (cartData: CartState) => {
    try{
        await AsyncStorage.setItem('cart', JSON.stringify(cartData));
    } catch(err){
        console.log(err);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>){
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if(existingItem) {
                existingItem.quantity! += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
            state.totalPrice += action.payload.price;
            saveCartToStorage(state);
        },
        removeFromCart(state, action: PayloadAction<number>){
            const itemToRemove = state.items.find((item) => item.id === action.payload);
            if(itemToRemove) {
                state.totalPrice -= itemToRemove.price * (itemToRemove.quantity || 1);
            }
            state.items = state.items.filter((item) => item.id !== action.payload);
            saveCartToStorage(state);
        },
        incrementQuantity(state, action: PayloadAction<number>){
            const item = state.items.find((items) => items.id === action.payload);
            if(item) {
                item.quantity! += 1;
                state.totalPrice += item.price;
            }
            saveCartToStorage(state);
        },
        decrementQuantity(state, action: PayloadAction<number>){
            const item = state.items.find((item) => item.id === action.payload);
            if(item) {
                if(item.quantity! > 1){
                    item.quantity! -= 1;
                    state.totalPrice -= item.price;
                } else{
                    state.totalPrice -= item.price * (item.quantity || 1);
                    state.items = state.items.filter((item) => item.id !== action.payload);
                }
            }
            saveCartToStorage(state);
        },
    },

});


export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;


export default cartSlice.reducer;
