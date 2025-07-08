import React from 'react';

import { BaseComponentProps, VoidEventCallback } from '..';

import './DxButton.scss';

interface IProps extends BaseComponentProps {
	type?: 'primary' | 'secondary' | 'link';
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	onClick?: VoidEventCallback;
	onClickRaw?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DxButton(props: IProps) {
	let classNames = ['dx-button'];
	classNames.push(`dx-button-${props.type || 'primary'}`);
	if (props.className) classNames.push(props.className);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// Raise raw event
		if (props.onClickRaw) {
			props.onClickRaw(e);
			return;
		}

		// Raise managed event
		if (props.onClick) {
			e.preventDefault();
			e.stopPropagation();
			props.onClick();
			return;
		}
	};

	return (
		<button id={props.id} className={classNames.join(' ')} type="button" onClick={handleClick} disabled={props.disabled === true}>
			{props.children}
		</button>
	);
}
