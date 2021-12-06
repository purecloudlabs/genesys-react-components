import React from 'react';

import './DxAccordionGroup.scss';

interface IProps {
	children: React.ReactNode;
	className?: string;
}

export default function DxAccordionGroup(props: IProps) {
	return <div className={`dx-accordion-group${props.className ? ' ' + props.className : ''}`}>{props.children}</div>;
}
