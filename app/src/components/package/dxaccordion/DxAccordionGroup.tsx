import React from 'react';

import './DxAccordionGroup.scss';

interface IProps {
	children: React.ReactNode;
}

export default function DxAccordionGroup(props: IProps) {
	return <div className='dx-accordion-group'>{props.children}</div>;
}
