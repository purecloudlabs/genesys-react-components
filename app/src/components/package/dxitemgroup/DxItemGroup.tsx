import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DxItemGroupItem, DxItemGroupItemValue, ItemChangedCallback, ItemGroupChangedCallback } from '../DxTypes';

import './DxItemGroup.scss';
import './checkbox.scss';
import './radiobutton.scss';
import './dropdown.scss';
import './multiselect.scss';

interface IProps {
	title?: string;
	format: DxItemGroupFormat;
	items: DxItemGroupItem[];
	onItemChanged?: ItemChangedCallback;
	onItemsChanged?: ItemGroupChangedCallback;
}

export type DxItemGroupFormat = 'checkbox' | 'radio' | 'dropdown' | 'multiselect';

export default function DxItemGroup(props: IProps) {
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

	// Handle checkbox changed
	const onChange = (idx: number, item: DxItemGroupItem, e: React.ChangeEvent<HTMLInputElement>) => {
		if (props.onItemChanged) props.onItemChanged(item, e.target.checked);
		let newData = [...data];
		// Unselect everything if it's radio buttons
		if (props.format === 'radio') newData.forEach((value) => (value.isSelected = false));
		// Set the selected state of the new item
		newData[idx].isSelected = e.target.checked;
		setData(newData);
	};

	switch (props.format) {
		case 'multiselect':
		case 'dropdown': {
			return (
				<label className={`dx-item-group${props.format === 'multiselect' ? ' dx-multiselect-group' : ' dx-select-group'}`}>
					{props.title ? <span className='legend-text'>{props.title}</span> : undefined}
					<select multiple={props.format === 'multiselect'}>
						{data.map((d, i) => (
							<option key={i} value={d.item.value}>
								{d.item.label}
							</option>
						))}
					</select>
				</label>
			);
		}
		case 'checkbox':
		case 'radio':
		default: {
			return (
				<fieldset className='dx-item-group'>
					{props.title ? <legend className='legend-text'>{props.title}</legend> : undefined}
					{data.map((d, i) => (
						<label key={i}>
							<input
								type={props.format}
								name={props.format === 'checkbox' ? `${id}-${i}` : id}
								id={d.item.label}
								value={d.item.value}
								checked={d.isSelected}
								onChange={(e) => onChange(i, d.item, e)}
							/>
							<span className='label-text'>{d.item.label}</span>
						</label>
					))}
				</fieldset>
			);
		}
	}
}
