import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './DxNavigation.scss';

interface IProps {
	items: DxNavigationItem[];
	className?: string;
}

export interface DxNavigationItem {
	label: string;
	link: string;
}

export interface DxNavigationClicked {
	(item: DxNavigationItem): void;
}

export default function DxNavigation(props: IProps) {
	let location = useLocation();

	console.log(location);

	return (
		<div className={`dx-navigation${props.className ? ' ' + props.className : ''}`}>
			<div className='nav-container'>
				{props.items.map((item, i) => (
					<Link key={i} to={item.link} className={`${location.pathname === item.link ? ' active' : ''}`}>
						{item.label}
					</Link>
				))}
			</div>
		</div>
	);
}
