import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';

import Tooltip from '../tooltip/Tooltip';
import { BaseComponentProps } from '..';

import './CopyButton.scss';

interface IProps extends BaseComponentProps {
	copyText: string;
	className?: string;
	tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export default function CopyButton(props: IProps) {
	let [copyState, setCopyState] = useState(false);

	// Copy function will set the component state to indicate we have copied the record and then show the tool tip. With the copyState set to true we will see 'Copied'
	const copyCode = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setCopyState(true);
		navigator.clipboard.writeText(props.copyText);
		return;
	};

	// Once we lose focus on the copy button, we want to set the copyState to false so that we can hide the tool tip and set the default tool tip to ''
	const loseFocus = () => {
		setCopyState(false);
		return;
	};

	const buttonClasses = ['copy-button'];
	if (props.className) buttonClasses.push(props.className);

	return (
		<React.Fragment>
			<Tooltip isShowing={copyState} text="Copied" position={props.tooltipPosition}>
				<button id={props.id} type="button" className={buttonClasses.join(' ')} onClick={copyCode} onMouseOut={loseFocus}>
					<GenesysDevIcon icon={GenesysDevIcons.AppCopy} />
				</button>
			</Tooltip>
		</React.Fragment>
	);
}
