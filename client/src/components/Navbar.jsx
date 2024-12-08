import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Example from './Example';

function Navbar() {
	const [fontNav, setFontNav] = useState(1);
	const [photoWidth, setPhotoWidth] = useState(18);
	const [Navcolor, setNavColor] = useState('white');
	const [textColor, setTextColor] = useState('black');

	useEffect(() => {
		const handlefont = () => {
			const scrollY = window.scrollY;
			const newFont = Math.max(0.8, 1 - scrollY / 200);
			setFontNav(newFont);

			const newPhotoWidth = Math.max(10, 18 - scrollY / 100);
			setPhotoWidth(newPhotoWidth);

			if (scrollY > 0) {
				setNavColor('#1a1332');
				setTextColor('white'); // Change text color to white when scrolling down
			} else {
				setNavColor('white');
				setTextColor('black'); // Reset text color to black when at the top
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
				}}
			>
				<div>
					<Link to={'/'}>
						<img
							style={{
								width: `${photoWidth}rem`,
								transition: 'width 0.2s ease',
							}}
							src="/New Horizons Logo.png"
							alt=""
						/>
					</Link>
				</div>
				<div
					className={`items-center justify-center flex`}
					style={{
						fontSize: `${fontNav}rem`,
						transition: 'font-size 0.2s ease',
						color: `${textColor}`,
					}}
				>
					<Example />
				</div>
			</div>
		</>
	);
}

export default Navbar;
