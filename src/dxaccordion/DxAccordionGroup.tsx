import React from 'react';

import { BaseComponentProps } from '..';

import './DxAccordionGroup.scss';

interface IProps extends BaseComponentProps {
	children: React.ReactNode;
	className?: string;
}

export default function DxAccordionGroup(props: IProps) {
	return (
		<div id={props.id} className={`dx-accordion-group${props.className ? ' ' + props.className : ''}`}>
			{props.children}
		</div>
	);
}
