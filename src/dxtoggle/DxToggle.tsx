import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import { BooleanChangedCallback, DxToggleProps } from '..';

import './DxToggle.scss';
import DxLabel from '../dxlabel/DxLabel';

export default function DxToggle(props: DxToggleProps) {
	let initialValue: boolean | undefined = props.value !== undefined ? props.value : props.initialValue;
	if (!props.isTriState) initialValue = initialValue || false;

	const [value, setValue] = useState<boolean | undefined>(initialValue);

	const trueIcon = props.trueIcon || GenesysDevIcons.AppCheck;
	const falseIcon = props.falseIcon || GenesysDevIcons.AppTimes;

	useEffect(() => {
		if (props.initialValue || props.value === value || (!props.isTriState && props.value === undefined)) return;
		setValue(props.value);
	}, [props.value]);

	useEffect(() => {
		if (props.onChange) props.onChange(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const toggleValue = () => {
		if (props.disabled) return;
		if (props.isTriState) {
			if (value === undefined) setValue(true);
			else if (value === true) setValue(false);
			else setValue(undefined);
		} else {
			setValue(!value);
		}
	};

	return (
		<DxLabel label={props.label} description={props.description} className={props.className}>
			<div className={`dx-toggle-container${props.disabled ? ' disabled' : ''}`}>
				<div className='dx-toggle' onClick={toggleValue}>
					{value !== false ? <GenesysDevIcon icon={falseIcon} /> : undefined}
					{value === true && props.isTriState ? <div className='clear-placeholder'>&nbsp;</div> : undefined}
					<div className='slider'>{value !== undefined ? <GenesysDevIcon icon={value ? trueIcon : falseIcon} /> : undefined}</div>
					{value === false && props.isTriState ? <div className='clear-placeholder'>&nbsp;</div> : undefined}
					{value !== true ? <GenesysDevIcon icon={trueIcon} /> : undefined}
				</div>
			</div>
		</DxLabel>
	);
}
