import React from 'react';
import { useTrainingContext } from '../../contexts/trainingContext';

function Testcat() {
	const { categories, sectors, courses } = useTrainingContext();
	return (
		<>
			{/* <div className="categories">
				{categories.map(category => (
					<div key={category.id} className="category-item">
						<h3>{category.name}</h3>
						<p>{category.introduction}</p>
						<img
							src={`/categoriesImages/${category.photo}.webp`}
							alt={category.name}
							style={{ width: '200px', height: 'auto' }}
						/>
					</div>
				))}
			</div> */}
			<div className="sectors">
				{categories.map(category => (
					<div key={category.id} className="category-container">
						<h3>{category.name}</h3>
						{sectors
							.filter(sector => sector.category_id === category.id)
							.map(data => (
								<div key={data.id} className="category-item">
									<p>{data.name}</p>
								</div>
							))}
					</div>
				))}
			</div>
		</>
	);
}

export default Testcat;
