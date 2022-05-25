import React from 'react';
import { DxTabPanelProps } from '..';

import './DxTabPanel.scss';

export default function DxTabPanel(props: DxTabPanelProps) {
	return <div className={`dx-tab-panel${props.className ? ' ' + props.className : ''}`}>{props.children}</div>;
}
