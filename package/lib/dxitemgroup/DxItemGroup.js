var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './DxItemGroup.scss';
import './checkbox.scss';
import './radiobutton.scss';
import './dropdown.scss';
import './multiselect.scss';
import DxLabel from '../dxlabel/DxLabel';
export default function DxItemGroup(props) {
    var _a = useState(props.items.map(function (item) {
        return { item: item, isSelected: false };
    })), data = _a[0], setData = _a[1];
    var id = useState(uuid())[0];
    // data changed
    useEffect(function () {
        if (props.onItemsChanged)
            props.onItemsChanged(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    // Handle checkbox changed
    var onChange = function (idx, item, e) {
        if (props.onItemChanged)
            props.onItemChanged(item, e.target.checked);
        var newData = __spreadArray([], data, true);
        // Unselect everything if it's radio buttons
        if (props.format === 'radio')
            newData.forEach(function (value) { return (value.isSelected = false); });
        // Set the selected state of the new item
        newData[idx].isSelected = e.target.checked;
        setData(newData);
    };
    switch (props.format) {
        case 'multiselect':
        case 'dropdown': {
            return (React.createElement(DxLabel, { label: props.title, description: props.description },
                React.createElement("div", { className: "dx-item-group".concat(props.format === 'multiselect' ? ' dx-multiselect-group' : ' dx-select-group') },
                    React.createElement("select", { multiple: props.format === 'multiselect' }, data.map(function (d, i) { return (React.createElement("option", { key: i, value: d.item.value }, d.item.label)); })))));
        }
        case 'checkbox':
        case 'radio':
        default: {
            return (React.createElement(DxLabel, { label: props.title, description: props.description, className: 'dx-item-group', useFieldset: true }, data.map(function (d, i) { return (React.createElement("label", { key: i },
                React.createElement("input", { type: props.format, name: props.format === 'checkbox' ? "".concat(id, "-").concat(i) : id, id: d.item.label, value: d.item.value, checked: d.isSelected, onChange: function (e) { return onChange(i, d.item, e); } }),
                React.createElement("span", { className: 'label-text' }, d.item.label))); })));
        }
    }
}
