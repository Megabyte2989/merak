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
			{/* <div className="sectors">
				{sectors.map(sector => (
					<div key={sector.id} className="category-item">
						<p>{sector.id}</p>
						<p>{sector.Category.id}</p>
					</div>
				))}
			</div> */}
			<div className="courses">
				{courses.map(course => (
					<div key={course.id} className="category-item">
						<p>{course.sector.name}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Testcat;
