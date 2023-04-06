import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import Products from './modules/products';
import loaderSlice from './modules/loaderSlice';
import cartSlice from './modules/cartSlice';
import errorSlice from './modules/errorSlice';
const reducer = combineReducers({
	Products: Products,
	loader: loaderSlice,
	cart: cartSlice,
	error: errorSlice,
});

const index = configureStore({
	reducer,
});

export default index;
