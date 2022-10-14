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

var css_248z$g = ".dx-accordion {\n  margin: 0;\n}\n.dx-accordion .accordion-heading {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #bfd4e4;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #54565a;\n  padding: 13px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.dx-accordion .accordion-heading .icon {\n  line-height: 0;\n}\n.dx-accordion .accordion-heading__left {\n  align-self: left;\n}\n.dx-accordion .accordion-content {\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid #bfd4e4;\n}\n.dx-accordion .accordion-content > *:first-child {\n  margin-top: 0;\n}\n.dx-accordion .accordion-content > *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$g);

function DxAccordion(props) {
    const [isOpen, setIsOpen] = useState(props.showOpen || false);
    const [expandTrigger, setExpandTrigger] = useState(props.expandTrigger);
    const [showOpenTrigger, setShowOpenTrigger] = useState(props.showOpenTrigger);
    // This one forcibly opens the component
    React.useEffect(() => {
        if (props.expandTrigger !== expandTrigger) {
            setIsOpen(true);
            setExpandTrigger(props.expandTrigger);
        }
    }, [props.expandTrigger, expandTrigger]);
    // This one forcibly recalculates the state based on the value for props.showOpen
    React.useEffect(() => {
        if (props.showOpenTrigger !== showOpenTrigger) {
            setIsOpen(props.showOpen);
            setShowOpenTrigger(props.showOpenTrigger);
        }
    }, [props.showOpenTrigger, showOpenTrigger, props.showOpen]);
    React.useEffect(() => {
        if (props.showOpen === true || props.showOpen === false)
            setIsOpen(props.showOpen);
    }, [props.showOpen]);
    let style = {};
    if (props.headingColor)
        style.color = props.headingColor;
    let icon;
    if (props.headingIcon)
        icon = React.createElement(GenesysDevIcon, { icon: props.headingIcon, className: "heading-icon" });
    return (React.createElement("div", { id: props.containerId || undefined, className: `dx-accordion${props.className ? ' ' + props.className : ''}` },
        React.createElement("div", { className: "accordion-heading", style: style, onClick: () => setIsOpen(!isOpen) },
            React.createElement("span", { className: "accordion-heading__left" },
                icon,
                " ",
                props.title),
            ' ',
            React.createElement(GenesysDevIcon, { icon: isOpen ? GenesysDevIcons.AppChevronUp : GenesysDevIcons.AppChevronDown })),
        isOpen ? React.createElement("div", { className: "accordion-content" }, props.children) : undefined));
}

var css_248z$f = ".dx-accordion-group {\n  margin: 40px 0;\n}";
styleInject(css_248z$f);

function DxAccordionGroup(props) {
    return React.createElement("div", { className: `dx-accordion-group${props.className ? ' ' + props.className : ''}` }, props.children);
}

var css_248z$e = ".dx-button {\n  margin: 15px 10px;\n  border-radius: 2px;\n  padding: 8px 15px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.dx-button-primary {\n  color: #ffffff;\n  border: 1px solid #419bb2;\n  background-color: #419bb2;\n}\n.dx-button-primary:hover {\n  background-color: #317b8d;\n  border-color: #317b8d;\n  transition: 0.1s;\n}\n.dx-button-primary:focus {\n  background-color: #419bb2;\n  border-color: #419bb2;\n  box-shadow: 0 0 0 2px #aac9ff;\n  transition: 0.1s;\n}\n.dx-button-primary:disabled {\n  background-color: #9aafb540;\n  border-color: #9aafb540;\n  transition: 0.1s;\n  cursor: not-allowed;\n}\n.dx-button-secondary {\n  color: #419bb2;\n  border: 1px solid #419bb2;\n  background-color: #ffffff;\n}\n.dx-button-secondary:hover {\n  color: #317b8d;\n  border-color: #317b8d;\n  transition: 0.1s;\n}\n.dx-button-secondary:focus {\n  color: #419bb2;\n  border-color: #419bb2;\n  box-shadow: 0 0 0 2px #aac9ff;\n  transition: 0.1s;\n}\n.dx-button-secondary:disabled {\n  color: #8a9a9e;\n  background-color: #e0e6e8;\n  border-color: #e0e6e8;\n  transition: 0.1s;\n  cursor: not-allowed;\n}\n.dx-button-link {\n  color: #2f7bb1;\n  background: transparent;\n  margin: 0;\n  padding: 0 2px;\n  border: 0;\n}\n.dx-button-link:hover {\n  color: #1c5176;\n}\n.dx-button-link:disabled {\n  color: #8a9a9e;\n  transition: 0.1s;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}";
styleInject(css_248z$e);

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
    return (React.createElement("button", { className: classNames.join(' '), type: "button", onClick: handleClick, disabled: props.disabled === true }, props.children));
}

var css_248z$d = ".dx-item-group {\n  display: block;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}";
styleInject(css_248z$d);

var css_248z$c = "";
styleInject(css_248z$c);

var css_248z$b = ".dx-select-group {\n  appearance: none;\n  position: relative;\n}\n.dx-select-group select {\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n  padding: 8px 32px 8px 12px;\n  width: 100%;\n  appearance: none;\n}\n.dx-select-group select:focus-visible {\n  outline: 2px solid #aac9ff;\n}\n.dx-select-group::after {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  content: \"\\f104\";\n  font-size: 8px;\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  pointer-events: none;\n}\n.dx-select-group.disabled::after {\n  color: #8a9a9e;\n}\n.dx-select-group.disabled select:disabled {\n  background-color: #e6ebec;\n  border-color: #e8eaed;\n  color: #8a9a9e;\n  cursor: not-allowed;\n}";
styleInject(css_248z$b);

var css_248z$a = ".dx-multiselect-group {\n  appearance: none;\n  position: relative;\n}\n.dx-multiselect-group select {\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n  width: 100%;\n  appearance: none;\n  scrollbar-color: #b0b2b5 transparent;\n}\n.dx-multiselect-group select:focus-visible {\n  outline: 2px solid #aac9ff;\n}\n.dx-multiselect-group select option {\n  overflow: hidden;\n  white-space: pre;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 31px;\n  padding: 8px 12px;\n  color: #75757a;\n}\n.dx-multiselect-group select option:checked {\n  background: #aac9ff -webkit-linear-gradient(bottom, #aac9ff 0%, #aac9ff 100%);\n}\n.dx-multiselect-group select option:disabled {\n  color: #8a9a9e;\n  cursor: not-allowed;\n}\n.dx-multiselect-group select::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n.dx-multiselect-group select::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: #b0b2b5;\n}\n.dx-multiselect-group select::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.dx-multiselect-group.disabled select:disabled {\n  background-color: #e6ebec;\n  border-color: #e8eaed;\n  cursor: not-allowed;\n}\n.dx-multiselect-group.disabled select:disabled option {\n  color: #8a9a9e;\n}";
styleInject(css_248z$a);

var css_248z$9 = ".dx-label {\n  margin: 20px 0;\n  display: block;\n}\n.dx-label .label-text,\n.dx-label .input-description {\n  display: block;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  color: #75757a;\n}\n.dx-label .label-text {\n  margin: 0 0 4px 0;\n}\n.dx-label .input-description {\n  padding: 6px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 8px;\n}\n.dx-label .input-description .icon {\n  color: #597393;\n  line-height: 0;\n}";
styleInject(css_248z$9);

function DxLabel(props) {
    const hasLabel = props.label && props.label !== '';
    const description = props.description ? (React.createElement("div", { className: 'input-description' },
        React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppInfoSolid }),
        React.createElement("span", null, props.description))) : undefined;
    const contents = (React.createElement(React.Fragment, null,
        ' ',
        hasLabel ? React.createElement("span", { className: 'label-text' }, props.label) : undefined,
        props.children,
        description));
    const className = `dx-label${props.className ? ' ' + props.className : ''}`;
    if (props.useFieldset) {
        return React.createElement("fieldset", { className: className }, contents);
    }
    return React.createElement("label", { className: className }, contents);
}

var css_248z$8 = ".dx-checkbox {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin: 15px 0;\n}\n.dx-checkbox:first-of-type {\n  margin-top: 0;\n}\n.dx-checkbox .label-text {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #75757a;\n}\n.dx-checkbox input[type=checkbox] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #8a96a3;\n  border-radius: 2px;\n  background-color: #ffffff;\n  flex-shrink: 0;\n}\n.dx-checkbox input[type=checkbox]::before {\n  display: none;\n}\n.dx-checkbox input[type=checkbox]:checked {\n  background-color: #8a96a3;\n}\n.dx-checkbox input[type=checkbox]:checked::before {\n  display: block;\n  position: relative;\n  top: 7px;\n  left: 3px;\n  font-size: 9px;\n  line-height: 0;\n  color: #ffffff;\n  content: \"\\f103\";\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):hover {\n  border-color: #4d5061;\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):focus {\n  outline: #aac9ff solid 2px;\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):focus-visible {\n  outline: 0;\n}\n.dx-checkbox input[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #8a96a3;\n  border-radius: 8px;\n  background-color: #ffffff;\n  flex-shrink: 0;\n}\n.dx-checkbox input[type=radio]::before {\n  display: none;\n}\n.dx-checkbox input[type=radio]:checked::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 8px;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  background-color: #8a96a3;\n}\n.dx-checkbox input[type=radio]:not(:disabled):hover {\n  border-color: #4d5061;\n}\n.dx-checkbox input[type=radio]:not(:disabled):focus {\n  outline: #aac9ff solid 2px;\n}\n.dx-checkbox input[type=radio]:not(:disabled):focus-visible {\n  outline: 0;\n}\n.dx-checkbox.disabled {\n  cursor: not-allowed;\n}\n.dx-checkbox.disabled input {\n  border-color: #e8eaed;\n  cursor: not-allowed;\n}\n.dx-checkbox.disabled input:checked {\n  background-color: #e8eaed;\n  cursor: not-allowed;\n}\n\n.dx-label .dx-checkbox .label-text {\n  margin: 0;\n}";
styleInject(css_248z$8);

function DxCheckbox(props) {
    let initialValue = props.checked !== undefined ? props.checked : props.initiallyChecked || false;
    const [checked, setChecked] = useState(initialValue);
    useEffect(() => {
        if (props.checked === undefined || props.checked === checked)
            return;
        setChecked(props.checked);
    }, [props.checked]);
    useEffect(() => {
        if (props.onCheckChanged)
            props.onCheckChanged(checked);
    }, [checked]);
    return (React.createElement("label", { className: `dx-checkbox${props.className ? ' ' + props.className : ''}${props.disabled ? ' disabled' : ''}` },
        React.createElement("input", { type: props.useRadioType ? 'radio' : 'checkbox', name: props.name, value: props.itemValue, checked: checked, onChange: (e) => setChecked(e.target.checked), disabled: props.disabled === true }),
        React.createElement("span", { className: 'label-text' }, props.label)));
}

function DxItemGroup(props) {
    var _a, _b;
    const [data, setData] = useState(props.items.map((item) => {
        return { item, isSelected: item.isSelected !== undefined ? item.isSelected : false };
    }));
    const [id] = useState(v4());
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [format, setFormat] = useState(props.format);
    const [disabled, setDisabled] = useState(props.disabled);
    const [className, setClassName] = useState(props.className);
    // data changed
    useEffect(() => {
        if (props.onItemsChanged)
            props.onItemsChanged(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    // Recalculate on props changed
    useEffect(() => {
        setTitle(props.title);
        setDescription(props.description);
        setFormat(props.format);
        setDisabled(props.disabled);
        setClassName(props.className);
    }, [props.title, props.description, props.format, props.items, props.disabled, props.className]);
    useEffect(() => {
        setData(props.items.map((item) => {
            return { item, isSelected: item.isSelected !== undefined ? item.isSelected : false };
        }));
    }, [props.items]);
    // Handle individual item changed
    const itemChanged = (idx, item, checked) => {
        if (props.onItemChanged)
            props.onItemChanged(item, checked);
        let newData = [...data];
        // Unselect everything if it's radio buttons
        if (format === 'radio')
            newData.forEach((value) => (value.isSelected = false));
        // Set the selected state of the new item
        newData[idx].isSelected = checked;
        setData(newData);
    };
    const selectChanged = (e) => {
        const options = e.target.options;
        let newData = [...data];
        // Assign selected value for each item in the list
        for (let i = 0; i < options.length; i++) {
            const thisItem = newData.find((value) => value.item.value === options[i].value);
            thisItem.isSelected = options[i].selected;
        }
        // Update entire data list
        setData(newData);
        // Trigger individual update
        const changedItemIdx = newData.findIndex((value) => value.item.value === e.target.value);
        if (changedItemIdx >= 0)
            itemChanged(changedItemIdx, newData[changedItemIdx].item, newData[changedItemIdx].isSelected);
    };
    switch (format) {
        case 'multiselect':
        case 'dropdown': {
            const isMulti = format === 'multiselect';
            return (React.createElement(DxLabel, { label: title, description: description, className: className },
                React.createElement("div", { className: `dx-item-group${isMulti ? ' dx-multiselect-group' : ' dx-select-group'}${disabled ? ' disabled' : ''}` },
                    React.createElement("select", { multiple: isMulti, disabled: disabled === true, onChange: (e) => selectChanged(e), value: isMulti
                            ? (_a = data.filter((item) => item.isSelected)) === null || _a === void 0 ? void 0 : _a.map((item) => item.item.value)
                            : (_b = data.find((item) => item.isSelected)) === null || _b === void 0 ? void 0 : _b.item.value }, data.map((d, i) => (React.createElement("option", { key: i, value: d.item.value, disabled: d.item.disabled }, d.item.label)))))));
        }
        case 'checkbox':
        case 'radio':
        default: {
            return (React.createElement(DxLabel, { label: title, description: description, className: `dx-item-group${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`, useFieldset: true },
                React.createElement("div", { onChange: (e) => {
                        var _a;
                        const i = data.findIndex((d) => { var _a; return d.item.value === ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value); });
                        if (i < 0)
                            return;
                        itemChanged(i, data[i].item, (_a = e.target) === null || _a === void 0 ? void 0 : _a.checked);
                    } }, data.map((d, i) => (React.createElement(DxCheckbox, { key: d.item.value, name: format === 'checkbox' ? `${id}-${d.item.value}` : id, label: d.item.label, itemValue: d.item.value, checked: d.isSelected, useRadioType: format === 'radio', disabled: disabled || d.item.disabled }))))));
        }
    }
}

var css_248z$7 = ".dx-tabbed-content {\n  margin: 40px 0;\n}\n.dx-tabbed-content .tab-titles {\n  border-bottom: 1px solid #bfd4e4;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n}\n.dx-tabbed-content .tab-titles .tab-title {\n  display: inline-block;\n  padding: 5px 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n.dx-tabbed-content .tab-titles .tab-title:hover {\n  border-color: #bfd4e4;\n}\n.dx-tabbed-content .tab-titles .tab-title.active {\n  border-bottom-color: #597393;\n  font-weight: bold;\n}\n.dx-tabbed-content .tab-titles .tab-title p {\n  margin: 0;\n  display: inline;\n}\n.dx-tabbed-content .tab-content {\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid #bfd4e4;\n}\n.dx-tabbed-content .tab-content > *:first-child {\n  margin-top: 0;\n}\n.dx-tabbed-content .tab-content > *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$7);

function DxTabbedContent(props) {
    const [activeTab, setActiveTab] = useState(props.initialTabId || 0);
    const [titles] = useState(
    // Scrape titles from child elements
    React.Children.toArray(props.children).map((child) => {
        if (!child || !child.props || !child.props.title)
            return 'Unknown title';
        return child.props.title;
    }));
    return (React.createElement("div", { className: `dx-tabbed-content${props.className ? ' ' + props.className : ''}` },
        React.createElement("div", { className: 'tab-titles' }, titles.map((title, i) => (React.createElement("span", { key: i, className: `tab-title${i === activeTab ? ' active' : ''}`, onClick: () => setActiveTab(i) }, title)))),
        React.createElement("div", { className: 'tab-content' }, React.Children.toArray(props.children)[activeTab])));
}

var css_248z$6 = "";
styleInject(css_248z$6);

function DxTabPanel(props) {
    return React.createElement("div", { className: `dx-tab-panel${props.className ? ' ' + props.className : ''}` }, props.children);
}

var css_248z$5 = ".dx-textbox {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #c6cbd1;\n  border-radius: 2px;\n  margin: 0;\n  padding: 0 10px;\n  height: 32px;\n  background-color: #ffffff;\n}\n.dx-textbox.with-label {\n  margin-top: 0;\n}\n.dx-textbox:focus-within {\n  outline: #aac9ff solid 2px;\n}\n.dx-textbox .icon {\n  display: block;\n  flex: none;\n  color: #75757a;\n}\n.dx-textbox .icon.input-icon {\n  font-size: 14px;\n  line-height: 0;\n}\n.dx-textbox .icon.clear-icon {\n  font-size: 11px;\n  line-height: 0;\n  cursor: pointer;\n  padding: 4px;\n  margin-right: -4px;\n}\n.dx-textbox .dx-input {\n  flex-grow: 1;\n  border: 0;\n  background: transparent;\n  box-sizing: border-box;\n  height: 32px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: #272d2d;\n}\n.dx-textbox .dx-input:focus-visible {\n  outline: 0;\n}\n.dx-textbox .dx-input::placeholder {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n  color: #757576;\n}\n.dx-textbox.disabled {\n  background-color: #e6ebec;\n  border-color: #e8eaed;\n  cursor: not-allowed;\n}\n.dx-textbox.disabled input {\n  cursor: not-allowed;\n  color: #75757a;\n}\n.dx-textbox.disabled .icon,\n.dx-textbox.disabled input::placeholder {\n  color: #ffffff;\n}\n\n.dx-textarea {\n  padding: 10px;\n  border: 1px solid #c6cbd1;\n  border-radius: 2px;\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n.dx-textarea:focus-within {\n  outline: #aac9ff solid 2px;\n}\n.dx-textarea::placeholder {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n  color: #757576;\n}";
styleInject(css_248z$5);

function DxTextbox(props) {
    const [debounceMs, setDebounceMs] = useState(props.changeDebounceMs || 300);
    const [value, setValue] = useState(props.initialValue || props.value || '');
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
    // Value prop updated
    useEffect(() => {
        // Ignore value changed if initial value was set; they're mutually exclusive
        if (!props.initialValue) {
            setValue(props.value || '');
        }
    }, [props.value]);
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
    let inputRef; // = useRef<HTMLInputElement>(null);
    if (props.inputRef)
        inputRef = props.inputRef;
    else if (props.inputType === 'textarea')
        inputRef = useRef(null);
    else
        inputRef = useRef(null);
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
    let component;
    switch (inputType) {
        case 'textarea': {
            component = (React.createElement("textarea", { className: "dx-textarea", placeholder: props.placeholder, ref: inputRef, value: value, onChange: (e) => setValue(e.target.value), onFocus: () => {
                    setIsFocused(true);
                    if (props.onFocus)
                        props.onFocus();
                }, onBlur: () => {
                    setIsFocused(false);
                    if (props.onBlur)
                        props.onBlur();
                }, disabled: props.disabled === true, autoFocus: props.autoFocus }));
            break;
        }
        // TODO: special handling for other inputType values
        default: {
            component = (React.createElement("div", { className: `dx-textbox${hasLabel ? ' with-label' : ''}${props.disabled ? ' disabled' : ''}` },
                props.icon ? React.createElement(GenesysDevIcon, { icon: props.icon, className: "input-icon" }) : undefined,
                React.createElement("input", { className: "dx-input", type: inputType, step: step, value: value, placeholder: props.placeholder, onChange: (e) => setValue(e.target.value), ref: inputRef, onFocus: () => {
                        setIsFocused(true);
                        if (props.onFocus)
                            props.onFocus();
                    }, onBlur: () => {
                        setIsFocused(false);
                        if (props.onBlur)
                            props.onBlur();
                    }, disabled: props.disabled === true, autoFocus: props.autoFocus }),
                props.clearButton && (value || isFocused) && !props.disabled ? (React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppTimes, className: "clear-icon", onClick: () => setValue('') })) : undefined));
        }
    }
    // Render
    return (React.createElement(DxLabel, { label: props.label, description: props.description, className: props.className }, component));
}

var css_248z$4 = ".dx-toggle-container {\n  display: inline-block;\n}\n.dx-toggle-container .dx-toggle {\n  background: #f5f8fb;\n  border: 1px solid #c6cbd1;\n  border-radius: 6px;\n  height: 26px;\n  padding: 0px 4px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2px;\n  cursor: pointer;\n}\n.dx-toggle-container .dx-toggle:hover .slider {\n  border-color: #aac9ff;\n}\n.dx-toggle-container .dx-toggle .icon {\n  font-size: 10px;\n  line-height: 0;\n  margin: 0 5px;\n  color: #c4c4c4;\n}\n.dx-toggle-container .dx-toggle .clear-placeholder {\n  width: 19px;\n  padding: 0 1px 0 0;\n  margin: 0;\n  display: block;\n}\n.dx-toggle-container .dx-toggle .slider {\n  height: 22px;\n  width: 22px;\n  border-radius: 22px;\n  background-color: #419bb2;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid transparent;\n}\n.dx-toggle-container .dx-toggle .slider .icon {\n  font-size: 10px;\n  line-height: 0;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n}\n.dx-toggle-container.disabled .dx-toggle {\n  border-color: #e8eaed;\n  color: #ffffff;\n  cursor: not-allowed;\n}\n.dx-toggle-container.disabled .dx-toggle:hover .slider {\n  border-color: transparent;\n}\n.dx-toggle-container.disabled .dx-toggle .slider {\n  color: #8a9a9e;\n  background-color: #e0e6e8;\n}";
styleInject(css_248z$4);

function DxToggle(props) {
    let initialValue = props.value !== undefined ? props.value : props.initialValue;
    if (!props.isTriState)
        initialValue = initialValue || false;
    const [value, setValue] = useState(initialValue);
    const trueIcon = props.trueIcon || GenesysDevIcons.AppCheck;
    const falseIcon = props.falseIcon || GenesysDevIcons.AppTimes;
    useEffect(() => {
        if (props.initialValue || props.value === value || (!props.isTriState && props.value === undefined))
            return;
        setValue(props.value);
    }, [props.value]);
    useEffect(() => {
        if (props.onChange)
            props.onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const toggleValue = () => {
        if (props.disabled)
            return;
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
    return (React.createElement(DxLabel, { label: props.label, description: props.description, className: props.className },
        React.createElement("div", { className: `dx-toggle-container${props.disabled ? ' disabled' : ''}` },
            React.createElement("div", { className: 'dx-toggle', onClick: toggleValue },
                value !== false ? React.createElement(GenesysDevIcon, { icon: falseIcon }) : undefined,
                value === true && props.isTriState ? React.createElement("div", { className: 'clear-placeholder' }, "\u00A0") : undefined,
                React.createElement("div", { className: 'slider' }, value !== undefined ? React.createElement(GenesysDevIcon, { icon: value ? trueIcon : falseIcon }) : undefined),
                value === false && props.isTriState ? React.createElement("div", { className: 'clear-placeholder' }, "\u00A0") : undefined,
                value !== true ? React.createElement(GenesysDevIcon, { icon: trueIcon }) : undefined))));
}

var css_248z$3 = "/*** \n * Core colors\n ***/\n/*** \n* Component-specific properties \n***/\n/*** \n* Theme definitions\n***/\n.alert-container {\n  margin: 40px 0;\n  padding: 0;\n}\n.toc-link + .alert-container {\n  margin-top: 0;\n}\n.alert-container .alert {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 20px;\n  background-color: var(--theme-alertblock-default-background-color);\n  border: 1px solid var(--theme-alertblock-default-border-color);\n  color: var(--theme-alertblock-default-text-color);\n  border-radius: 4px;\n  padding: 15px 20px;\n  font-size: 14px;\n  line-height: 14px;\n}\n.alert-container .alert .clickable {\n  cursor: pointer;\n}\n.alert-container .alert .info-icon {\n  display: inline-block;\n  font-size: 16px;\n  line-height: 0;\n  margin-top: 2px;\n  color: var(--theme-alertblock-default-icon-color);\n}\n.alert-container .alert .alert-content {\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 20px;\n  margin: 0;\n}\n.alert-container .alert .alert-content .alert-title {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n.alert-container .alert .alert-content .alert-title.collapsed {\n  margin-bottom: 0;\n}\n.alert-container .alert p:last-of-type {\n  margin-bottom: 0;\n}\n.alert-container .alert.alert-info {\n  color: var(--theme-alertblock-info-text-color);\n  background-color: var(--theme-alertblock-info-background-color);\n  border-color: var(--theme-alertblock-info-border-color);\n}\n.alert-container .alert.alert-info .icon {\n  color: var(--theme-alertblock-info-icon-color);\n}\n.alert-container .alert.alert-warning {\n  color: var(--theme-alertblock-warning-text-color);\n  background-color: var(--theme-alertblock-warning-background-color);\n  border-color: var(--theme-alertblock-warning-border-color);\n}\n.alert-container .alert.alert-warning .icon {\n  color: var(--theme-alertblock-warning-icon-color);\n}\n.alert-container .alert.alert-critical {\n  color: var(--theme-alertblock-critical-text-color);\n  background-color: var(--theme-alertblock-critical-background-color);\n  border-color: var(--theme-alertblock-critical-border-color);\n}\n.alert-container .alert.alert-critical .icon {\n  color: var(--theme-alertblock-critical-icon-color);\n}\n.alert-container .alert.alert-success {\n  color: var(--theme-alertblock-success-text-color);\n  background-color: var(--theme-alertblock-success-background-color);\n  border-color: var(--theme-alertblock-success-border-color);\n}\n.alert-container .alert.alert-success .icon {\n  color: var(--theme-alertblock-success-icon-color);\n}\n.alert-container .alert.alert-toast {\n  color: var(--theme-alertblock-toast-text-color);\n  background-color: var(--theme-alertblock-toast-background-color);\n  border-color: var(--theme-alertblock-toast-border-color);\n}\n.alert-container .alert.alert-toast .icon {\n  color: var(--theme-alertblock-toast-icon-color);\n}";
styleInject(css_248z$3);

function AlertBlock(props) {
    const isCollapsible = props.collapsible === false ? false : props.collapsible || props.autoCollapse || false;
    const [isCollapsed, setIsCollapsed] = useState(isCollapsible ? props.autoCollapse || false : false);
    let title;
    if (props.title) {
        title = (React.createElement("div", { className: `alert-title${isCollapsible ? ' clickable' : ''}${isCollapsed ? ' collapsed' : ''}`, onClick: isCollapsible ? () => setIsCollapsed(!isCollapsed) : undefined }, props.title));
    }
    let icon;
    switch (props.alertType) {
        case 'info': {
            icon = React.createElement(GenesysDevIcon, { className: "info-icon", icon: GenesysDevIcons.AppInfoSolid });
            break;
        }
        case 'success': {
            icon = React.createElement(GenesysDevIcon, { className: "info-icon", icon: GenesysDevIcons.AppSuccessSolid });
            break;
        }
        case 'critical': {
            icon = React.createElement(GenesysDevIcon, { className: "info-icon", icon: GenesysDevIcons.AppCriticalSolid });
            break;
        }
        case 'warning': {
            icon = React.createElement(GenesysDevIcon, { className: "info-icon", icon: GenesysDevIcons.AppWarnSolid });
            break;
        }
    }
    if (icon && isCollapsible) {
        icon = (React.createElement("span", { className: "clickable", onClick: () => setIsCollapsed(!isCollapsed) }, icon));
    }
    //TODO: remove the card fence classes and build a proper collapser
    return (React.createElement("div", { className: `alert-container${props.indentation && props.indentation > 0 ? ` indent-${props.indentation}` : ''} ${props.className || ''}` },
        React.createElement("div", { className: `alert alert-${props.alertType}`, role: "alert" },
            icon,
            React.createElement("div", { className: "alert-content" },
                title,
                isCollapsed ? undefined : React.createElement("div", null, props.children)),
            isCollapsible ? (React.createElement("span", { className: "clickable", onClick: () => setIsCollapsed(!isCollapsed) },
                React.createElement(GenesysDevIcon, { icon: isCollapsed ? GenesysDevIcons.AppChevronDown : GenesysDevIcons.AppChevronUp }))) : undefined)));
}

var css_248z$2 = "/*** \n * Core colors\n ***/\n/*** \n* Component-specific properties \n***/\n/*** \n* Theme definitions\n***/\n.loading-placeholder {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 60px auto;\n}\n.loading-placeholder .text {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--theme-loadingplaceholder-text-color);\n  position: relative;\n  top: 5px;\n  left: 5px;\n  opacity: 0.5;\n}\n.loading-placeholder div {\n  position: absolute;\n  border: 4px solid var(--theme-loadingplaceholder-wave-color);\n  opacity: 1;\n  border-radius: 50%;\n  animation: loading-placeholder 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.loading-placeholder div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes loading-placeholder {\n  0% {\n    top: 80px;\n    left: 80px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 160px;\n    height: 160px;\n    opacity: 0;\n  }\n}";
styleInject(css_248z$2);

function LoadingPlaceholder(props) {
    return (React.createElement("div", { className: "loading-placeholder" },
        React.createElement("span", { className: "text" }, props.text || 'Loading'),
        React.createElement("div", null),
        React.createElement("div", null)));
}

var css_248z$1 = "/* Custom properties */\n:root {\n  --tooltip-text-color: white;\n  --tooltip-background-color: black;\n  --tooltip-margin: 10px;\n  --tooltip-arrow-size: 6px;\n}\n\n/* Wrapping */\n.tooltip-container {\n  display: inline-block;\n  position: relative;\n  line-height: 0;\n  /* Absolute positioning */\n}\n.tooltip-container .tooltip-tip {\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px;\n  color: var(--tooltip-text-color);\n  background: var(--tooltip-background-color);\n  font-size: 14px;\n  line-height: 1;\n  z-index: 10000;\n  max-width: 300px;\n  width: max-content;\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 1.1s ease-out, opacity 1s ease-out;\n  /* CSS border triangles */\n  /* Absolute positioning */\n  /* Absolute positioning */\n  /* Absolute positioning */\n  /* Absolute positioning */\n}\n.tooltip-container .tooltip-tip.visible {\n  opacity: 1;\n  visibility: visible;\n  transition: visibility 0s, opacity 0.1s ease-in;\n}\n.tooltip-container .tooltip-tip::before {\n  content: \" \";\n  left: 50%;\n  border: solid transparent;\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-width: var(--tooltip-arrow-size);\n  margin-left: calc(var(--tooltip-arrow-size) * -1);\n}\n.tooltip-container .tooltip-tip.top {\n  bottom: 130%;\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.top::before {\n  top: 100%;\n  border-top-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.right {\n  left: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.right::before {\n  left: calc(var(--tooltip-arrow-size) * -1);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-right-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.bottom {\n  top: 110%;\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.bottom::before {\n  bottom: 100%;\n  border-bottom-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.left {\n  left: auto;\n  right: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.left::before {\n  left: auto;\n  right: calc(var(--tooltip-arrow-size) * -2);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-left-color: var(--tooltip-background-color);\n}";
styleInject(css_248z$1);

// Inspired by https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/
function Tooltip(props) {
    const [isShowing, setIsShowing] = useState(false);
    const timeout = useRef();
    useEffect(() => {
        if (props.isShowing === undefined)
            return;
        setIsShowing(props.isShowing === true);
    }, [props.isShowing]);
    const showTip = (e) => {
        // Ignore mouse events from the tooltip itself
        if (e.target.className.includes('tooltip-tip'))
            return;
        // Ignore mouse events when manually controlled
        if (props.isShowing !== undefined)
            return;
        timeout.current = setTimeout(() => {
            setIsShowing(true);
        }, 100);
    };
    const hideTip = () => {
        if (props.isShowing !== undefined)
            return;
        if (timeout.current)
            clearInterval(timeout.current);
        setIsShowing(false);
    };
    return (React.createElement("div", { className: `tooltip-container ${props.className || ''}`, onMouseEnter: showTip, onMouseLeave: hideTip },
        props.children,
        React.createElement("div", { className: `tooltip-tip ${props.position || 'top'}${isShowing ? ' visible' : ''}` }, props.text)));
}

var css_248z = "/*** \n * Core colors\n ***/\n/*** \n* Component-specific properties \n***/\n/*** \n* Theme definitions\n***/\n.copy-button {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: var(--theme-core-text-color);\n}";
styleInject(css_248z);

function CopyButton(props) {
    let [copyState, setCopyState] = useState(false);
    // Copy function will set the component state to indicate we have copied the record and then show the tool tip. With the copyState set to true we will see 'Copied'
    const copyCode = (e) => {
        e.stopPropagation();
        setCopyState(true);
        navigator.clipboard.writeText(props.copyText);
        return;
    };
    // Once we lose focus on the copy button, we want to set the copyState to false so that we can hide the tool tip and set the default tool tip to ''
    const loseFocus = () => {
        setCopyState(false);
        return;
    };
    const buttonClasses = ['copy-button'];
    if (props.className)
        buttonClasses.push(props.className);
    return (React.createElement(React.Fragment, null,
        React.createElement(Tooltip, { isShowing: copyState, text: "Copied", position: props.tooltipPosition },
            React.createElement("button", { type: "button", className: buttonClasses.join(' '), onClick: copyCode, onMouseOut: loseFocus },
                React.createElement(GenesysDevIcon, { icon: GenesysDevIcons.AppCopy })))));
}

export { AlertBlock, CopyButton, DxAccordion, DxAccordionGroup, DxButton, DxCheckbox, DxItemGroup, DxLabel, DxTabPanel, DxTabbedContent, DxTextbox, DxToggle, LoadingPlaceholder, Tooltip };
//# sourceMappingURL=index.js.map
