import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './Slices/Counter/Counter';
import { boolSlice } from './Slices/Bool/bool';
export const store = configureStore({
     reducer: {
        counter: counterSlice.reducer,
        change: boolSlice.reducer
     } 
    })
// 