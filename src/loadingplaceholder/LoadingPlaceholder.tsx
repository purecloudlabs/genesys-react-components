import React from 'react';

import './LoadingPlaceholder.scss';

interface IProps {
	text?: string;
}

export default function LoadingPlaceholder(props: IProps) {
	return (
		<div className="loading-placeholder">
			<span className="text">{props.text || 'Loading'}</span>
			<div></div>
			<div></div>
		</div>
	);
}
