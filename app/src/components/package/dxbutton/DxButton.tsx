import React from 'react';
import { VoidEventCallback } from '../DxTypes';

import './DxButton.scss';

interface IProps {
	type?: 'primary' | 'secondary';
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	onClick?: VoidEventCallback;
}

export default function DxButton(props: IProps) {
	let classNames = ['dx-button'];
	classNames.push(`dx-button-${props.type || 'primary'}`);
	if (props.className) classNames.push(props.className);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (!props.onClick) return;
		e.preventDefault();
		e.stopPropagation();
		props.onClick();
	};

	return (
		<button className={classNames.join(' ')} type='button' onClick={handleClick} disabled={props.disabled === true}>
			{props.children}
		</button>
	);
}
