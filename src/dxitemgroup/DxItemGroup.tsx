import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DxItemGroupItem, DxItemGroupItemValue, DxItemGroupProps, ItemChangedCallback, ItemGroupChangedCallback } from '..';

import './DxItemGroup.scss';
import './radiobutton.scss';
import './dropdown.scss';
import './multiselect.scss';
import DxLabel from '../dxlabel/DxLabel';
import DxCheckbox from './DxCheckbox';

export default function DxItemGroup(props: DxItemGroupProps) {
	const [data, setData] = useState<DxItemGroupItemValue[]>(
		props.items.map((item) => {
			return { item, isSelected: false };
		})
	);
	const [id] = useState(uuid());

	// data changed
	useEffect(() => {
		if (props.onItemsChanged) props.onItemsChanged(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	// Handle individual item changed
	const itemChanged = (idx: number, item: DxItemGroupItem, checked: boolean) => {
		if (props.onItemChanged) props.onItemChanged(item, checked);
		let newData = [...data];
		// Unselect everything if it's radio buttons
		if (props.format === 'radio') newData.forEach((value) => (value.isSelected = false));
		// Set the selected state of the new item
		newData[idx].isSelected = checked;
		setData(newData);
	};

	const selectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
		if (changedItemIdx >= 0) itemChanged(changedItemIdx, newData[changedItemIdx].item, newData[changedItemIdx].isSelected);
	};

	switch (props.format) {
		case 'multiselect':
		case 'dropdown': {
			const isMulti = props.format === 'multiselect';
			return (
				<DxLabel label={props.title} description={props.description} className={props.className}>
					<div className={`dx-item-group${isMulti ? ' dx-multiselect-group' : ' dx-select-group'}${props.disabled ? ' disabled' : ''}`}>
						<select multiple={isMulti} disabled={props.disabled === true} onChange={(e) => selectChanged(e)}>
							{data.map((d, i) => (
								<option key={i} value={d.item.value} disabled={d.item.disabled}>
									{d.item.label}
								</option>
							))}
						</select>
					</div>
				</DxLabel>
			);
		}
		case 'checkbox':
		case 'radio':
		default: {
			return (
				<DxLabel
					label={props.title}
					description={props.description}
					className={`dx-item-group${props.disabled ? ' disabled' : ''}${props.className ? ' ' + props.className : ''}`}
					useFieldset={true}
				>
					{data.map((d, i) => (
						<DxCheckbox
							key={i}
							name={props.format === 'checkbox' ? `${id}-${i}` : id}
							label={d.item.label}
							itemValue={d.item.value}
							initiallyChecked={d.isSelected}
							onCheckChanged={(checked) => itemChanged(i, d.item, checked)}
							useRadioType={props.format === 'radio'}
							disabled={props.disabled || d.item.disabled}
						/>
					))}
				</DxLabel>
			);
		}
	}
}
