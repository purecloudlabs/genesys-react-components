import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import { Route, Routes } from 'react-router-dom';
import { DxToggle } from 'genesys-react-components';
import FormDemo from './components/formdemo/FormDemo';
import { default as dependencies } from '../package.json';

import './App.scss';
import DxNavigation, { DxNavigationItem } from './components/dxnavigation/DxNavigation';
import ReleaseNotes from './components/releasenotes/ReleaseNotes';
import ThemeInfo from './components/theme/ThemeInfo';

const DARK_THEME_ENABLED_KEY = 'dark-theme';

function App() {
	const [darkThemeEnabled, setDarkThemeEnabled] = useState<boolean>(localStorage.getItem(DARK_THEME_ENABLED_KEY) === 'true');
	console.log(dependencies);
	let iconVersion = (dependencies as any)?.dependencies['genesys-react-components'] || '';
	if (iconVersion.startsWith('^')) iconVersion = iconVersion.substr(1);
	if (iconVersion !== '') iconVersion = `v${iconVersion}`;
	else iconVersion = 'local build';

	useEffect(() => {
		// Save theme setting
		localStorage.setItem(DARK_THEME_ENABLED_KEY, darkThemeEnabled ? 'true' : '');
	}, [darkThemeEnabled]);

	const navItems: DxNavigationItem[] = [
		{
			label: 'Documentation',
			link: '/',
		},
		{
			label: 'Theme Support',
			link: '/themes',
		},
		{
			label: 'Release Notes',
			link: '/releasenotes',
		},
	];

	return (
		<React.Fragment>
			<div className={`app-container my-app${darkThemeEnabled ? '-dark' : '-light'} disappearing-scrollbars`}>
				<DxNavigation items={navItems} className="app-nav" />
				<div className="app">
					<div className="content">
						<h1>Genesys React Components</h1>
						<Routes>
							<Route path="/" element={<FormDemo />} />
							<Route path="/themes" element={<ThemeInfo />} />
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
				<DxToggle
					className="theme-toggle"
					value={darkThemeEnabled}
					falseIcon={GenesysDevIcons.AppSun}
					trueIcon={GenesysDevIcons.AppMoon}
					onChange={(value) => setDarkThemeEnabled(value === true)}
				/>
			</div>
		</React.Fragment>
	);
}

export default App;
