import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		productsInCart: [],
		numberOfProductsInCart: 0,
	},
	reducers: {
		ADD_PRODUCT_TO_CART: (state, action) => {
			console.log('Action: ', action);
			state.productsInCart = [
				...state.productsInCart,
				action.payload,
			];
			state.numberOfProductsInCart =
				state.productsInCart.length;
		},
		REMOVE_PRODUCT_FROM_CART: (state, action) => {
			const productIdToRemove = action.payload;
			state.productsInCart =
				state.productsInCart.filter(
					(product) =>
						product.id !== productIdToRemove
				);
			state.numberOfProductsInCart =
				state.productsInCart.length;
		},
		CLEAR_CART: (state) => {
			state.itemsInCart = [];
			state.numberOfItemsInCart =
				state.itemsInCart.length;
		},
	},
});

export default cartSlice.reducer;

// Actions
export const {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
} = cartSlice.actions;

export const addSingleProductToCart =
	(productData) => (dispatch) => {
		console.log('Product Data', productData);
		dispatch(ADD_PRODUCT_TO_CART(productData));
	};
