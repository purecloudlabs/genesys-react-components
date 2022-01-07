import React, { useEffect, useState } from 'react';
import { CheckedChangedCallback } from '..';

import './DxCheckbox.scss';

interface IProps {
	label: string;
	itemValue: string;
	description?: string;
	checked?: boolean;
	initiallyChecked?: boolean;
	name?: string;
	className?: string;
	onCheckChanged?: CheckedChangedCallback;
	useRadioType?: boolean;
	disabled?: boolean;
}

export default function DxCheckbox(props: IProps) {
	let initialValue: boolean = props.checked !== undefined ? props.checked : props.initiallyChecked || false;

	const [checked, setChecked] = useState<boolean>(initialValue);

	useEffect(() => {
		if (props.checked === undefined || props.checked === checked) return;
		setChecked(props.checked);
	}, [props.checked]);

	useEffect(() => {
		if (props.onCheckChanged) props.onCheckChanged(checked);
	}, [checked]);

	return (
		<label className={`dx-checkbox${props.className ? ' ' + props.className : ''}${props.disabled ? ' disabled' : ''}`}>
			<input
				type={props.useRadioType ? 'radio' : 'checkbox'}
				name={props.name}
				// id={props.label}
				value={props.itemValue}
				/* HACK/TODO: break radio buttons out or control them properly. The checked property must be controlled in the context of the
				 * entire group. Isolation in this component is preventing the state from being updated when another item is selected.
				 * BUG: Radio buttons don't raise events after they've been selected the first time because the state remains true.
				 */
				checked={props.useRadioType ? undefined : checked}
				onChange={(e) => setChecked(e.target.checked)}
				disabled={props.disabled === true}
			/>
			<span className='label-text'>{props.label}</span>
		</label>
	);
}
