import React from 'react';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
} from '../../store/modules/cartSlice';
import CartItems from '../Cart.js';

const CartCheckOutPage = () => {
	const { productsInCart } = useSelector(
		(state) => state.cart
	);
	let totalPrice = 0;
	const dispatch = useDispatch();
	const handleRemoveProduct = (product) => {
		dispatch(REMOVE_PRODUCT_FROM_CART(product));
	};
	const handleCheckout = () => {
		dispatch(CLEAR_CART());
	};
	return (
		<div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col bg-neutral1 h-screen">
					<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
						<div className="flex items-start justify-between">
							<h2
								className="text-lg font-medium text-secondary"
								id="slide-over-title"
							>
								Shopping cart
							</h2>
						</div>

						<div className="mt-8">
							<div className="flow-root">
								<div
									role="list"
									className="-my-6 divide-y divide-gray-200"
								>
									{productsInCart && (
										<CartItems
											productsInCart={
												productsInCart
											}
											removeProduct={
												handleRemoveProduct
											}
										/>
									)}
									{!productsInCart.length > 0 && (
										<div className="text-2xl text-center mb-8 mt-8">
											Nothing here yet !
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
						<div className="flex justify-between text-base font-medium text-gray-900">
							<p>Subtotal</p>
							<p>
								{productsInCart.forEach(
									(product) => {
										totalPrice += product.price;
									}
								)}
								NOK{''} {totalPrice}
							</p>
						</div>
						<p className="mt-0.5 text-sm text-gray-500">
							Shipping and taxes calculated at
							checkout.
						</p>
						<div className="mt-6">
							{productsInCart.length > 0 && (
								<Link
									to={'/success'}
									onClick={handleCheckout}
									className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary"
								>
									Checkout
								</Link>
							)}
							{!productsInCart.length > 0 && (
								<a
									href="/"
									className="hidden pointer-events-none items-center justify-center rounded-md border border-transparent bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary"
								>
									Checkout
								</a>
							)}
						</div>
						<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
							<p className="flex flex-col gap-4">
								<span>or</span>
								<button
									type="button"
									className="font-medium text-primary hover:text-secondary"
								>
									Continue Shopping
									<span aria-hidden="true">
										{' '}
										&rarr;
									</span>
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCheckOutPage;
