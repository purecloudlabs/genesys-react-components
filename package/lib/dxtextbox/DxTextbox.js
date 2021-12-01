import React, { useEffect, useRef, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import DxLabel from '../dxlabel/DxLabel';
import './DxTextbox.scss';
export default function DxTextbox(props) {
    var _a = useState(props.changeDebounceMs || 300), debounceMs = _a[0], setDebounceMs = _a[1];
    var _b = useState(props.initialValue || ''), value = _b[0], setValue = _b[1];
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useState(Date.now()), escapePressed = _d[0], setEscapePressed = _d[1];
    var _e = useState(undefined), step = _e[0], setStep = _e[1];
    var _f = useState(undefined), timer = _f[0], setTimer = _f[1];
    // Constructor
    useEffect(function () {
        // Register global key bindings
        document.addEventListener('keydown', globalKeyBindings, false);
        return function () {
            document.removeEventListener('keydown', globalKeyBindings, false);
        };
    }, []);
    // Escape pressed
    useEffect(function () {
        var _a;
        if (!isFocused)
            return;
        setValue('');
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [escapePressed]);
    // Value changed
    useEffect(function () {
        if (props.inputType === 'decimal') {
            // Normalize step setting
            if (!isNaN(parseFloat(value))) {
                var match = /\.(.+)/.exec(value);
                console.log(match);
                if (match) {
                    var s = "0.".concat(Array.apply(null, Array(match[1].length - 1))
                        .map(function () { return '0'; })
                        .join(''), "1");
                    console.log(s);
                    setStep(s);
                }
            }
        }
        else if (props.inputType === 'integer') {
            // Overwrite value as integer to forcibly truncate floating point numbers
            setValue(parseInt(value).toString());
        }
        // Debounce onChange notification
        if (!props.onChange)
            return;
        clearTimeout(timer);
        setTimer(setTimeout(function () { return (props.onChange ? props.onChange(value) : undefined); }, debounceMs));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    // Update state from props
    useEffect(function () {
        setDebounceMs(props.changeDebounceMs || 300);
    }, [props.changeDebounceMs]);
    // Normalize inputRef
    var inputRef = useRef(null);
    if (props.inputRef)
        inputRef = props.inputRef;
    var hasLabel = props.label && props.label !== '';
    // Global key bindings
    function globalKeyBindings(event) {
        // Escape - cancel search
        if (event.key === 'Escape') {
            event.stopPropagation();
            event.preventDefault();
            setEscapePressed(Date.now());
            return;
        }
    }
    // Normalize input type
    var inputType = props.inputType;
    if (inputType === 'integer' || inputType === 'decimal')
        inputType = 'number';
    // TODO: handle props.inputType
    var component = (React.createElement("div", { className: "dx-textbox".concat(hasLabel ? ' with-label' : ''), style: {} },
        props.icon ? React.createElement(GenesysDevIcon, { icon: props.icon, className: 'input-icon' }) : undefined,
        React.createElement("input", { className: 'dx-input', type: inputType, step: step, value: value, placeholder: props.placeholder, onChange: function (e) { return setValue(e.target.value); }, ref: inputRef, onFocus: function () {
                setIsFocused(true);
                if (props.onFocus)
                    props.onFocus();
            }, onBlur: function () {
                setIsFocused(false);
                if (props.onBlur)
                    props.onBlur();
            } }),
        props.clearButton && (value || isFocused) ? (React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppTimes, className: 'clear-icon', onClick: function () { return setValue(''); } })) : undefined));
    // Render
    return (React.createElement(DxLabel, { label: props.label, description: props.description }, component));
}
