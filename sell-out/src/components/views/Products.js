import React from 'react';
import { useEffect, useState } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { FetchProducts } from '../../store/modules/products';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar';
import SearchResultsList from '../searchResults';

const Products = () => {
	const dispatch = useDispatch();

	const { products } = useSelector(
		(state) => state.Products
	);

	useEffect(() => {
		dispatch(FetchProducts());
	}, [dispatch]);
	const [results, setResults] = useState([]);
	console.log(products);
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="bg-neutral1">
				<div className="flex flex-col items-center w-full md:w-2/3 xl:w-1/3 mx-auto relative">
					<SearchBar setResults={setResults} />
					<SearchResultsList results={results} />
				</div>
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-neutral2">
						Products
					</h2>

					<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<div
								key={product.id}
								className="group relative flex flex-col gap-y-3"
							>
								<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-neutral2 group-hover:opacity-75 lg:aspect-none lg:h-80">
									<img
										src={product.imageUrl}
										alt={product.title}
										className="h-full w-full object-contain object-center lg:h-full lg:w-full"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700 relative">
											<Link
												to={`product/${product.id}`}
											>
												<span
													aria-hidden="true"
													className="absolute inset-0"
												/>
												{product.title}
											</Link>
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											{product.description}
										</p>
									</div>
									<p className="text-sm font-medium text-gray-900">
										NOK{product.price}
									</p>
								</div>
								<Link
									to={`product/${product.id}`}
									className="py-2 px-4 bg-primary text-white mt-auto text-center rounded-md hover:bg-secondary"
								>
									View
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
