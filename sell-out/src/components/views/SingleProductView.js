import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { FetchSingleProduct } from '../../store/modules/products';
import { addSingleProductToCart } from '../../store/modules/cartSlice';
import Error from '../shared/Error';

const SingleProductView = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	const { singleProduct, isError } = useSelector(
		(state) => state.Products
	);

	useEffect(() => {
		if (id) {
			dispatch(FetchSingleProduct(id));
		}
	}, [dispatch, id]);
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			{isError ? (
				<Error message="Sorry, something went wrong." />
			) : (
				<>
					{singleProduct ? (
						<div className="flex flex-wrap items-center">
							<div className="w-full">
								<div className="relative">
									<div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-lg"></div>
									<img
										src={singleProduct.imageUrl}
										alt={singleProduct.title}
										loading="lazy"
										className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110"
									/>
								</div>
							</div>
							<div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
								<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
									<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
										{singleProduct.title}
									</h1>
									<h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
										{singleProduct.brand}
									</h2>
									<p className="mt-4 text-base text-gray-700">
										{singleProduct.description}
									</p>
									<ul className="mt-4 space-y-2 text-sm list-disc text-gray-700">
										<li>
											<span className="font-medium text-primary">
												Price:
											</span>{' '}
											NOK
											{singleProduct.price}
										</li>
										<li>
											<span className="font-medium text-primary">
												Rating:
											</span>{' '}
											{singleProduct.rating}
										</li>
										<li>
											<span className="font-medium text-secondary">
												Tags:
											</span>{' '}
											{singleProduct.tags.map(
												(tag) => (
													<span
														key={tag}
														className="inline-block ml-2"
													>
														{tag}
													</span>
												)
											)}
										</li>
									</ul>
								</div>
								<div className="mt-4 lg:row-span-3 lg:mt-0">
									<h2 className="sr-only">
										Product information
									</h2>
									<button
										type="submit"
										className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
										onClick={() =>
											dispatch(
												addSingleProductToCart(
													singleProduct
												)
											)
										}
									>
										Add to cart
									</button>
								</div>
							</div>
						</div>
					) : (
						<p>Loading...</p>
					)}
				</>
			)}
		</div>
	);
};

export default SingleProductView;
