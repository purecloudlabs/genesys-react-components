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
			return { item, isSelected: item.isSelected !== undefined ? item.isSelected : false };
		})
	);
	const [id] = useState(uuid());
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);
	const [format, setFormat] = useState(props.format);
	const [disabled, setDisabled] = useState(props.disabled);
	const [className, setClassName] = useState(props.className);

	// data changed
	useEffect(() => {
		if (props.onItemsChanged) props.onItemsChanged(data);
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
		setData(
			props.items.map((item) => {
				return { item, isSelected: item.isSelected !== undefined ? item.isSelected : false };
			})
		);
	}, [props.items]);
	// Handle individual item changed
	const itemChanged = (idx: number, item: DxItemGroupItem, checked: boolean) => {
		if (props.onItemChanged) props.onItemChanged(item, checked);
		let newData = [...data];
		// Unselect everything if it's radio buttons
		if (format === 'radio') newData.forEach((value) => (value.isSelected = false));
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

	switch (format) {
		case 'multiselect':
		case 'dropdown': {
			const isMulti = format === 'multiselect';
			return (
				<DxLabel label={title} description={description} className={className}>
					<div className={`dx-item-group${isMulti ? ' dx-multiselect-group' : ' dx-select-group'}${disabled ? ' disabled' : ''}`}>
						<select
							multiple={isMulti}
							disabled={disabled === true}
							onChange={(e) => selectChanged(e)}
							value={
								isMulti
									? data.filter((item) => item.isSelected)?.map((item) => item.item.value)
									: data.find((item) => item.isSelected)?.item.value
							}
						>
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
					label={title}
					description={description}
					className={`dx-item-group${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`}
					useFieldset={true}
				>
					<div
						onChange={(e: React.ChangeEvent<HTMLDivElement>) => {
							const i = data.findIndex((d) => d.item.value === (e.target as any)?.value);
							if (i < 0) return;
							itemChanged(i, data[i].item, (e.target as any)?.checked);
						}}
					>
						{data.map((d, i) => (
							<DxCheckbox
								key={d.item.value}
								name={format === 'checkbox' ? `${id}-${d.item.value}` : id}
								label={d.item.label}
								itemValue={d.item.value}
								checked={d.isSelected}
								useRadioType={format === 'radio'}
								disabled={disabled || d.item.disabled}
							/>
						))}
					</div>
				</DxLabel>
			);
		}
	}
}
