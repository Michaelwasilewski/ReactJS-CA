import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="bg-gray-900 pt-10 sm:pt-12 pb-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="lg:flex lg:justify-between">
					<div className="w-full lg:w-2/5 xl:w-1/4 mb-6 lg:mb-0">
						<a
							href="/"
							className="flex items-center"
						>
							<span className="text-white ml-2 text-lg font-semibold">
								Sell-Out
							</span>
						</a>
						<p className="mt-3 text-gray-500 text-sm lg:max-w-sm">
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Vivamus
							aliquam urna ac leo eleifend
							hendrerit.
						</p>
						<div className="mt-3 flex space-x-3">
							<a
								href="/"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">
									Facebook
								</span>
								<FaFacebook
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
							<a
								href="/"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">
									Instagram
								</span>
								<FaInstagram
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
							<a
								href="/"
								className="text-gray-400 hover:text-white"
							>
								<span className="sr-only">
									Twitter
								</span>
								<FaTwitter
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
						</div>
					</div>
					<div className="mt-8 lg:mt-0 lg:w-3/5 xl:w-3/4">
						<div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
							<div className="flex flex-wrap justify-center">
								<div className="px-3 py-2 m-1 rounded-md bg-gray-800 hover:bg-gray-700">
									<a
										href="/"
										className="text-sm font-medium text-white"
									>
										About Us
									</a>
								</div>
								<div className="px-3 py-2 m-1 rounded-md bg-gray-800 hover:bg-gray-700">
									<Link
										to="/contact"
										className="text-sm font-medium text-white"
									>
										Contact
									</Link>
								</div>
								<div className="px-3 py-2 m-1 rounded-md bg-gray-800 hover:bg-gray-700">
									<Link
										to="/products"
										className="text-sm font-medium text-white"
									>
										Continue Shopping
									</Link>
								</div>
								<div className="px-3 py-2 m-1 rounded-md bg-gray-800 hover:bg-gray-700">
									<a
										href="/"
										className="text-sm font-medium text-white"
									>
										Terms
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6 border-t border-gray-800 pt-6">
					<p className="text-base text-gray-400 xl:text-center">
						&copy; {new Date().getFullYear()}
						Sell-out. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
