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

var css_248z$h = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-accordion {\n  margin: 0;\n}\n.dx-accordion .accordion-heading {\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: var(--theme-core-layout-border-color);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: var(--theme-core-text-color);\n  padding: 13px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.dx-accordion .accordion-heading .icon {\n  line-height: 0;\n}\n.dx-accordion .accordion-heading__left {\n  align-self: left;\n}\n.dx-accordion .accordion-content {\n  color: var(--theme-core-text-color);\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid var(--theme-core-layout-border-color);\n}\n.dx-accordion .accordion-content > *:first-child {\n  margin-top: 0;\n}\n.dx-accordion .accordion-content > *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$h);

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

var css_248z$g = ".dx-accordion-group {\n  margin: 40px 0;\n}";
styleInject(css_248z$g);

function DxAccordionGroup(props) {
    return React.createElement("div", { className: `dx-accordion-group${props.className ? ' ' + props.className : ''}` }, props.children);
}

var css_248z$f = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-button {\n  margin: 15px 10px;\n  border-radius: 2px;\n  padding: 8px 15px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.dx-button-primary {\n  color: var(--theme-dxbutton-primary-text-color);\n  border: 1px solid var(--theme-dxbutton-primary-background-color);\n  background-color: var(--theme-dxbutton-primary-background-color);\n}\n.dx-button-primary:hover {\n  background-color: var(--theme-dxbutton-primary-hover-background-color);\n  border-color: var(--theme-dxbutton-primary-hover-background-color);\n  transition: 0.1s;\n}\n.dx-button-primary:focus {\n  background-color: var(--theme-dxbutton-primary-background-color);\n  border-color: var(--theme-dxbutton-primary-background-color);\n  box-shadow: 0 0 0 2px var(--theme-dxbutton-primary-shadow-color);\n  transition: 0.1s;\n}\n.dx-button-primary:disabled {\n  background-color: var(--theme-dxbutton-primary-disabled-background-color);\n  border-color: var(--theme-dxbutton-primary-disabled-background-color);\n  transition: 0.1s;\n  cursor: not-allowed;\n}\n.dx-button-secondary {\n  background-color: var(--theme-dxbutton-secondary-background-color);\n  border: 1px solid var(--theme-dxbutton-secondary-border-color);\n  color: var(--theme-dxbutton-secondary-border-color);\n}\n.dx-button-secondary:hover {\n  color: var(--theme-dxbutton-secondary-hover-border-color);\n  border-color: var(--theme-dxbutton-secondary-border-color);\n  transition: 0.1s;\n}\n.dx-button-secondary:focus {\n  color: var(--theme-dxbutton-secondary-border-color);\n  border-color: var(--theme-dxbutton-secondary-border-color);\n  box-shadow: 0 0 0 2px var(--theme-dxbutton-secondary-shadow-color);\n  transition: 0.1s;\n}\n.dx-button-secondary:disabled {\n  color: var(--theme-dxbutton-secondary-disabled-text-color);\n  background-color: var(--theme-dxbutton-secondary-disabled-background-color);\n  border-color: var(--theme-dxbutton-secondary-disabled-background-color);\n  transition: 0.1s;\n  cursor: not-allowed;\n}\n.dx-button-link {\n  color: var(--theme-core-link-color);\n  background: transparent;\n  margin: 0;\n  padding: 0 2px;\n  border: 0;\n}\n.dx-button-link:hover {\n  color: var(--theme-core-link-hover-color);\n  border-color: var(--theme-dxbutton-secondary-border-color);\n}\n.dx-button-link:disabled {\n  color: #8a9a9e;\n  transition: 0.1s;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}";
styleInject(css_248z$f);

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

var css_248z$e = ".dx-item-group {\n  display: block;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}";
styleInject(css_248z$e);

var css_248z$d = "";
styleInject(css_248z$d);

var css_248z$c = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-select-group {\n  appearance: none;\n  position: relative;\n}\n.dx-select-group select {\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 2px;\n  background-color: var(--theme-core-control-alt-background-color);\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--theme-core-control-textbox-text-color);\n  padding: 8px 32px 8px 12px;\n  width: 100%;\n  appearance: none;\n}\n.dx-select-group select:focus-visible {\n  outline: 2px solid var(--theme-core-control-focus-color);\n}\n.dx-select-group::after {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  content: \"\\f105\";\n  font-size: 8px;\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  pointer-events: none;\n}\n.dx-select-group.disabled::after {\n  color: var(--theme-core-control-disabled-text-color);\n}\n.dx-select-group.disabled select:disabled {\n  background-color: var(--theme-core-control-disabled-background-color);\n  border-color: var(--theme-core-control-disabled-border-color);\n  color: var(--theme-core-control-disabled-text-color);\n  cursor: not-allowed;\n}";
styleInject(css_248z$c);

var css_248z$b = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-multiselect-group {\n  appearance: none;\n  position: relative;\n}\n.dx-multiselect-group select {\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 2px;\n  background-color: var(--theme-core-control-alt-background-color);\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--theme-core-control-textbox-text-color);\n  width: 100%;\n  appearance: none;\n  scrollbar-color: #b0b2b5 transparent;\n}\n.dx-multiselect-group select:focus-visible {\n  outline: 2px solid var(--theme-core-control-focus-color);\n}\n.dx-multiselect-group select option {\n  overflow: hidden;\n  white-space: pre;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 31px;\n  padding: 8px 12px;\n  color: var(--theme-core-control-textbox-text-color);\n}\n.dx-multiselect-group select option:checked {\n  color: var(--theme-core-tag-text-color);\n  background-color: var(--theme-core-tag-background-color);\n}\n.dx-multiselect-group select option:disabled {\n  color: #8a9a9e;\n  cursor: not-allowed;\n}\n.dx-multiselect-group select::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n.dx-multiselect-group select::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: #b0b2b5;\n}\n.dx-multiselect-group select::-webkit-scrollbar-corner {\n  background: transparent;\n}\n.dx-multiselect-group.disabled select:disabled {\n  background-color: var(--theme-core-control-disabled-background-color);\n  border-color: var(--theme-core-control-disabled-border-color);\n  cursor: not-allowed;\n}\n.dx-multiselect-group.disabled select:disabled option {\n  color: var(--theme-core-control-disabled-text-color);\n}";
styleInject(css_248z$b);

var css_248z$a = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-label {\n  margin: 20px 0;\n  display: block;\n}\n.dx-label .label-text,\n.dx-label .input-description {\n  display: block;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--theme-core-control-label-color);\n}\n.dx-label .label-text {\n  margin: 0 0 4px 0;\n}\n.dx-label .input-description {\n  padding: 6px 20px;\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 8px;\n}\n.dx-label .input-description .icon {\n  color: var(--theme-alertblock-info-icon-color);\n  line-height: 0;\n}";
styleInject(css_248z$a);

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

var css_248z$9 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-checkbox {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin: 15px 0;\n}\n.dx-checkbox:first-of-type {\n  margin-top: 0;\n}\n.dx-checkbox .label-text {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--theme-core-text-color);\n}\n.dx-checkbox input[type=checkbox] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 2px;\n  background-color: var(--theme-core-control-background-color);\n  flex-shrink: 0;\n}\n.dx-checkbox input[type=checkbox]::before {\n  display: none;\n}\n.dx-checkbox input[type=checkbox]:checked {\n  background-color: var(--theme-core-control-background-color);\n}\n.dx-checkbox input[type=checkbox]:checked::before {\n  display: block;\n  position: relative;\n  top: 7px;\n  left: 3px;\n  font-size: 9px;\n  line-height: 0;\n  color: var(--theme-core-control-punch-color);\n  content: \"\\f104\";\n  font-family: genesys-dev-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):hover {\n  border-color: var(--theme-core-control-punch-color);\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):focus {\n  outline: var(--theme-core-control-focus-color) solid 2px;\n}\n.dx-checkbox input[type=checkbox]:not(:disabled):focus-visible {\n  outline: 0;\n}\n.dx-checkbox input[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0 8px 0 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 8px;\n  background-color: var(--theme-core-control-background-color);\n  flex-shrink: 0;\n}\n.dx-checkbox input[type=radio]::before {\n  display: none;\n}\n.dx-checkbox input[type=radio]:checked::before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 8px;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  background-color: var(--theme-core-control-punch-color);\n}\n.dx-checkbox input[type=radio]:not(:disabled):hover {\n  border-color: var(--theme-core-control-punch-color);\n}\n.dx-checkbox input[type=radio]:not(:disabled):focus {\n  outline: var(--theme-core-control-focus-color) solid 2px;\n}\n.dx-checkbox input[type=radio]:not(:disabled):focus-visible {\n  outline: 0;\n}\n.dx-checkbox.disabled {\n  cursor: not-allowed;\n}\n.dx-checkbox.disabled input {\n  border-color: var(--theme-core-control-disabled-border-color);\n  cursor: not-allowed;\n}\n.dx-checkbox.disabled input:checked {\n  background-color: var(--theme-core-control-disabled-background-color);\n  cursor: not-allowed;\n}\n\n.dx-label .dx-checkbox .label-text {\n  margin: 0;\n}";
styleInject(css_248z$9);

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

var css_248z$8 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-tabbed-content {\n  margin: 40px 0;\n}\n.dx-tabbed-content .tab-titles {\n  border-bottom: 1px solid var(--theme-core-layout-border-color);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n}\n.dx-tabbed-content .tab-titles .tab-title {\n  display: inline-block;\n  padding: 5px 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n}\n.dx-tabbed-content .tab-titles .tab-title:hover {\n  border-color: var(--theme-core-control-punch-color);\n}\n.dx-tabbed-content .tab-titles .tab-title.active {\n  border-bottom-color: var(--theme-core-control-punch-color);\n  font-weight: bold;\n}\n.dx-tabbed-content .tab-titles .tab-title p {\n  margin: 0;\n  display: inline;\n}\n.dx-tabbed-content .tab-content {\n  padding: 13px 20px 20px 20px;\n  border-bottom: 1px solid var(--theme-core-layout-border-color);\n}\n.dx-tabbed-content .tab-content > *:first-child {\n  margin-top: 0;\n}\n.dx-tabbed-content .tab-content > *:last-child {\n  margin-bottom: 0;\n}";
styleInject(css_248z$8);

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

var css_248z$7 = "";
styleInject(css_248z$7);

function DxTabPanel(props) {
    return React.createElement("div", { className: `dx-tab-panel${props.className ? ' ' + props.className : ''}` }, props.children);
}

var css_248z$6 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-textbox {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 2px;\n  margin: 0;\n  padding: 0 10px;\n  height: 32px;\n  background-color: var(--theme-core-control-alt-background-color);\n}\n.dx-textbox.with-label {\n  margin-top: 0;\n}\n.dx-textbox:focus-within {\n  outline: #aac9ff solid 2px;\n}\n.dx-textbox .icon {\n  display: block;\n  flex: none;\n  color: var(--theme-core-control-textbox-text-color);\n}\n.dx-textbox .icon.input-icon {\n  font-size: 14px;\n  line-height: 0;\n}\n.dx-textbox .icon.clear-icon {\n  font-size: 11px;\n  line-height: 0;\n  cursor: pointer;\n  padding: 4px;\n  margin-right: -4px;\n}\n.dx-textbox .dx-input {\n  flex-grow: 1;\n  border: 0;\n  background: transparent;\n  box-sizing: border-box;\n  height: 32px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--theme-core-control-textbox-text-color);\n}\n.dx-textbox .dx-input:focus-visible {\n  outline: 0;\n}\n.dx-textbox .dx-input::placeholder {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--theme-core-control-textbox-placeholder-text-color);\n}\n.dx-textbox.disabled {\n  background-color: var(--theme-dxbutton-secondary-disabled-background-color);\n  cursor: not-allowed;\n}\n.dx-textbox.disabled input {\n  cursor: not-allowed;\n  color: var(--theme-dxbutton-secondary-disabled-text-color);\n}\n.dx-textbox.disabled .icon,\n.dx-textbox.disabled input::placeholder {\n  color: var(--theme-dxbutton-secondary-disabled-text-color);\n}\n\n.dx-textarea {\n  padding: 10px;\n  border: 1px solid var(--theme-core-control-border-color);\n  border-radius: 2px;\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n  background-color: var(--theme-core-control-alt-background-color);\n  color: var(--theme-core-control-textbox-text-color);\n}\n.dx-textarea:focus-within {\n  outline: var(--theme-core-control-focus-color) solid 2px;\n}\n.dx-textarea::placeholder {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--theme-core-control-textbox-placeholder-text-color);\n}";
styleInject(css_248z$6);

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
        if (!isFocused || props.clearOnEscape === false)
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

var css_248z$5 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.dx-toggle-container {\n  display: inline-block;\n}\n.dx-toggle-container .dx-toggle {\n  border: 1px solid var(--theme-core-control-border-color);\n  background: var(--theme-core-control-background-color);\n  border-radius: 6px;\n  height: 26px;\n  padding: 0px 4px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2px;\n  cursor: pointer;\n}\n.dx-toggle-container .dx-toggle:hover .slider {\n  border-color: var(--theme-core-control-focus-color);\n}\n.dx-toggle-container .dx-toggle .icon {\n  font-size: 10px;\n  line-height: 0;\n  margin: 0 5px;\n  color: var(--theme-core-control-border-color);\n}\n.dx-toggle-container .dx-toggle .clear-placeholder {\n  width: 19px;\n  padding: 0 1px 0 0;\n  margin: 0;\n  display: block;\n}\n.dx-toggle-container .dx-toggle .slider {\n  height: 22px;\n  width: 22px;\n  border-radius: 22px;\n  background-color: var(--theme-core-control-punch-color);\n  box-shadow: 0px 1px 2px var(--theme-core-box-shadow-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid transparent;\n}\n.dx-toggle-container .dx-toggle .slider .icon {\n  font-size: 10px;\n  line-height: 0;\n  color: var(--theme-core-control-background-color);\n  padding: 0;\n  margin: 0;\n}\n.dx-toggle-container.disabled .dx-toggle {\n  cursor: not-allowed;\n  opacity: 0.7;\n  border-color: var(--theme-core-control-border-color);\n  color: var(--theme-core-control-background-color);\n}\n.dx-toggle-container.disabled .dx-toggle:hover .slider {\n  border-color: transparent;\n}\n.dx-toggle-container.disabled .dx-toggle .slider {\n  opacity: 0.7;\n  color: var(--theme-core-control-background-color);\n  background-color: var(--theme-core-control-punch-color);\n}";
styleInject(css_248z$5);

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

var css_248z$4 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.alert-container {\n  margin: 40px 0;\n  padding: 0;\n}\n.toc-link + .alert-container {\n  margin-top: 0;\n}\n.alert-container .alert {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 20px;\n  background-color: var(--theme-alertblock-default-background-color);\n  border: 1px solid var(--theme-alertblock-default-border-color);\n  color: var(--theme-alertblock-default-text-color);\n  border-radius: 4px;\n  padding: 15px 20px;\n  font-size: 14px;\n  line-height: 14px;\n}\n.alert-container .alert .clickable {\n  cursor: pointer;\n}\n.alert-container .alert .info-icon {\n  display: inline-block;\n  font-size: 16px;\n  line-height: 0;\n  margin-top: 2px;\n  color: var(--theme-alertblock-default-icon-color);\n}\n.alert-container .alert .alert-content {\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 20px;\n  margin: 0;\n}\n.alert-container .alert .alert-content .alert-title {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n.alert-container .alert .alert-content .alert-title.collapsed {\n  margin-bottom: 0;\n}\n.alert-container .alert p:last-of-type {\n  margin-bottom: 0;\n}\n.alert-container .alert.alert-info {\n  color: var(--theme-alertblock-info-text-color);\n  background-color: var(--theme-alertblock-info-background-color);\n  border-color: var(--theme-alertblock-info-border-color);\n}\n.alert-container .alert.alert-info .icon {\n  color: var(--theme-alertblock-info-icon-color);\n}\n.alert-container .alert.alert-warning {\n  color: var(--theme-alertblock-warning-text-color);\n  background-color: var(--theme-alertblock-warning-background-color);\n  border-color: var(--theme-alertblock-warning-border-color);\n}\n.alert-container .alert.alert-warning .icon {\n  color: var(--theme-alertblock-warning-icon-color);\n}\n.alert-container .alert.alert-critical {\n  color: var(--theme-alertblock-critical-text-color);\n  background-color: var(--theme-alertblock-critical-background-color);\n  border-color: var(--theme-alertblock-critical-border-color);\n}\n.alert-container .alert.alert-critical .icon {\n  color: var(--theme-alertblock-critical-icon-color);\n}\n.alert-container .alert.alert-success {\n  color: var(--theme-alertblock-success-text-color);\n  background-color: var(--theme-alertblock-success-background-color);\n  border-color: var(--theme-alertblock-success-border-color);\n}\n.alert-container .alert.alert-success .icon {\n  color: var(--theme-alertblock-success-icon-color);\n}\n.alert-container .alert.alert-toast {\n  color: var(--theme-alertblock-toast-text-color);\n  background-color: var(--theme-alertblock-toast-background-color);\n  border-color: var(--theme-alertblock-toast-border-color);\n}\n.alert-container .alert.alert-toast .icon {\n  color: var(--theme-alertblock-toast-icon-color);\n}";
styleInject(css_248z$4);

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

var css_248z$3 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.loading-placeholder {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 60px auto;\n}\n.loading-placeholder .text {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--theme-loadingplaceholder-text-color);\n  position: relative;\n  top: 5px;\n  left: 5px;\n  opacity: 0.5;\n}\n.loading-placeholder div {\n  position: absolute;\n  border: 4px solid var(--theme-loadingplaceholder-wave-color);\n  opacity: 1;\n  border-radius: 50%;\n  animation: loading-placeholder 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.loading-placeholder div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes loading-placeholder {\n  0% {\n    top: 80px;\n    left: 80px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 160px;\n    height: 160px;\n    opacity: 0;\n  }\n}";
styleInject(css_248z$3);

// SimCity loading messages! https://gist.github.com/erikcox/7e96d031d00d7ecb1a2f
const MESSAGES = [
    'Adding Hidden Agendas',
    'Adjusting Bell Curves',
    'Aesthesizing Industrial Areas',
    'Aligning Covariance Matrices',
    'Applying Feng Shui Shaders',
    'Applying Theatre Soda Layer',
    'Asserting Packed Exemplars',
    'Attempting to Lock Back-Buffer',
    'Binding Sapling Root System',
    'Building Data Trees',
    'Bureacritizing Bureaucracies',
    'Calculating Inverse Probability Matrices',
    'Calculating Llama Expectoration Trajectory',
    'Calibrating Blue Skies',
    'Charging Ozone Layer',
    'Coalescing Cloud Formations',
    'Cohorting Exemplars',
    'Collecting Meteor Particles',
    'Compounding Inert Tessellations',
    'Compressing Fish Files',
    'Computing Optimal Bin Packing',
    'Concatenating Sub-Contractors',
    'Containing Existential Buffer',
    'Debunching Unionized Commercial Services',
    'Deciding What Message to Display Next',
    'Decomposing Singular Values',
    'Decrementing Tectonic Plates',
    'Deleting Ferry Routes',
    'Depixelating Inner Mountain Surface Back Faces',
    'Deunionizing Bulldozers',
    'Dicing Models',
    'Diluting Livestock Nutrition Variables',
    'Downloading Satellite Terrain Data',
    'Exposing Flash Variables to Streak System',
    'Extracting Resources',
    'Flushing Pipe Network',
    'Gathering Particle Sources',
    'Generating Jobs',
    'Gesticulating Mimes',
    'Graphing Whale Migration',
    'Hiding Willio Webnet Mask',
    'Increasing Accuracy of RCI Simulators',
    'Increasing Magmafacation',
    'Initializing My Sim Tracking Mechanism',
    'Initializing Robotic Click-Path AI',
    'Inserting Sublimated Messages',
    'Integrating Curves',
    'Integrating Illumination Form Factors',
    'Integrating Population Graphs',
    'Iterating Cellular Automata',
    'Lecturing Errant Subsystems',
    'Modeling Object Components',
    'Mopping Occupant Leaks',
    'Normalizing Power',
    'Obfuscating Quigley Matrix',
    'Partitioning Singularities',
    'Perturbing Matrices',
    'Polishing Water Highlights',
    'Populating Lot Templates',
    'Preparing Sprites for Random Walks',
    'Prioritizing Landmarks',
    'Projecting Law Enforcement Pastry Intake',
    'Realigning Alternate Time Frames',
    'Relaxing Splines',
    'Removing Road Network Speed Bumps',
    'Removing Texture Gradients',
    'Removing Vehicle Avoidance Behavior',
    'Reticulating Splines',
    'Retracting Phong Shader',
    'Retrieving from Back Store',
    'Reverse Engineering Image Consultant',
    'Routing Neural Network Infanstructure',
    'Scattering Rhino Food Sources',
    'Scrubbing Terrain',
    'Searching for Llamas',
    'Seeding Architecture Simulation Parameters',
    'Sequencing Particles',
    'Setting Advisor Moods',
    'Setting Inner Deity Indicators',
    'Setting Universal Physical Constants',
    'Sonically Enhancing Occupant-Free Timber',
    'Speculating Stock Market Indices',
    'Splatting Transforms',
    'Stratifying Ground Layers',
    'Sub-Sampling Water Data',
    'Synthesizing Gravity',
    'Synthesizing Wavelets',
    'Time-Compressing Simulator Clock',
    'Unable to Reveal Current Activity',
];
function LoadingPlaceholder(props) {
    return (React.createElement("div", { className: "loading-placeholder" },
        React.createElement("span", { className: "text" }, props.text || MESSAGES[Math.floor(Math.random() * (MESSAGES.length - 1))]),
        React.createElement("div", null),
        React.createElement("div", null)));
}

var css_248z$2 = "/* Custom properties */\n:root {\n  --tooltip-text-color: white;\n  --tooltip-background-color: black;\n  --tooltip-margin: 10px;\n  --tooltip-arrow-size: 6px;\n}\n\n/* Wrapping */\n.tooltip-container {\n  display: inline-block;\n  position: relative;\n  line-height: 0;\n  /* Absolute positioning */\n}\n.tooltip-container .tooltip-tip {\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px;\n  color: var(--tooltip-text-color);\n  background: var(--tooltip-background-color);\n  font-size: 14px;\n  line-height: 1;\n  z-index: 10000;\n  max-width: 300px;\n  width: max-content;\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 1.1s ease-out, opacity 1s ease-out;\n  /* CSS border triangles */\n  /* Absolute positioning */\n  /* Absolute positioning */\n  /* Absolute positioning */\n  /* Absolute positioning */\n}\n.tooltip-container .tooltip-tip.visible {\n  opacity: 1;\n  visibility: visible;\n  transition: visibility 0s, opacity 0.1s ease-in;\n}\n.tooltip-container .tooltip-tip::before {\n  content: \" \";\n  left: 50%;\n  border: solid transparent;\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-width: var(--tooltip-arrow-size);\n  margin-left: calc(var(--tooltip-arrow-size) * -1);\n}\n.tooltip-container .tooltip-tip.top {\n  bottom: 130%;\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.top::before {\n  top: 100%;\n  border-top-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.right {\n  left: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.right::before {\n  left: calc(var(--tooltip-arrow-size) * -1);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-right-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.bottom {\n  top: 110%;\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.bottom::before {\n  bottom: 100%;\n  border-bottom-color: var(--tooltip-background-color);\n}\n.tooltip-container .tooltip-tip.left {\n  left: auto;\n  right: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  /* CSS border triangles */\n}\n.tooltip-container .tooltip-tip.left::before {\n  left: auto;\n  right: calc(var(--tooltip-arrow-size) * -2);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-left-color: var(--tooltip-background-color);\n}";
styleInject(css_248z$2);

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

var css_248z$1 = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.copy-button {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: var(--theme-core-text-color);\n}";
styleInject(css_248z$1);

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 4

function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;

  if (arrLength === 2) {
    // prettier-ignore
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }

  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }

  if (arrLength >= 4) {
    // Currently does not support more than 4 extra
    // class names (after `.token` has been removed)
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}

var classNameCombinations = {};

function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');

  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }

  return classNameCombinations[key];
}

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  var nonTokenClassNames = classNames.filter(function (className) {
    return className !== 'token';
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function (styleObject, className) {
    return _objectSpread$1(_objectSpread$1({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;

    if (!useInlineStyles) {
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function (classes, selector) {
        selector.split('.').forEach(function (className) {
          if (!classes.includes(className)) classes.push(className);
        });
        return classes;
      }, []); // For compatibility with older versions of react-syntax-highlighter

      var startingClassName = properties.className && properties.className.includes('token') ? ['token'] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function (className) {
        return !allStylesheetSelectors.includes(className);
      }));
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(className) || undefined,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }

    var children = childrenCreator(node.children);
    return /*#__PURE__*/React.createElement(TagName, _extends({
      key: key
    }, props), children);
  }
}

var checkForListedLanguage = (function (astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
});

var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return /*#__PURE__*/React.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}

function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === void 0 ? {
    "float": 'left',
    paddingRight: '10px'
  } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;
  return /*#__PURE__*/React.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}

function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}

function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [{
      type: 'text',
      value: lineNumber
    }]
  };
}

function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  // minimally necessary styling for line numbers
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  }; // prep custom styling

  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle; // combine

  var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);

  return assembledStyle;
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineNumberStyle = _ref3.lineNumberStyle,
      largestLineNumber = _ref3.largestLineNumber,
      showInlineLineNumbers = _ref3.showInlineLineNumbers,
      _ref3$lineProps = _ref3.lineProps,
      lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className,
      showLineNumbers = _ref3.showLineNumbers,
      wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;

  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }

  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread(_objectSpread({}, properties.style), {}, {
      display: 'flex'
    });
  }

  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function (i) {
        return newTree.push(i);
      });
    }
  }

  return newTree;
}

function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;

  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  function createWrappedLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createLineElement({
      children: children,
      lineNumber: lineNumber,
      lineNumberStyle: lineNumberStyle,
      largestLineNumber: largestLineNumber,
      showInlineLineNumbers: showInlineLineNumbers,
      lineProps: lineProps,
      className: className,
      showLineNumbers: showLineNumbers,
      wrapLongLines: wrapLongLines
    });
  }

  function createUnwrappedLine(children, lineNumber) {
    if (showLineNumbers && lineNumber && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
      children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }

    return children;
  }

  function createLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
  }

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        }; // if it's the first line

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          var _line = createLine(_children, lineNumber);

          newTree.push(_line); // if it's the last line
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: 'text',
            value: "".concat(text)
          };

          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];

            var _line2 = createLine(_children2, lineNumber, node.properties.className);

            newTree.push(_line2);
          } // if it's neither the first nor the last line

        } else {
          var _children3 = [newChild];

          var _line3 = createLine(_children3, lineNumber, node.properties.className);

          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }

  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}

function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
      stylesheet = _ref5.stylesheet,
      useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return createElement({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
} // only highlight.js has the highlightAuto method


function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}

function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
      language = _ref6.language,
      code = _ref6.code,
      defaultCodeValue = _ref6.defaultCodeValue;

  // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly
  // lowlight/highlight?
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  } // must be refractor/prism, then


  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

function highlight (defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref7) {
    var language = _ref7.language,
        children = _ref7.children,
        _ref7$style = _ref7.style,
        style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
        _ref7$customStyle = _ref7.customStyle,
        customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
        _ref7$codeTagProps = _ref7.codeTagProps,
        codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : undefined,
      style: _objectSpread(_objectSpread({}, style['code[class*="language-"]']), style["code[class*=\"language-".concat(language, "\"]")])
    } : _ref7$codeTagProps,
        _ref7$useInlineStyles = _ref7.useInlineStyles,
        useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
        _ref7$showLineNumbers = _ref7.showLineNumbers,
        showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
        _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
        showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN,
        _ref7$startingLineNum = _ref7.startingLineNumber,
        startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
        lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
        _ref7$lineNumberStyle = _ref7.lineNumberStyle,
        lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
        wrapLines = _ref7.wrapLines,
        _ref7$wrapLongLines = _ref7.wrapLongLines,
        wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines,
        _ref7$lineProps = _ref7.lineProps,
        lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
        renderer = _ref7.renderer,
        _ref7$PreTag = _ref7.PreTag,
        PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
        _ref7$CodeTag = _ref7.CodeTag,
        CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
        _ref7$code = _ref7.code,
        code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || '' : _ref7$code,
        astGenerator = _ref7.astGenerator,
        rest = _objectWithoutProperties(_ref7, _excluded);

    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /*#__PURE__*/React.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });

    if (wrapLongLines) {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: 'pre-wrap'
      });
    } else {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: 'pre'
      });
    }

    if (!astGenerator) {
      return /*#__PURE__*/React.createElement(PreTag, preProps, allLineNumbers, /*#__PURE__*/React.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */


    if (wrapLines === undefined && renderer || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    } // determine largest line number so that we can force minWidth on all linenumber elements


    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /*#__PURE__*/React.createElement(PreTag, preProps, /*#__PURE__*/React.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows: rows,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(_typeof));

(function (module) {
var _typeof$1 = _typeof.exports["default"];
function _regeneratorRuntime() {
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var _regeneratorRuntime = regenerator;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var createAsyncLoadingHighlighter = (function (options) {
  var loader = options.loader,
      isLanguageRegistered = options.isLanguageRegistered,
      registerLanguage = options.registerLanguage,
      languageLoaders = options.languageLoaders,
      noAsyncLoadingLanguages = options.noAsyncLoadingLanguages;

  var ReactAsyncHighlighter = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(ReactAsyncHighlighter, _React$PureComponent);

    var _super = _createSuper(ReactAsyncHighlighter);

    function ReactAsyncHighlighter() {
      _classCallCheck(this, ReactAsyncHighlighter);

      return _super.apply(this, arguments);
    }

    _createClass(ReactAsyncHighlighter, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        if (!ReactAsyncHighlighter.astGeneratorPromise) {
          ReactAsyncHighlighter.loadAstGenerator();
        }

        if (!ReactAsyncHighlighter.astGenerator) {
          ReactAsyncHighlighter.astGeneratorPromise.then(function () {
            _this.forceUpdate();
          });
        }

        if (!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "loadLanguage",
      value: function loadLanguage() {
        var _this2 = this;

        var language = this.props.language;

        if (language === 'text') {
          return;
        }

        ReactAsyncHighlighter.loadLanguage(language).then(function () {
          return _this2.forceUpdate();
        })["catch"](function () {});
      }
    }, {
      key: "normalizeLanguage",
      value: function normalizeLanguage(language) {
        return ReactAsyncHighlighter.isSupportedLanguage(language) ? language : 'text';
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(ReactAsyncHighlighter.highlightInstance, _extends({}, this.props, {
          language: this.normalizeLanguage(this.props.language),
          astGenerator: ReactAsyncHighlighter.astGenerator
        }));
      }
    }], [{
      key: "preload",
      value: function preload() {
        return ReactAsyncHighlighter.loadAstGenerator();
      }
    }, {
      key: "loadLanguage",
      value: function () {
        var _loadLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(language) {
          var languageLoader;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  languageLoader = languageLoaders[language];

                  if (!(typeof languageLoader === 'function')) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", languageLoader(ReactAsyncHighlighter.registerLanguage));

                case 5:
                  throw new Error("Language ".concat(language, " not supported"));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function loadLanguage(_x) {
          return _loadLanguage.apply(this, arguments);
        }

        return loadLanguage;
      }()
    }, {
      key: "isSupportedLanguage",
      value: function isSupportedLanguage(language) {
        return ReactAsyncHighlighter.isRegistered(language) || typeof languageLoaders[language] === 'function';
      }
    }, {
      key: "loadAstGenerator",
      value: function loadAstGenerator() {
        ReactAsyncHighlighter.astGeneratorPromise = loader().then(function (astGenerator) {
          ReactAsyncHighlighter.astGenerator = astGenerator;

          if (registerLanguage) {
            ReactAsyncHighlighter.languages.forEach(function (language, name) {
              return registerLanguage(astGenerator, name, language);
            });
          }
        });
        return ReactAsyncHighlighter.astGeneratorPromise;
      }
    }]);

    return ReactAsyncHighlighter;
  }(React.PureComponent);

  _defineProperty(ReactAsyncHighlighter, "astGenerator", null);

  _defineProperty(ReactAsyncHighlighter, "highlightInstance", highlight(null, {}));

  _defineProperty(ReactAsyncHighlighter, "astGeneratorPromise", null);

  _defineProperty(ReactAsyncHighlighter, "languages", new Map());

  _defineProperty(ReactAsyncHighlighter, "supportedLanguages", options.supportedLanguages || Object.keys(languageLoaders || {}));

  _defineProperty(ReactAsyncHighlighter, "isRegistered", function (language) {
    if (noAsyncLoadingLanguages) {
      return true;
    }

    if (!registerLanguage) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }

    if (!ReactAsyncHighlighter.astGenerator) {
      // Ast generator not available yet, but language will be registered once it is.
      return ReactAsyncHighlighter.languages.has(language);
    }

    return isLanguageRegistered(ReactAsyncHighlighter.astGenerator, language);
  });

  _defineProperty(ReactAsyncHighlighter, "registerLanguage", function (name, language) {
    if (!registerLanguage) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }

    if (ReactAsyncHighlighter.astGenerator) {
      return registerLanguage(ReactAsyncHighlighter.astGenerator, name, language);
    } else {
      ReactAsyncHighlighter.languages.set(name, language);
    }
  });

  return ReactAsyncHighlighter;
});

//
// This file has been auto-generated by the `npm run build-languages-prism` task
//
var supportedLanguages = ['abap', 'abnf', 'actionscript', 'ada', 'agda', 'al', 'antlr4', 'apacheconf', 'apex', 'apl', 'applescript', 'aql', 'arduino', 'arff', 'asciidoc', 'asm6502', 'asmatmel', 'aspnet', 'autohotkey', 'autoit', 'avisynth', 'avro-idl', 'bash', 'basic', 'batch', 'bbcode', 'bicep', 'birb', 'bison', 'bnf', 'brainfuck', 'brightscript', 'bro', 'bsl', 'c', 'cfscript', 'chaiscript', 'cil', 'clike', 'clojure', 'cmake', 'cobol', 'coffeescript', 'concurnas', 'coq', 'cpp', 'crystal', 'csharp', 'cshtml', 'csp', 'css-extras', 'css', 'csv', 'cypher', 'd', 'dart', 'dataweave', 'dax', 'dhall', 'diff', 'django', 'dns-zone-file', 'docker', 'dot', 'ebnf', 'editorconfig', 'eiffel', 'ejs', 'elixir', 'elm', 'erb', 'erlang', 'etlua', 'excel-formula', 'factor', 'false', 'firestore-security-rules', 'flow', 'fortran', 'fsharp', 'ftl', 'gap', 'gcode', 'gdscript', 'gedcom', 'gherkin', 'git', 'glsl', 'gml', 'gn', 'go-module', 'go', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hcl', 'hlsl', 'hoon', 'hpkp', 'hsts', 'http', 'ichigojam', 'icon', 'icu-message-format', 'idris', 'iecst', 'ignore', 'inform7', 'ini', 'io', 'j', 'java', 'javadoc', 'javadoclike', 'javascript', 'javastacktrace', 'jexl', 'jolie', 'jq', 'js-extras', 'js-templates', 'jsdoc', 'json', 'json5', 'jsonp', 'jsstacktrace', 'jsx', 'julia', 'keepalived', 'keyman', 'kotlin', 'kumir', 'kusto', 'latex', 'latte', 'less', 'lilypond', 'liquid', 'lisp', 'livescript', 'llvm', 'log', 'lolcode', 'lua', 'magma', 'makefile', 'markdown', 'markup-templating', 'markup', 'matlab', 'maxscript', 'mel', 'mermaid', 'mizar', 'mongodb', 'monkey', 'moonscript', 'n1ql', 'n4js', 'nand2tetris-hdl', 'naniscript', 'nasm', 'neon', 'nevod', 'nginx', 'nim', 'nix', 'nsis', 'objectivec', 'ocaml', 'opencl', 'openqasm', 'oz', 'parigp', 'parser', 'pascal', 'pascaligo', 'pcaxis', 'peoplecode', 'perl', 'php-extras', 'php', 'phpdoc', 'plsql', 'powerquery', 'powershell', 'processing', 'prolog', 'promql', 'properties', 'protobuf', 'psl', 'pug', 'puppet', 'pure', 'purebasic', 'purescript', 'python', 'q', 'qml', 'qore', 'qsharp', 'r', 'racket', 'reason', 'regex', 'rego', 'renpy', 'rest', 'rip', 'roboconf', 'robotframework', 'ruby', 'rust', 'sas', 'sass', 'scala', 'scheme', 'scss', 'shell-session', 'smali', 'smalltalk', 'smarty', 'sml', 'solidity', 'solution-file', 'soy', 'sparql', 'splunk-spl', 'sqf', 'sql', 'squirrel', 'stan', 'stylus', 'swift', 'systemd', 't4-cs', 't4-templating', 't4-vb', 'tap', 'tcl', 'textile', 'toml', 'tremor', 'tsx', 'tt2', 'turtle', 'twig', 'typescript', 'typoscript', 'unrealscript', 'uorazor', 'uri', 'v', 'vala', 'vbnet', 'velocity', 'verilog', 'vhdl', 'vim', 'visual-basic', 'warpscript', 'wasm', 'web-idl', 'wiki', 'wolfram', 'wren', 'xeora', 'xml-doc', 'xojo', 'xquery', 'yaml', 'yang', 'zig'];

var SyntaxHighlighter = createAsyncLoadingHighlighter({
  loader: function loader() {
    return import(
    /* webpackChunkName:"react-syntax-highlighter/refractor-import" */
    './index-a1accecb.js').then(function (n) { return n.i; }).then(function (module) {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return module["default"] || module;
    });
  },
  noAsyncLoadingLanguages: true,
  supportedLanguages: supportedLanguages
});

var vscDarkPlus = {
  "pre[class*=\"language-\"]": {
    "color": "#d4d4d4",
    "fontSize": "13px",
    "textShadow": "none",
    "fontFamily": "Menlo, Monaco, Consolas, \"Andale Mono\", \"Ubuntu Mono\", \"Courier New\", monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "background": "#1e1e1e"
  },
  "code[class*=\"language-\"]": {
    "color": "#d4d4d4",
    "fontSize": "13px",
    "textShadow": "none",
    "fontFamily": "Menlo, Monaco, Consolas, \"Andale Mono\", \"Ubuntu Mono\", \"Courier New\", monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#264F78"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#264F78"
  },
  "pre[class*=\"language-\"] *::selection": {
    "textShadow": "none",
    "background": "#264F78"
  },
  "code[class*=\"language-\"] *::selection": {
    "textShadow": "none",
    "background": "#264F78"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em .3em",
    "borderRadius": ".3em",
    "color": "#db4c69",
    "background": "#1e1e1e"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "doctype.doctype-tag": {
    "color": "#569CD6"
  },
  "doctype.name": {
    "color": "#9cdcfe"
  },
  "comment": {
    "color": "#6a9955"
  },
  "prolog": {
    "color": "#6a9955"
  },
  "punctuation": {
    "color": "#d4d4d4"
  },
  ".language-html .language-css .token.punctuation": {
    "color": "#d4d4d4"
  },
  ".language-html .language-javascript .token.punctuation": {
    "color": "#d4d4d4"
  },
  "property": {
    "color": "#9cdcfe"
  },
  "tag": {
    "color": "#569cd6"
  },
  "boolean": {
    "color": "#569cd6"
  },
  "number": {
    "color": "#b5cea8"
  },
  "constant": {
    "color": "#9cdcfe"
  },
  "symbol": {
    "color": "#b5cea8"
  },
  "inserted": {
    "color": "#b5cea8"
  },
  "unit": {
    "color": "#b5cea8"
  },
  "selector": {
    "color": "#d7ba7d"
  },
  "attr-name": {
    "color": "#9cdcfe"
  },
  "string": {
    "color": "#ce9178"
  },
  "char": {
    "color": "#ce9178"
  },
  "builtin": {
    "color": "#ce9178"
  },
  "deleted": {
    "color": "#ce9178"
  },
  ".language-css .token.string.url": {
    "textDecoration": "underline"
  },
  "operator": {
    "color": "#d4d4d4"
  },
  "entity": {
    "color": "#569cd6"
  },
  "operator.arrow": {
    "color": "#569CD6"
  },
  "atrule": {
    "color": "#ce9178"
  },
  "atrule.rule": {
    "color": "#c586c0"
  },
  "atrule.url": {
    "color": "#9cdcfe"
  },
  "atrule.url.function": {
    "color": "#dcdcaa"
  },
  "atrule.url.punctuation": {
    "color": "#d4d4d4"
  },
  "keyword": {
    "color": "#569CD6"
  },
  "keyword.module": {
    "color": "#c586c0"
  },
  "keyword.control-flow": {
    "color": "#c586c0"
  },
  "function": {
    "color": "#dcdcaa"
  },
  "function.maybe-class-name": {
    "color": "#dcdcaa"
  },
  "regex": {
    "color": "#d16969"
  },
  "important": {
    "color": "#569cd6"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "class-name": {
    "color": "#4ec9b0"
  },
  "maybe-class-name": {
    "color": "#4ec9b0"
  },
  "console": {
    "color": "#9cdcfe"
  },
  "parameter": {
    "color": "#9cdcfe"
  },
  "interpolation": {
    "color": "#9cdcfe"
  },
  "punctuation.interpolation-punctuation": {
    "color": "#569cd6"
  },
  "variable": {
    "color": "#9cdcfe"
  },
  "imports.maybe-class-name": {
    "color": "#9cdcfe"
  },
  "exports.maybe-class-name": {
    "color": "#9cdcfe"
  },
  "escape": {
    "color": "#d7ba7d"
  },
  "tag.punctuation": {
    "color": "#808080"
  },
  "cdata": {
    "color": "#808080"
  },
  "attr-value": {
    "color": "#ce9178"
  },
  "attr-value.punctuation": {
    "color": "#ce9178"
  },
  "attr-value.punctuation.attr-equals": {
    "color": "#d4d4d4"
  },
  "namespace": {
    "color": "#4ec9b0"
  },
  "pre[class*=\"language-javascript\"]": {
    "color": "#9cdcfe"
  },
  "code[class*=\"language-javascript\"]": {
    "color": "#9cdcfe"
  },
  "pre[class*=\"language-jsx\"]": {
    "color": "#9cdcfe"
  },
  "code[class*=\"language-jsx\"]": {
    "color": "#9cdcfe"
  },
  "pre[class*=\"language-typescript\"]": {
    "color": "#9cdcfe"
  },
  "code[class*=\"language-typescript\"]": {
    "color": "#9cdcfe"
  },
  "pre[class*=\"language-tsx\"]": {
    "color": "#9cdcfe"
  },
  "code[class*=\"language-tsx\"]": {
    "color": "#9cdcfe"
  },
  "pre[class*=\"language-css\"]": {
    "color": "#ce9178"
  },
  "code[class*=\"language-css\"]": {
    "color": "#ce9178"
  },
  "pre[class*=\"language-html\"]": {
    "color": "#d4d4d4"
  },
  "code[class*=\"language-html\"]": {
    "color": "#d4d4d4"
  },
  ".language-regex .token.anchor": {
    "color": "#dcdcaa"
  },
  ".language-html .token.punctuation": {
    "color": "#808080"
  },
  "pre[class*=\"language-\"] > code[class*=\"language-\"]": {
    "position": "relative",
    "zIndex": "1"
  },
  ".line-highlight.line-highlight": {
    "background": "#f7ebc6",
    "boxShadow": "inset 5px 0 0 #f7d87c",
    "zIndex": "0"
  }
};

var css_248z = "/*** \n * Core colors\n ***/\n/*** \n\t* Component-specific properties \n\t***/\n/*** \n\t* Theme definitions\n\t***/\n.fence {\n  border-radius: 0;\n  margin: 40px 0;\n  position: relative;\n}\n.fence.json-editor-fence {\n  margin: 1rem 0 0 0 !important;\n  height: 80%;\n  width: 100%;\n  overflow: hidden;\n}\n.fence .fence-header {\n  background-color: var(--theme-codefence-header-background-color);\n  color: var(--theme-codefence-header-text-color);\n  font-size: 14px;\n  border-radius: 4px 4px 0px 0px;\n  border-bottom: 1px solid var(--theme-codefence-border-color);\n  margin: 0;\n  padding: 5px 16px;\n  min-height: 24px;\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n.fence .fence-header.clickable {\n  cursor: pointer;\n}\n.fence .fence-header > * {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.fence .fence-header .copy-button {\n  font-size: 14px;\n  padding: 0;\n  color: var(--theme-codefence-header-text-color);\n}\n.fence .fence-header .fence-title {\n  flex-grow: 1;\n}\n.fence .fence-header .icon {\n  line-height: 0;\n}\n.fence .fence-body {\n  padding: 0;\n  overflow: auto;\n  border-radius: 0 0 4px 4px;\n}\n.fence .fence-body.json-editor-body {\n  height: 100%;\n  line-height: 21px;\n}\n.fence .fence-body.collapsed {\n  max-height: 15px;\n}\n.fence .fence-body.collapsed pre {\n  padding-top: 3px;\n}\n.fence .fence-body pre {\n  display: block;\n  margin: 0 !important;\n  padding: 0 !important;\n  border-radius: 0 0 4px 4px !important;\n  background: var(--theme-codefence-background-color) !important;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.fence .fence-body pre.json-editor-pre {\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.fence .fence-body pre code {\n  background-color: transparent;\n  margin: 0 !important;\n  padding: 20px !important;\n  display: block !important;\n  max-height: 600px;\n  color: white;\n}\n.fence .fence-body pre code .linenumber {\n  min-width: 26px !important;\n}";
styleInject(css_248z);

function CodeFence(props) {
    const [collapsed, setCollapsed] = useState(props.noCollapse ? false : props.autoCollapse || false);
    const bodyClassNames = ['fence-body'];
    if (props.jsonEditor)
        bodyClassNames.push('json-editor-body');
    const classNames = ['fence'];
    if (props.className)
        classNames.push(props.className);
    if (props.noCollapse)
        classNames.push('nocollapse');
    if (props.indentation)
        classNames.push(`indent-${props.indentation}`);
    if (props.jsonEditor)
        classNames.push('json-editor-fence');
    return (React.createElement("div", { className: classNames.join(' ') },
        props.noHeader || typeof props.value !== 'string' ? ('') : (React.createElement("div", { className: `fence-header${props.noCollapse ? '' : ' clickable'}`, onClick: () => setCollapsed(props.noCollapse ? false : !collapsed) },
            props.noCollapse ? undefined : (React.createElement(GenesysDevIcon, { icon: collapsed ? GenesysDevIcons.AppChevronDown : GenesysDevIcons.AppChevronUp })),
            React.createElement(CopyButton, { copyText: props.value }),
            React.createElement("span", { className: "fence-title" }, props.title))),
        collapsed ? undefined : (React.createElement("div", { ref: props.innerRef || undefined, className: bodyClassNames.join(' ') },
            React.createElement(SyntaxHighlighter, { language: props.language, style: vscDarkPlus, showLineNumbers: props.showLineNumbers }, props.value)))));
}

export { AlertBlock, CodeFence, CopyButton, DxAccordion, DxAccordionGroup, DxButton, DxCheckbox, DxItemGroup, DxLabel, DxTabPanel, DxTabbedContent, DxTextbox, DxToggle, LoadingPlaceholder, Tooltip };
//# sourceMappingURL=index.js.map
