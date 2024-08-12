import React from 'react';
import { VoidEventCallback } from '..';

import './DxButton.scss';

interface IProps {
	type?: 'primary' | 'secondary' | 'link';
	link?: string;
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
	if (props.type === 'link') {
		return (
			<a href={props.link || '#'} target="_blank" className={classNames.join(' ')}>
				{props.children}
			</a>
		);
	}
	return (
		<button className={classNames.join(' ')} type="button" onClick={handleClick} disabled={props.disabled === true}>
			{props.children}
		</button>
	);
}
