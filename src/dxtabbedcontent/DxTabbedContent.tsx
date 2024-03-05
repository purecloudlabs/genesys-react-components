import React, { useState, useEffect } from 'react';
import { DxTabbedContentProps } from '..';

import './DxTabbedContent.scss';

export default function DxTabbedContent(props: DxTabbedContentProps) {
	const [activeTab, setActiveTab] = useState(props.initialTabId || 0);

	return (
		<div className={`dx-tabbed-content${props.className ? ' ' + props.className : ''}`}>
			<div className="tab-titles">
				{React.Children.toArray(props.children).map((child: any, i) => {
					if (!child) return;
					if (!child.props || !child.props.title) {
						return (
							<span key={i} className={`tab-title${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
								{'Unknown title'}
							</span>
						);
					}
					return (
						<span key={i} className={`tab-title${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
							{child.props.title}
						</span>
					);
				})}
			</div>
			<div className="tab-content">{React.Children.toArray(props.children)[activeTab]}</div>
		</div>
	);
}
