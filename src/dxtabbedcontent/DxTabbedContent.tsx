import React, { useState, useEffect } from 'react';
import { DxTabbedContentProps } from '..';

import './DxTabbedContent.scss';

export default function DxTabbedContent(props: DxTabbedContentProps) {
	const [activeTab, setActiveTab] = useState(props.initialTabId || 0);
	const [titles, setTitles] = useState<React.ReactNode[]>(
		// Scrape titles from child elements
		React.Children.toArray(props.children).map((child: any) => {
			if (!child || !child.props || !child.props.title) return 'Unknown title';
			return child.props.title;
		})
	);

	useEffect(() => {
		setTitles(
			React.Children.toArray(props.children).map((child: any) => {
				if (!child || !child.props || !child.props.title) return 'Unknown title';
				return child.props.title;
			})
		);
	}, [props.children]);

	return (
		<div className={`dx-tabbed-content${props.className ? ' ' + props.className : ''}`}>
			<div className="tab-titles">
				{titles.map((title, i) => (
					<span key={i} className={`tab-title${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
						{title}
					</span>
				))}
			</div>
			<div className="tab-content">{React.Children.toArray(props.children)[activeTab]}</div>
		</div>
	);
}
