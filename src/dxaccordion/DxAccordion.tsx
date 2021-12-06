import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';
import { DxAccordionProps } from '..';

import './DxAccordion.scss';

export default function DxAccordion(props: DxAccordionProps) {
	const [isOpen, setIsOpen] = useState(props.showOpen || false);

	return (
		<div className={`dx-accordion${props.className ? ' ' + props.className : ''}`}>
			<div className='accordion-heading' onClick={() => setIsOpen(!isOpen)}>
				{props.title} <GenesysDevIcon icon={isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown} />
			</div>
			{isOpen ? <div className='accordion-content'>{props.children}</div> : undefined}
		</div>
	);
}
