import React from 'react';

const Cart = ({
	productsInCart,
	removeProduct,
}) => {
	return (
		<>
			{productsInCart.map((product, index) => (
				<div key={index} className="flex py-6">
					<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
						<img
							src={product.imageUrl}
							alt={product.title}
							loading="lazy"
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="ml-4 flex flex-1 flex-col">
						<div>
							<div className="flex justify-between text-base font-medium text-gray-900">
								<h3>
									<a href="#">{product.title}</a>
								</h3>
								<p className="ml-4">
									NOK{''}
									{product.price}
								</p>
							</div>
							<p className="mt-1 text-sm text-gray-500">
								{product.brand}
							</p>
						</div>
						<div className="flex flex-1 items-end justify-between text-sm">
							<p className="text-gray-500">
								Qty 1
							</p>

							<div className="flex">
								<button
									type="button"
									className="font-medium text-secondary hover:text-red-600"
									onClick={() =>
										removeProduct(product.id)
									}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Cart;
