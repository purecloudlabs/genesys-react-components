import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import './DxToggle.scss';
import DxLabel from '../dxlabel/DxLabel';
export default function DxToggle(props) {
    var _a = useState(props.isTriState ? props.initialValue : props.initialValue || false), value = _a[0], setValue = _a[1];
    var trueIcon = props.trueIcon || GenesysDevIcons.AppCheck;
    var falseIcon = props.falseIcon || GenesysDevIcons.AppTimes;
    useEffect(function () {
        if (props.onChange)
            props.onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    var toggleValue = function () {
        if (props.isTriState) {
            if (value === undefined)
                setValue(true);
            else if (value === true)
                setValue(false);
            else
                setValue(undefined);
        }
        else {
            setValue(!value);
        }
    };
    return (React.createElement(DxLabel, { label: props.label, description: props.description },
        React.createElement("div", { className: 'dx-toggle-container' },
            React.createElement("div", { className: 'dx-toggle', onClick: toggleValue },
                value !== false ? React.createElement(GenesysDevIcon, { icon: falseIcon }) : undefined,
                value === true && props.isTriState ? React.createElement("div", { className: 'clear-placeholder' }, "\u00A0") : undefined,
                React.createElement("div", { className: 'slider' }, value !== undefined ? React.createElement(GenesysDevIcon, { icon: value ? trueIcon : falseIcon }) : undefined),
                value === false && props.isTriState ? React.createElement("div", { className: 'clear-placeholder' }, "\u00A0") : undefined,
                value !== true ? React.createElement(GenesysDevIcon, { icon: trueIcon }) : undefined))));
}
