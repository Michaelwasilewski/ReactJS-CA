import React from 'react';

const CheckOutSuccess = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen bg-neutral1">
				<div className="max-w-lg mx-auto w-full">
					<svg
						className="w-16 h-16 mx-auto mb-4 text-green-500"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
						<path d="M22 4L12 14.01l-3-3" />
					</svg>
					<h2 className="text-3xl font-bold text-gray-800 mb-2">
						Order Confirmed
					</h2>
					<p className="text-lg text-gray-600 mb-8">
						Your order has been confirmed and will
						be shipped soon.
					</p>
				</div>
			</div>
		</>
	);
};

export default CheckOutSuccess;
