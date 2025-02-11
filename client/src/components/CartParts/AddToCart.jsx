import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function AddToCart({ course }) {
	const [inCart, setInCart] = useState(false);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		setInCart(cart.some(item => item.id === course.id));
	}, [course]);

	const handleAddToCart = () => {
		const cart = JSON.parse(localStorage.getItem('cart'));

		if (inCart) {
			const updatedCart = cart.filter(item => item.id !== course.id);
			localStorage.setItem('cart', JSON.stringify(updatedCart));
			setInCart(false);
		} else {
			cart.push(course);
			localStorage.setItem('cart', JSON.stringify(cart));
			setInCart(true);
		}
	};

	return (
		<button
			onClick={handleAddToCart}
			className={`${inCart ? 'bg-red-500' : 'bg-green-500'} p-5 rounded-full text-white text-1xl font-bold`}
		>
			<FontAwesomeIcon icon={faCartShopping} className="mr-3" />
			{inCart ? 'Remove From Cart' : 'Add to Cart'}
		</button>
	);
}

export default AddToCart;
