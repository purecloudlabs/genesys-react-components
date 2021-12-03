import React from 'react';
import { BooleanChangedCallback } from '..';

import './DxCheckbox.scss';

interface IProps {
	label: string;
	value: string;
	description?: string;
	initialValue?: boolean;
	name?: string;
	className?: string;
	onCheckChanged?: BooleanChangedCallback;
	useRadioType?: boolean;
}

export default function DxCheckbox(props: IProps) {
	return (
		<label className={`dx-checkbox ${props.className || ''}`}>
			<input
				type={props.useRadioType ? 'radio' : 'checkbox'}
				name={props.name}
				id={props.label}
				value={props.value}
				checked={props.initialValue}
				onChange={(e) => (props.onCheckChanged ? props.onCheckChanged(e.target.checked) : undefined)}
			/>
			<span className='label-text'>{props.label}</span>
		</label>
	);
}
