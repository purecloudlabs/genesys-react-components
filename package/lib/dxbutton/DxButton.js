import React from 'react';
import './DxButton.scss';
export default function DxButton(props) {
    var classNames = ['dx-button'];
    classNames.push("dx-button-".concat(props.type || 'primary'));
    if (props.className)
        classNames.push(props.className);
    var handleClick = function (e) {
        if (!props.onClick)
            return;
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
    };
    return (React.createElement("button", { className: classNames.join(' '), type: 'button', onClick: handleClick, disabled: props.disabled === true }, props.children));
}
