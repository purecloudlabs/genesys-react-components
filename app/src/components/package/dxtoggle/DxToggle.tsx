import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import { BooleanChangedCallback } from '../DxTypes';

import './DxToggle.scss';

export interface DxToggleProps {
	isTriState?: boolean;
	initialValue?: boolean;
	label?: string;
	trueIcon?: GenesysDevIcons;
	falseIcon?: GenesysDevIcons;
	onChange?: BooleanChangedCallback;
}

export default function DxToggle(props: DxToggleProps) {
	const [value, setValue] = useState(props.isTriState ? props.initialValue : props.initialValue || false);
	const hasLabel = props.label && props.label !== '';

	const trueIcon = props.trueIcon || GenesysDevIcons.AppCheck;
	const falseIcon = props.falseIcon || GenesysDevIcons.AppTimes;

	useEffect(() => {
		if (props.onChange) props.onChange(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const toggleValue = () => {
		if (props.isTriState) {
			if (value === undefined) setValue(true);
			else if (value === true) setValue(false);
			else setValue(undefined);
		} else {
			setValue(!value);
		}
	};

	return (
		<label className='dx-label'>
			{hasLabel ? <span className='label-text'>{props.label}</span> : undefined}
			<div className='dx-toggle-container'>
				<div className='dx-toggle' onClick={toggleValue}>
					{value !== false ? <GenesysDevIcon icon={falseIcon} /> : undefined}
					{value === true && props.isTriState ? <div className='clear-placeholder'>&nbsp;</div> : undefined}
					<div className='slider'>{value !== undefined ? <GenesysDevIcon icon={value ? trueIcon : falseIcon} /> : undefined}</div>
					{value === false && props.isTriState ? <div className='clear-placeholder'>&nbsp;</div> : undefined}
					{value !== true ? <GenesysDevIcon icon={trueIcon} /> : undefined}
				</div>
			</div>
		</label>
	);
}
