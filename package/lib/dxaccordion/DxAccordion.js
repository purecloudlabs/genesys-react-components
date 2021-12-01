import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';
import './DxAccordion.scss';
export default function DxAccordion(props) {
    var _a = useState(props.showOpen || false), isOpen = _a[0], setIsOpen = _a[1];
    return (React.createElement("div", { className: 'dx-accordion' },
        React.createElement("div", { className: 'accordion-heading', onClick: function () { return setIsOpen(!isOpen); } },
            props.title,
            " ",
            React.createElement(GenesysDevIcon, { icon: isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown })),
        isOpen ? React.createElement("div", { className: 'accordion-content' }, props.children) : undefined));
}
