import React, { useState } from 'react';
import { DxTabbedContentProps } from '..';

import './DxTabbedContent.scss';

export default function DxTabbedContent(props: DxTabbedContentProps) {
	const [activeTab, setActiveTab] = useState(props.initialTabId || 0);

	return (
		<div className={`dx-tabbed-content${props.className ? ' ' + props.className : ''}`}>
			<div className="tab-titles">
				{React.Children.toArray(props.children).map((child: any, i) => {
					if (!child) return;
					return (
						<span key={i} className={`tab-title${i === activeTab ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
							{!child.props || !child.props.title ? 'Unknown title' : child.props.title}
						</span>
					);
				})}
			</div>
			<div className="tab-content">{React.Children.toArray(props.children)[activeTab]}</div>
		</div>
	);
	//why you can use React.Children.toArray and React.Children.toArray.map like this: https://stackoverflow.com/questions/44721768/react-children-map-vs-react-children-toarray-map
}
