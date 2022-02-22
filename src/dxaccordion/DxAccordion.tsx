import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';
import { DxAccordionProps } from '..';

import './DxAccordion.scss';

export default function DxAccordion(props: DxAccordionProps) {
	const [isOpen, setIsOpen] = useState(props.showOpen || false);
	const [expandTrigger, setExpandTrigger] = useState(props.expandTrigger);

	React.useEffect(() => {
		if (props.expandTrigger !== expandTrigger) {
			setIsOpen(true);
			setExpandTrigger(props.expandTrigger);
		}
	}, [props.expandTrigger, expandTrigger]);

	let style = {} as React.CSSProperties;
	if (props.headingColor) style.color = props.headingColor;

	let icon;
	if (props.headingIcon) icon = <GenesysDevIcon icon={props.headingIcon} className="heading-icon" />;

	return (
		<div id={props.containerId || undefined} className={`dx-accordion${props.className ? ' ' + props.className : ''}`}>
			<div className='accordion-heading' style={style} onClick={() => setIsOpen(!isOpen)}>
				<span className='accordion-heading__left'>{icon} {props.title}</span> <GenesysDevIcon icon={isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown} />
			</div>
			{isOpen ? <div className='accordion-content'>{props.children}</div> : undefined}
		</div>
	);
}
