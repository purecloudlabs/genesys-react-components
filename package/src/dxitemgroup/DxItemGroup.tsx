import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DxItemGroupItem, DxItemGroupItemValue, ItemChangedCallback, ItemGroupChangedCallback } from '..';

import './DxItemGroup.scss';
import './checkbox.scss';
import './radiobutton.scss';
import './dropdown.scss';
import './multiselect.scss';
import DxLabel from '../dxlabel/DxLabel';

interface IProps {
	title?: string;
	description?: string;
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
				<DxLabel label={props.title} description={props.description}>
					<div className={`dx-item-group${props.format === 'multiselect' ? ' dx-multiselect-group' : ' dx-select-group'}`}>
						<select multiple={props.format === 'multiselect'}>
							{data.map((d, i) => (
								<option key={i} value={d.item.value}>
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
				<DxLabel label={props.title} description={props.description} className='dx-item-group' useFieldset={true}>
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
				</DxLabel>
			);
		}
	}
}
