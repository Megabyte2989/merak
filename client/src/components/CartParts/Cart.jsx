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
		<div className="p-8 bg-slate-500 text-white h-[100vh]">
			<h2 className="text-3xl text-center bg-dogwood-rose p-3 rounded-md font-medium uppercase ">
				Your Cart
			</h2>
			<h3 className="text-center text-green-400 text-2xl">
				Total Price: ${totalPrice}
			</h3>

			{cart.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				<ul className="space-y-2">
					{cart.map(item => (
						<li
							key={item.id}
							className="flex flex-col text-center md:flex-row space-y-2 md:space-y-0 p-6 bg-slate-400 rounded-sm justify-around items-center"
						>
							<p>{item.name}</p>
							<p>{item.price}$</p>
							<div className="flex gap-2">
								<button
									onClick={() => removeFromCart(item.id)}
									className="bg-red-500 p-3 rounded-md"
								>
									Remove
								</button>
								<button className="bg-orange-400 p-3 rounded-md">
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
