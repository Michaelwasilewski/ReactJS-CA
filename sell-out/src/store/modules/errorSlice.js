import { createSlice } from '@reduxjs/toolkit';
const errorSlice = createSlice({
	name: 'error',
	initialState: {
		isError: false,
		errorMessage: 'This page is not found.',
	},
	reducers: {
		SET_ERROR: (state, action) => {
			state.isError = action.payload;
		},
		SET_ERROR_MESSAGE: (state, action) => {
			state.errorMessage = action.payload;
		},
	},
});

const { actions, reducer } = errorSlice;
export default reducer;

const { SET_ERROR } = actions;
const { SET_ERROR_MESSAGE } = actions;

export const setError =
	(hasError, errorMessage) => (dispatch) => {
		dispatch(SET_ERROR(hasError));
		dispatch(SET_ERROR_MESSAGE(errorMessage));
	};
