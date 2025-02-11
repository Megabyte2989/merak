import React from 'react';
import LandingSec1 from './LandingSec1';
import LandingSec2 from './LandingSec2';
import LandingSec3 from './LandingSec3';
import LandingSec4 from './LandingSec4';
import LandingSec5 from './LandingSec5';
import LandingSec6 from './LandingSec6';
import LandingSec7 from './LandingSec7';
function Landing({ icons }) {
	return (
		<>
			<LandingSec1 />
			<LandingSec2
				icons={{
					project: icons.faProjectDiagram,
					shield: icons.faShieldAlt,
					tie: icons.faUserTie,
					network: icons.faUserTie,
					code: icons.faCode,
					database: icons.faDatabase,
					cloud: icons.faCloud,
					chartline: icons.faChartLine,
					cogs: icons.faCogs,
					robot: icons.faRobot,
				}}
			/>
			<LandingSec3 />
			<LandingSec4 />
			<LandingSec5 />
			<LandingSec6 />
			<LandingSec7
				icons={{
					left: icons.faArrowLeft,
					right: icons.faArrowRight,
					quote: icons.faQuoteLeft,
				}}
			/>
		</>
	);
}

export default Landing;
