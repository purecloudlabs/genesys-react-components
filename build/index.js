import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$c = ".dx-accordion {\n  margin: 0;\n}\n.dx-accordion .accordion-heading {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #bfd4e4;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #54565a;\n  padding: 13px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.dx-accordion .accordion-heading .icon {\n  line-height: 0;\n}\n.dx-accordion .accordion-content {\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid #bfd4e4;\n}\n.dx-accordion .accordion-content *:first-child {\n  margin-top: 0;\n}\n.dx-accordion .accordion-content *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$c);

function DxAccordion(props) {
    const [isOpen, setIsOpen] = useState(props.showOpen || false);
    return (React.createElement("div", { className: 'dx-accordion' },
        React.createElement("div", { className: 'accordion-heading', onClick: () => setIsOpen(!isOpen) },
            props.title,
            " ",
            React.createElement(GenesysDevIcon, { icon: isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown })),
        isOpen ? React.createElement("div", { className: 'accordion-content' }, props.children) : undefined));
}

var css_248z$b = ".dx-accordion-group {\n  margin: 40px 0;\n}";
styleInject(css_248z$b);

function DxAccordionGroup(props) {
    return React.createElement("div", { className: 'dx-accordion-group' }, props.children);
}

var css_248z$a = ".dx-button {\n  margin: 15px 10px;\n  border-radius: 2px;\n  padding: 8px 15px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.dx-button-primary {\n  color: #ffffff;\n  border: 1px solid #419bb2;\n  background-color: #419bb2;\n}\n.dx-button-primary:hover {\n  background-color: #317b8d;\n  border-color: #317b8d;\n  transition: 0.1s;\n}\n.dx-button-primary:focus {\n  background-color: #419bb2;\n  border-color: #419bb2;\n  box-shadow: 0 0 0 2px #aac9ff;\n  transition: 0.1s;\n}\n.dx-button-primary:disabled {\n  background-color: #9aafb540;\n  border-color: #9aafb540;\n  transition: 0.1s;\n}\n.dx-button-secondary {\n  color: #419bb2;\n  border: 1px solid #419bb2;\n  background-color: #ffffff;\n}\n.dx-button-secondary:hover {\n  color: #317b8d;\n  border-color: #317b8d;\n  transition: 0.1s;\n}\n.dx-button-secondary:focus {\n  color: #419bb2;\n  border-color: #419bb2;\n  box-shadow: 0 0 0 2px #aac9ff;\n  transition: 0.1s;\n}\n.dx-button-secondary:disabled {\n  color: #8a9a9e;\n  background-color: #e0e6e8;\n  border-color: #e0e6e8;\n  transition: 0.1s;\n}";
styleInject(css_248z$a);

function DxButton(props) {
    let classNames = ['dx-button'];
    classNames.push(`dx-button-${props.type || 'primary'}`);
    if (props.className)
        classNames.push(props.className);
    const handleClick = (e) => {
        if (!props.onClick)
            return;
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
    };
    return (React.createElement("button", { className: classNames.join(' '), type: 'button', onClick: handleClick, disabled: props.disabled === true }, props.children));
}

var css_248z$9 = ".dx-item-group {\n  display: block;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n.dx-item-group label {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin: 15px 0;\n}\n.dx-item-group label:first-of-type {\n  margin-top: 0;\n}\n.dx-item-group label .label-text {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #75757a;\n}";
styleInject(css_248z$9);

var css_248z$8 = ".dx-item-group input[type=checkbox] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  flex-shrink: 0;\n}\n.dx-item-group input[type=checkbox]::before {\n  display: none;\n}\n.dx-item-group input[type=checkbox]:checked {\n  background-color: #8a96a3;\n}\n.dx-item-group input[type=checkbox]:checked::before {\n  display: block;\n  position: relative;\n  top: 7px;\n  left: 3px;\n  font-size: 9px;\n  line-height: 0;\n  color: #ffffff;\n  content: \"\\f103\";\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.dx-item-group input[type=checkbox]:not(:disabled):hover {\n  border-color: #4d5061;\n}\n.dx-item-group input[type=checkbox]:not(:disabled):focus {\n  outline: #aac9ff solid 2px;\n}\n.dx-item-group input[type=checkbox]:not(:disabled):focus-visible {\n  outline: 0;\n}";
styleInject(css_248z$8);

var css_248z$7 = ".dx-item-group input[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #8a96a3;\n  border-radius: 8px;\n  background-color: #ffffff;\n  flex-shrink: 0;\n}\n.dx-item-group input[type=radio]::before {\n  display: none;\n}\n.dx-item-group input[type=radio]:checked::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 8px;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  background-color: #8a96a3;\n}\n.dx-item-group input[type=radio]:not(:disabled):hover {\n  border-color: #4d5061;\n}\n.dx-item-group input[type=radio]:not(:disabled):focus {\n  outline: #aac9ff solid 2px;\n}\n.dx-item-group input[type=radio]:not(:disabled):focus-visible {\n  outline: 0;\n}";
styleInject(css_248z$7);

var css_248z$6 = ".dx-select-group {\n  appearance: none;\n  position: relative;\n}\n.dx-select-group select {\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n  padding: 8px 32px 8px 12px;\n  width: 100%;\n  appearance: none;\n}\n.dx-select-group select:focus-visible {\n  outline: 2px solid #aac9ff;\n}\n.dx-select-group select option {\n  background: #aac9ff -webkit-linear-gradient(bottom, #aac9ff 0%, #aac9ff 100%);\n}\n.dx-select-group::after {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  content: \"\\f104\";\n  font-size: 8px;\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  pointer-events: none;\n}";
styleInject(css_248z$6);

var css_248z$5 = ".dx-multiselect-group {\n  appearance: none;\n  position: relative;\n}\n.dx-multiselect-group select {\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n  width: 100%;\n  appearance: none;\n  scrollbar-color: #b0b2b5 transparent;\n}\n.dx-multiselect-group select:focus-visible {\n  outline: 2px solid #aac9ff;\n}\n.dx-multiselect-group select option {\n  overflow: hidden;\n  white-space: pre;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 31px;\n  padding: 8px 12px;\n  color: #75757a;\n}\n.dx-multiselect-group select option:checked {\n  background: #aac9ff -webkit-linear-gradient(bottom, #aac9ff 0%, #aac9ff 100%);\n}\n.dx-multiselect-group select::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n.dx-multiselect-group select::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: #b0b2b5;\n}\n.dx-multiselect-group select::-webkit-scrollbar-corner {\n  background: transparent;\n}";
styleInject(css_248z$5);

var css_248z$4 = ".dx-label {\n  margin: 20px 0;\n  display: block;\n}\n.dx-label .label-text,\n.dx-label .input-description {\n  display: block;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n}\n.dx-label .label-text {\n  margin: 0 0 4px 0;\n}\n.dx-label .input-description {\n  padding: 6px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 8px;\n}\n.dx-label .input-description .icon {\n  color: #597393;\n  line-height: 0;\n}";
styleInject(css_248z$4);

function DxLabel(props) {
    const hasLabel = props.label && props.label !== '';
    const description = props.description ? (React.createElement("div", { className: 'input-description' },
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

function DxItemGroup(props) {
    const [data, setData] = useState(props.items.map((item) => {
        return { item, isSelected: false };
    }));
    const [id] = useState(v4());
    // data changed
    useEffect(() => {
        if (props.onItemsChanged)
            props.onItemsChanged(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    // Handle checkbox changed
    const onChange = (idx, item, e) => {
        if (props.onItemChanged)
            props.onItemChanged(item, e.target.checked);
        let newData = [...data];
        // Unselect everything if it's radio buttons
        if (props.format === 'radio')
            newData.forEach((value) => (value.isSelected = false));
        // Set the selected state of the new item
        newData[idx].isSelected = e.target.checked;
        setData(newData);
    };
    switch (props.format) {
        case 'multiselect':
        case 'dropdown': {
            return (React.createElement(DxLabel, { label: props.title, description: props.description },
                React.createElement("div", { className: `dx-item-group${props.format === 'multiselect' ? ' dx-multiselect-group' : ' dx-select-group'}` },
                    React.createElement("select", { multiple: props.format === 'multiselect' }, data.map((d, i) => (React.createElement("option", { key: i, value: d.item.value }, d.item.label)))))));
        }
        case 'checkbox':
        case 'radio':
        default: {
            return (React.createElement(DxLabel, { label: props.title, description: props.description, className: 'dx-item-group', useFieldset: true }, data.map((d, i) => (React.createElement("label", { key: i },
                React.createElement("input", { type: props.format, name: props.format === 'checkbox' ? `${id}-${i}` : id, id: d.item.label, value: d.item.value, checked: d.isSelected, onChange: (e) => onChange(i, d.item, e) }),
                React.createElement("span", { className: 'label-text' }, d.item.label))))));
        }
    }
}

var css_248z$3 = ".dx-tabbed-content {\n  margin: 40px 0;\n}\n.dx-tabbed-content .tab-titles {\n  border-bottom: 1px solid #bfd4e4;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n}\n.dx-tabbed-content .tab-titles .tab-title {\n  display: inline-block;\n  padding: 5px 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n.dx-tabbed-content .tab-titles .tab-title.active {\n  border-bottom-color: #597393;\n  font-weight: bold;\n}\n.dx-tabbed-content .tab-titles .tab-title p {\n  margin: 0;\n  display: inline;\n}\n.dx-tabbed-content .tab-content {\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid #bfd4e4;\n}\n.dx-tabbed-content .tab-content *:first-child {\n  margin-top: 0;\n}\n.dx-tabbed-content .tab-content *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$3);

function DxTabbedContent(props) {
    const [activeTab, setActiveTab] = useState(props.initialTabId || 0);
    const [titles] = useState(
    // Scrape titles from child elements
    React.Children.toArray(props.children).map((child) => {
        if (!child || !child.props || !child.props.title)
            return 'Unknown title';
        return child.props.title;
    }));
    return (React.createElement("div", { className: 'dx-tabbed-content' },
        React.createElement("div", { className: 'tab-titles' }, titles.map((title, i) => (React.createElement("span", { key: i, className: `tab-title${i === activeTab ? ' active' : ''}`, onClick: () => setActiveTab(i) }, title)))),
        React.createElement("div", { className: 'tab-content' }, React.Children.toArray(props.children)[activeTab])));
}

var css_248z$2 = "";
styleInject(css_248z$2);

function DxTabPanel(props) {
    return React.createElement("div", { className: 'dx-tab-panel' }, props.children);
}

var css_248z$1 = ".dx-textbox {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #c6cbd1;\n  border-radius: 2px;\n  margin: 0;\n  padding: 0 10px;\n  height: 32px;\n}\n.dx-textbox.with-label {\n  margin-top: 0;\n}\n.dx-textbox:focus-within {\n  outline: #aac9ff solid 2px;\n}\n.dx-textbox .icon {\n  display: block;\n  flex: none;\n  color: #75757a;\n}\n.dx-textbox .icon.input-icon {\n  font-size: 14px;\n  line-height: 0;\n}\n.dx-textbox .icon.clear-icon {\n  font-size: 11px;\n  line-height: 0;\n  cursor: pointer;\n  padding: 4px;\n  margin-right: -4px;\n}\n.dx-textbox input {\n  flex-grow: 1;\n  border: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n  height: 32px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: #272d2d;\n}\n.dx-textbox input:focus-visible {\n  outline: 0;\n}\n.dx-textbox input::placeholder {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n  color: #757576;\n}";
styleInject(css_248z$1);

function DxTextbox(props) {
    const [debounceMs, setDebounceMs] = useState(props.changeDebounceMs || 300);
    const [value, setValue] = useState(props.initialValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [escapePressed, setEscapePressed] = useState(Date.now());
    const [step, setStep] = useState(undefined);
    let [timer, setTimer] = useState(undefined);
    // Constructor
    useEffect(() => {
        // Register global key bindings
        document.addEventListener('keydown', globalKeyBindings, false);
        return () => {
            document.removeEventListener('keydown', globalKeyBindings, false);
        };
    }, []);
    // Escape pressed
    useEffect(() => {
        var _a;
        if (!isFocused)
            return;
        setValue('');
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [escapePressed]);
    // Value changed
    useEffect(() => {
        if (props.inputType === 'decimal') {
            // Normalize step setting
            if (!isNaN(parseFloat(value))) {
                const match = /\.(.+)/.exec(value);
                console.log(match);
                if (match) {
                    const s = `0.${Array.apply(null, Array(match[1].length - 1))
                        .map(() => '0')
                        .join('')}1`;
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
        setTimer(setTimeout(() => (props.onChange ? props.onChange(value) : undefined), debounceMs));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    // Update state from props
    useEffect(() => {
        setDebounceMs(props.changeDebounceMs || 300);
    }, [props.changeDebounceMs]);
    // Normalize inputRef
    let inputRef = useRef(null);
    if (props.inputRef)
        inputRef = props.inputRef;
    const hasLabel = props.label && props.label !== '';
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
    let inputType = props.inputType;
    if (inputType === 'integer' || inputType === 'decimal')
        inputType = 'number';
    // TODO: handle props.inputType
    let component = (React.createElement("div", { className: `dx-textbox${hasLabel ? ' with-label' : ''}`, style: {} },
        props.icon ? React.createElement(GenesysDevIcon, { icon: props.icon, className: 'input-icon' }) : undefined,
        React.createElement("input", { className: 'dx-input', type: inputType, step: step, value: value, placeholder: props.placeholder, onChange: (e) => setValue(e.target.value), ref: inputRef, onFocus: () => {
                setIsFocused(true);
                if (props.onFocus)
                    props.onFocus();
            }, onBlur: () => {
                setIsFocused(false);
                if (props.onBlur)
                    props.onBlur();
            } }),
        props.clearButton && (value || isFocused) ? (React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppTimes, className: 'clear-icon', onClick: () => setValue('') })) : undefined));
    // Render
    return (React.createElement(DxLabel, { label: props.label, description: props.description }, component));
}

var css_248z = ".dx-toggle-container {\n  display: inline-block;\n}\n.dx-toggle-container .dx-toggle {\n  background: #f5f8fb;\n  border: 1px solid #c6cbd1;\n  border-radius: 6px;\n  height: 26px;\n  padding: 0px 4px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2px;\n  cursor: pointer;\n}\n.dx-toggle-container .dx-toggle:hover .slider {\n  border-color: #aac9ff;\n}\n.dx-toggle-container .dx-toggle .icon {\n  font-size: 10px;\n  line-height: 0;\n  margin: 0 5px;\n  color: #c4c4c4;\n}\n.dx-toggle-container .dx-toggle .clear-placeholder {\n  width: 19px;\n  padding: 0 1px 0 0;\n  margin: 0;\n  display: block;\n}\n.dx-toggle-container .dx-toggle .slider {\n  height: 22px;\n  width: 22px;\n  border-radius: 22px;\n  background-color: #419bb2;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid transparent;\n}\n.dx-toggle-container .dx-toggle .slider .icon {\n  font-size: 10px;\n  line-height: 0;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n}";
styleInject(css_248z);

function DxToggle(props) {
    const [value, setValue] = useState(props.isTriState ? props.initialValue : props.initialValue || false);
    const trueIcon = props.trueIcon || GenesysDevIcons.AppCheck;
    const falseIcon = props.falseIcon || GenesysDevIcons.AppTimes;
    useEffect(() => {
        if (props.onChange)
            props.onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const toggleValue = () => {
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

export { DxAccordion, DxAccordionGroup, DxButton, DxItemGroup, DxLabel, DxTabPanel, DxTabbedContent, DxTextbox, DxToggle };
//# sourceMappingURL=index.js.map
