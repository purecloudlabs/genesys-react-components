import React from 'react';
import { DxAccordionGroup, DxAccordion } from 'genesys-react-components';

import releaseNoteData from './ReleaseNoteData.json';

interface ReleaseNoteData {
	version: string;
	notes?: string;
	features?: string[];
	bugfixes?: string[];
}

export default function ReleaseNotes() {
	const releaseNotes: ReleaseNoteData[] = releaseNoteData;
	return (
		<DxAccordionGroup>
			{releaseNotes.map((data, i) => (
				<DxAccordion key={i} title={data.version} showOpen={i === 0}>
					{data.notes ? <p>{data.notes}</p> : undefined}
					<h3>Features</h3>
					<ul>{data.features ? data.features.map((feat, ii) => <li key={ii}>{feat}</li>) : <em>No features</em>}</ul>
					<h3>Bugfixes</h3>
					<ul>{data.bugfixes ? data.bugfixes.map((feat, ii) => <li key={ii}>{feat}</li>) : <em>No bug fixes</em>}</ul>
				</DxAccordion>
			))}
		</DxAccordionGroup>
	);
}
