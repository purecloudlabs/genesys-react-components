import React from 'react';
import './DxTabPanel.scss';
export default function DxTabPanel(props) {
    return React.createElement("div", { className: 'dx-tab-panel' }, props.children);
}
