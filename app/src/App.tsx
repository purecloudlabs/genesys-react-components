import React from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import { Route, Routes } from 'react-router-dom';
import FormDemo from './components/formdemo/FormDemo';
import { default as dependencies } from '../package.json';

import './App.scss';
import './typography.scss';
import DxNavigation, { DxNavigationItem } from './components/dxnavigation/DxNavigation';
import ReleaseNotes from './components/releasenotes/ReleaseNotes';

function App() {
	console.log(dependencies);
	let iconVersion = (dependencies as any)?.dependencies['genesys-react-components'] || '';
	if (iconVersion.startsWith('^')) iconVersion = iconVersion.substr(1);
	if (iconVersion !== '') iconVersion = `v${iconVersion}`;
	else iconVersion = 'local build';

	const navItems: DxNavigationItem[] = [
		{
			label: 'Documentation',
			link: '/',
		},
		{
			label: 'Release Notes',
			link: '/releasenotes',
		},
	];

	return (
		<React.Fragment>
			<div className="app-container">
				<DxNavigation items={navItems} className="app-nav" />
				<div className="app">
					<div className="content">
						<h1>Genesys React Components</h1>
						<Routes>
							<Route path="/" element={<FormDemo />} />
							<Route path="releasenotes" element={<ReleaseNotes />}></Route>
						</Routes>
						<div className="package-version">
							<em>genesys-dev-icons</em>
							<em>{iconVersion}</em>
							<div className="sources">
								<a href="https://github.com/purecloudlabs/genesys-react-components">
									<GenesysDevIcon icon={GenesysDevIcons.BrandGithub} />
								</a>
								<a href="https://www.npmjs.com/package/genesys-react-components">
									<GenesysDevIcon icon={GenesysDevIcons.BrandNpm} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
