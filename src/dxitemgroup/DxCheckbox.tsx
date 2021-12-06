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
	disabled?: boolean;
}

export default function DxCheckbox(props: IProps) {
	return (
		<label className={`dx-checkbox${props.className ? ' ' + props.className : ''}${props.disabled ? ' disabled' : ''}`}>
			<input
				type={props.useRadioType ? 'radio' : 'checkbox'}
				name={props.name}
				id={props.label}
				value={props.value}
				checked={props.initialValue}
				onChange={(e) => (props.onCheckChanged ? props.onCheckChanged(e.target.checked) : undefined)}
				disabled={props.disabled === true}
			/>
			<span className='label-text'>{props.label}</span>
		</label>
	);
}
