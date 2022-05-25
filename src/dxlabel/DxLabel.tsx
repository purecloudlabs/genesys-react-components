import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React from 'react';

import './DxLabel.scss';

interface IProps {
	label?: string;
	description?: string;
	useFieldset?: boolean;
	className?: string;
	children: React.ReactNode;
}

export default function DxLabel(props: IProps) {
	const hasLabel = props.label && props.label !== '';

	const description = props.description ? (
		<div className='input-description'>
			<GenesysDevIcon icon={GenesysDevIcons.AppInfoSolid} />
			<span>{props.description}</span>
		</div>
	) : undefined;

	const contents = (
		<React.Fragment>
			{' '}
			{hasLabel ? <span className='label-text'>{props.label}</span> : undefined}
			{props.children}
			{description}
		</React.Fragment>
	);

	const className = `dx-label${props.className ? ' ' + props.className : ''}`;

	if (props.useFieldset) {
		return <fieldset className={className}>{contents}</fieldset>;
	}
	return <label className={className}>{contents}</label>;
}
