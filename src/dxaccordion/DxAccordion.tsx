import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';

import { DxAccordionProps } from '..';

import './DxAccordion.scss';

export default function DxAccordion(props: DxAccordionProps) {
	const [isOpen, setIsOpen] = useState(props.showOpen || false);
	const [expandTrigger, setExpandTrigger] = useState(props.expandTrigger);
	const [showOpenTrigger, setShowOpenTrigger] = useState(props.showOpenTrigger);

	// This one forcibly opens the component
	React.useEffect(() => {
		if (props.expandTrigger !== expandTrigger) {
			setIsOpen(true);
			setExpandTrigger(props.expandTrigger);
		}
	}, [props.expandTrigger, expandTrigger]);

	// This one forcibly recalculates the state based on the value for props.showOpen
	React.useEffect(() => {
		if (props.showOpenTrigger !== showOpenTrigger) {
			setIsOpen(props.showOpen);
			setShowOpenTrigger(props.showOpenTrigger);
		}
	}, [props.showOpenTrigger, showOpenTrigger, props.showOpen]);

	React.useEffect(() => {
		if (props.showOpen === true || props.showOpen === false) setIsOpen(props.showOpen);
	}, [props.showOpen]);

	let style = {} as React.CSSProperties;
	if (props.headingColor) style.color = props.headingColor;

	let icon;
	if (props.headingIcon) icon = <GenesysDevIcon icon={props.headingIcon} className="heading-icon" />;

	return (
		<div id={props.id || props.containerId || undefined} className={`dx-accordion${props.className ? ' ' + props.className : ''}`}>
			<div className="accordion-heading" style={style} onClick={() => setIsOpen(!isOpen)}>
				<span className="accordion-heading__left">
					{icon} {props.title}
				</span>{' '}
				<GenesysDevIcon icon={isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown} />
			</div>
			{isOpen ? <div className="accordion-content">{props.children}</div> : undefined}
		</div>
	);
}
