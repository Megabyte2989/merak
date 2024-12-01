import {
	faChartLine,
	faCloud,
	faCode,
	faCogs,
	faDatabase,
	faNetworkWired,
	faProjectDiagram,
	faRobot,
	faShieldAlt,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function LandingSec2() {
	return (
		<div className="Container sm:p-14 p-5 grid grid-cols-12 bg-lavender text-black text-center md:text-left   md:gap-0 lg:gap-10">
			<div className="col-span-12 md:col-span-5 lg:col-span-5 p-4 sm:p-6">
				<h2 className="text-3xl sm:text-5xl font-bold mb-8 text-russian-violet drop-shadow-xl">
					Get Your Team <br />
					On The Right Path
				</h2>
				<p className="text-sm lg:text-base  mb-5 px-3">
					From Cybersecurity to AI & Machine Learning, our best-in-class
					training has you covered with courses that cover all of your IT and
					Professional Training needs. With technology and business advancements
					moving at lightning-fast speeds, keeping your team's skills top-notch
					can be challenging.
				</p>
			</div>
			<div
				className="col-span-12 md:col-span-7 lg:col-span-7 p-4 sm:p-6
    grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-center  md:text-center items-baseline"
			>
				<div>
					<ul className="space-y-4 md:space-y-6 text-base font-medium">
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faProjectDiagram}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="2xl"
							/>
							<span className="text-md ml-3">Project Management</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faShieldAlt}
								className="icon-alignment fa-shake"
								style={{ color: 'var(--dogwood-rose)' }}
								size="2xl"
							/>
							<span className="text-md ml-3">Cybersecurity</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faUserTie}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="2xl"
							/>
							<span className="text-md ml-3">Leadership & Development</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faNetworkWired}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">Networking</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faCode}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">Programming</span>
						</li>
					</ul>
				</div>

				<div>
					<ul className="space-y-4 md:space-y-6 text-base font-medium">
						<li className="flex items-center m-y-6  mt-6">
							<FontAwesomeIcon
								icon={faDatabase}
								className="icon-alignment "
								style={{ color: 'var(--dogwood-rose)' }}
								size="2xl"
							/>
							<span className="text-md ml-3">Data & Analytics</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faCloud}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">Cloud</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faChartLine}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">Business Analysis</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faCogs}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">DevOps</span>
						</li>
						<li className="flex items-center">
							<FontAwesomeIcon
								icon={faRobot}
								className="icon-alignment"
								style={{ color: 'var(--dogwood-rose)' }}
								size="xl"
							/>
							<span className="text-md ml-3">AI & Machine Learning</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default LandingSec2;
