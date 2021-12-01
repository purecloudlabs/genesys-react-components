import React from 'react';
import FormDemo from './components/formdemo/FormDemo';
import { dependencies } from '../package.json';

import './App.scss';
import './typography.scss';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';

function App() {
	let iconVersion = (dependencies as any)['genesys-react-components'] || '';
	if (iconVersion.startsWith('^')) iconVersion = iconVersion.substr(1);
	if (iconVersion !== '') iconVersion = `v${iconVersion}`;
	else iconVersion = 'local build';

	return (
		<div className='app'>
			<h1>Form Demo</h1>
			<FormDemo />
			<div className='package-version'>
				<em>genesys-dev-icons</em>
				<em>{iconVersion}</em>
				<div className='sources'>
					<a href='https://github.com/purecloudlabs/genesys-react-components'>
						<GenesysDevIcon icon={GenesysDevIcons.BrandGithub} />
					</a>
					<a href='https://www.npmjs.com/package/genesys-react-components'>
						<GenesysDevIcon icon={GenesysDevIcons.BrandNpm} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
