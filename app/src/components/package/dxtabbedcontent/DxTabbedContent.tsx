import React, { useState } from 'react';

import './DxTabbedContent.scss';

interface IProps {
	children: React.ReactNode;
	initialTabId?: number;
}

export default function DxTabbedContent(props: IProps) {
	const [activeTab, setActiveTab] = useState(props.initialTabId || 0);
	const [titles] = useState<React.ReactNode[]>(
		// Scrape titles from child elements
		React.Children.toArray(props.children).map((child: any) => {
			if (!child || !child.props || !child.props.title) return 'Unknown title';
			return child.props.title;
		})
	);

	return (
		<div className='dx-tabbed-content'>
			<div className='tab-titles'>
				{titles.map((title, i) => (
					<span key={i} className={`tab-title${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
						{title}
					</span>
				))}
			</div>
			<div className='tab-content'>{React.Children.toArray(props.children)[activeTab]}</div>
		</div>
	);
}
