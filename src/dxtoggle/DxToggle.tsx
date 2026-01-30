import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';

import { BooleanChangedCallback, DxToggleProps } from '..';
import DxLabel from '../dxlabel/DxLabel';

import './DxToggle.scss';

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

	const setToggleValue = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (props.disabled) return;
		if (props.isTriState) {
			if (value === undefined) setValue(true);
			else if (value === true) setValue(false);
			else setValue(undefined);
		} else {
			setValue(!value);
		}
	};

	const getToggleValue = () => {
		if (props.disabled) return 'mixed';
		if (props.isTriState) {
			if (value === undefined) return 'mixed';
		}
		if (value === true) return 'true';
		if (value === false) return 'false';
	};

	return (
		<DxLabel id={props.id} label={props.label} description={props.description} className={props.className}>
			<div aria-checked={getToggleValue()} className={`dx-toggle-container${props.disabled ? ' disabled' : ''}`}>
				<div className="dx-toggle" onClick={setToggleValue}>
					{value !== false ? <GenesysDevIcon icon={falseIcon} /> : undefined}
					{value === true && props.isTriState ? <div className="clear-placeholder">&nbsp;</div> : undefined}
					<div className="slider">{value !== undefined ? <GenesysDevIcon icon={value ? trueIcon : falseIcon} /> : undefined}</div>
					{value === false && props.isTriState ? <div className="clear-placeholder">&nbsp;</div> : undefined}
					{value !== true ? <GenesysDevIcon icon={trueIcon} /> : undefined}
				</div>
			</div>
		</DxLabel>
	);
}
