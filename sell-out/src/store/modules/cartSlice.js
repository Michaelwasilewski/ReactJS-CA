import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		productsInCart: [],
		numberOfProductsInCart: 0,
	},
	reducers: {
		ADD_PRODUCT_TO_CART: (state, action) => {
			const isProductInCart =
				state.productsInCart &&
				state.productsInCart.some(
					(product) =>
						product.id === action.payload.id
				);
			if (isProductInCart) {
			} else {
				state.productsInCart = [
					...state.productsInCart,
					action.payload,
				];
				state.numberOfProductsInCart =
					state.productsInCart.length;
			}
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
			state.productsInCart = [];
			state.numberOfProductsInCart =
				state.productsInCart.length;
		},
	},
});

export default cartSlice.reducer;

export const {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
} = cartSlice.actions;

export const addSingleProductToCart =
	(productData) => (dispatch) => {
		dispatch(ADD_PRODUCT_TO_CART(productData));
	};

export const clearCart = () => (dispatch) => {
	dispatch(CLEAR_CART());
};
