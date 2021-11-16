import React from 'react';

import './DxTabPanel.scss';

interface IProps {
	title: React.ReactNode;
	children: React.ReactNode;
}

export default function DxTabPanel(props: IProps) {
	return <div className='dx-tab-panel'>{props.children}</div>;
}
