import React, { useState } from 'react';
import './DxTabbedContent.scss';
export default function DxTabbedContent(props) {
    var _a = useState(props.initialTabId || 0), activeTab = _a[0], setActiveTab = _a[1];
    var titles = useState(
    // Scrape titles from child elements
    React.Children.toArray(props.children).map(function (child) {
        if (!child || !child.props || !child.props.title)
            return 'Unknown title';
        return child.props.title;
    }))[0];
    return (React.createElement("div", { className: 'dx-tabbed-content' },
        React.createElement("div", { className: 'tab-titles' }, titles.map(function (title, i) { return (React.createElement("span", { key: i, className: "tab-title".concat(i === activeTab ? ' active' : ''), onClick: function () { return setActiveTab(i); } }, title)); })),
        React.createElement("div", { className: 'tab-content' }, React.Children.toArray(props.children)[activeTab])));
}
