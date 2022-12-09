import React from 'react';
import { AlertBlock } from 'genesys-react-components';

export default function ThemeInfo() {
	return (
		<div>
			<p>
				Some components can be themed. See <code>app/src/App.scss</code> in this repo for an example.
			</p>
			<AlertBlock alertType="warning">
				<p>Theme support is incomplete. Please finish using theme vars on components and document it.</p>
			</AlertBlock>
		</div>
	);
}
