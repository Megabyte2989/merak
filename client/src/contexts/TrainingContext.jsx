import { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const TrainingContext = createContext();

export const useTrainingContext = () => {
	return useContext(TrainingContext);
};

export const TrainingProvider = ({ children }) => {
	const dispatch = useDispatch();
	

	// Fetch data from the Redux store
	const categories = useSelector(state => state.categories.categoriesData);
	const sectors = useSelector(state => state.sectors.sectorsData);
	const courses = useSelector(state => state.courses.coursesData); // Assuming you have this slice

	// Fetch data on component mount
	useEffect(() => {
		// No fetch dispatch calls needed as backend is removed
	}, [dispatch]);

	// Provide the context value
	const contextValue = {
		categories,
		sectors,
		courses,
	};

	return (
		<TrainingContext.Provider value={contextValue}>
			{children}
		</TrainingContext.Provider>
	);
};
