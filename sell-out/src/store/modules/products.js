import { createSlice } from '@reduxjs/toolkit';
import { setLoadingState } from './loaderSlice';
import { setError } from './errorSlice';
const ProductsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		singleProduct: null,
		isError: false,
	},
	reducers: {
		SET_PRODUCTS: (state, action) => {
			state.products = action.payload;
		},
		SET_SINGLE_PRODUCT: (state, action) => {
			state.singleProduct = action.payload;
		},
		SET_ERROR: (state, action) => {
			state.isError = action.payload;
		},
	},
});

export default ProductsSlice.reducer;

const { SET_PRODUCTS } = ProductsSlice.actions;
const { SET_SINGLE_PRODUCT } =
	ProductsSlice.actions;
const { SET_ERROR } = ProductsSlice.actions;

export const FetchProducts =
	() => async (dispatch) => {
		dispatch(setLoadingState(true));
		try {
			const response = await fetch(
				'https://api.noroff.dev/api/v1/online-shop'
			);
			const data = await response.json();
			dispatch(SET_PRODUCTS(data));
			dispatch(setLoadingState(false));
		} catch (e) {
			dispatch(setLoadingState(false));
			dispatch(setError(true, e.message));
		}
	};

export const FetchSingleProduct =
	(id) => async (dispatch) => {
		dispatch(setLoadingState(true));
		let response;
		try {
			response = await fetch(
				`https://api.noroff.dev/api/v1/online-shop/${id}`
			);
			const singleProductData =
				await response.json();
			dispatch(
				SET_SINGLE_PRODUCT(singleProductData)
			);
			dispatch(setLoadingState(false));
		} catch (e) {
			dispatch(setLoadingState(false));
			dispatch(setError(true, e.message));
		}
	};
