import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React from 'react';
import './DxLabel.scss';
export default function DxLabel(props) {
    var hasLabel = props.label && props.label !== '';
    var description = props.description ? (React.createElement("div", { className: 'input-description' },
        React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppInfoSolid }),
        React.createElement("span", null, props.description))) : undefined;
    if (props.useFieldset) {
        return (React.createElement("fieldset", { className: 'dx-label ' + props.className || '' },
            props.label ? React.createElement("legend", { className: 'label-text' }, props.label) : undefined,
            props.children,
            description));
    }
    return (React.createElement("label", { className: 'dx-label ' + props.className || '' },
        hasLabel ? React.createElement("span", { className: 'label-text' }, props.label) : undefined,
        props.children,
        description));
}
