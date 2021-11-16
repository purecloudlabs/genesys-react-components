import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';

import './DxAccordion.scss';

interface IProps {
	title: React.ReactNode;
	children: React.ReactNode;
	showOpen?: boolean;
}

export default function DxAccordion(props: IProps) {
	const [isOpen, setIsOpen] = useState(props.showOpen || false);

	return (
		<div className='dx-accordion'>
			<div className='accordion-heading' onClick={() => setIsOpen(!isOpen)}>
				{props.title} <GenesysDevIcon icon={isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown} />
			</div>
			{isOpen ? <div className='accordion-content'>{props.children}</div> : undefined}
		</div>
	);
}
