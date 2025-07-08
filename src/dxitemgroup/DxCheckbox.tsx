import React, { useEffect, useState } from 'react';

import { BaseComponentProps, CheckedChangedCallback } from '..';

import './DxCheckbox.scss';

interface IProps extends BaseComponentProps {
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
		<label id={props.id} className={`dx-checkbox${props.className ? ' ' + props.className : ''}${props.disabled ? ' disabled' : ''}`}>
			<input
				type={props.useRadioType ? 'radio' : 'checkbox'}
				name={props.name}
				value={props.itemValue}
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
				disabled={props.disabled === true}
				title={props.description}
			/>
			<span className="label-text" title={props.description}>
				{props.label}
			</span>
		</label>
	);
}
