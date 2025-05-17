import React, { useEffect, useState } from 'react';

function Cart() {
	const [cart, setCart] = useState(() => {
		const storedCart = localStorage.getItem('cart');
		return storedCart ? JSON.parse(storedCart) : [];
	});
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));

		const total = cart.reduce((sum, course) => sum + course.price, 0);
		setTotalPrice(total);
	}, [cart]);

	const removeFromCart = id => {
		setCart(prev => prev.filter(item => item.id !== id));
	};

	return (
		<div className="p-8 bg-slate-800 text-white min-h-screen">
			<h2 className="text-4xl text-center bg-rose-600 p-4 rounded-lg font-bold uppercase tracking-wide shadow-md">
				Your Cart
			</h2>

			<h3 className="text-center text-green-300 text-2xl mt-6 mb-8 font-semibold">
				Total Price: ${totalPrice.toFixed(2)}
			</h3>

			{cart.length === 0 ? (
				<p className="text-center text-lg text-gray-300">
					Your cart is currently empty.
				</p>
			) : (
				<ul className="space-y-4">
					{cart.map(item => (
						<li
							key={item.id}
							className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between bg-slate-700 p-6 rounded-lg shadow-md"
						>
							<div className="flex flex-col md:flex-row md:items-center gap-4">
								<p className="text-lg font-medium">{item.name}</p>
								<p className="text-green-400 font-semibold">
									${item.price.toFixed(2)}
								</p>
							</div>

							<div className="flex gap-3">
								<button
									onClick={() => removeFromCart(item.id)}
									className="bg-red-500 hover:bg-red-600 transition-colors p-2 px-4 rounded-md font-semibold"
								>
									Remove
								</button>
								<button
									className="bg-orange-400 hover:bg-orange-500 transition-colors p-2 px-4 rounded-md font-semibold"
									onClick={() => alert('Thanks for reaching this step!')}
								>
									Checkout
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Cart;
