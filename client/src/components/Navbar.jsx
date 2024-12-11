import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Example from './Example';

function Navbar() {
	const [fontNav, setFontNav] = useState(1);
	const [photoWidth, setPhotoWidth] = useState(18);
	const [Navcolor, setNavColor] = useState('white');
	const [fontColor, setFontcolor] = useState('black');
	useEffect(() => {
		const handlefont = () => {
			const scrollY = window.scrollY;
			const newFont = Math.max(0.8, 1 - scrollY / 200);
			setFontNav(newFont);

			const newPhotoWidth = Math.max(10, 18 - scrollY / 100);
			setPhotoWidth(newPhotoWidth);
			setNavColor('#EBA3B3');
			setFontcolor('white');
			if (scrollY > 0) {
				setNavColor('#1a1332'); // Change color when scrolling down
			} else {
				setNavColor('white'); // Reset color to white when at the top
				setFontcolor('black');
			}
		};

		window.addEventListener('scroll', handlefont);
		return () => window.removeEventListener('scroll', handlefont);
	}, []);

	return (
		<>
			<div
				className={`flex justify-around p-3 sticky top-0 bg-white z-10 `}
				style={{
					backgroundColor: `${Navcolor}`,
					transition: `background-color 0.3s ease`,
					color: `${fontColor}`,
				}}
			>
				<div>
					<Link to={'/'}>
						<img
							style={{
								width: `${photoWidth}rem`,
								transition: 'width 0.2s ease',
							}}
							src="/images/New_Horizons_Logo.webp"
							alt=""
						/>
					</Link>
				</div>
				<div
					className={`items-center justify-center flex`}
					style={{
						fontSize: `${fontNav}rem`,
						transition: 'font-size 0.2s ease',
						color: `${fontColor}`,
					}}
				>
					<Example />
				</div>
			</div>
		</>
	);
}

export default Navbar;
