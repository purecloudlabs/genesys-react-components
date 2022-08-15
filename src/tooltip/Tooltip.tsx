import React, { ReactNode, useEffect, useRef, useState } from 'react';

import './Tooltip.scss';

interface IProps {
	text: string;
	position?: 'top' | 'right' | 'bottom' | 'left';
	children?: ReactNode;
	className?: string;
	// Setting this to any value enables manual control
	isShowing?: boolean;
}

// Inspired by https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/
export default function Tooltip(props: IProps) {
	const [isShowing, setIsShowing] = useState(false);
	const timeout = useRef<NodeJS.Timeout | undefined>();

	useEffect(() => {
		if (props.isShowing === undefined) return;
		setIsShowing(props.isShowing === true);
	}, [props.isShowing]);

	const showTip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		// Ignore mouse events from the tooltip itself
		if ((e.target as HTMLDivElement).className.includes('tooltip-tip')) return;
		// Ignore mouse events when manually controlled
		if (props.isShowing !== undefined) return;
		timeout.current = setTimeout(() => {
			setIsShowing(true);
		}, 100);
	};

	const hideTip = () => {
		if (props.isShowing !== undefined) return;
		if (timeout.current) clearInterval(timeout.current);
		setIsShowing(false);
	};

	return (
		<div className={`tooltip-container ${props.className || ''}`} onMouseEnter={showTip} onMouseLeave={hideTip}>
			{props.children}
			<div className={`tooltip-tip ${props.position || 'top'}${isShowing ? ' visible' : ''}`}>{props.text}</div>
		</div>
	);
}
