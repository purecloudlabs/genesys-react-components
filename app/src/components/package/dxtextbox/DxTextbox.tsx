import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useEffect, useRef, useState } from 'react';
import { StringChangedCallback, VoidEventCallback } from '../DxTypes';

import './DxTextbox.scss';

// export type DxTextboxType = 'text' | 'password' | 'integer' | 'decimal' | 'date' | 'time' | 'datetime';
export type DxTextboxType = 'text' | 'password' | 'email' | 'date' | 'datetime-local' | 'time';

export interface DxTextboxProps {
	initialValue?: string;
	inputType?: DxTextboxType;
	label?: string;
	placeholder?: string;
	icon?: GenesysDevIcons;
	clearButton?: boolean;
	onChange?: StringChangedCallback;
	changeDebounceMs?: number;
	inputRef?: React.RefObject<HTMLInputElement>;
	onFocus?: VoidEventCallback;
	onBlur?: VoidEventCallback;
}

export default function DxTextbox(props: DxTextboxProps) {
	const [debounceMs, setDebounceMs] = useState(props.changeDebounceMs || 300);
	const [value, setValue] = useState(props.initialValue || '');
	const [isFocused, setIsFocused] = useState(false);
	const [escapePressed, setEscapePressed] = useState(Date.now());
	let [timer, setTimer] = useState(undefined as unknown as ReturnType<typeof setTimeout>);

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
		if (!isFocused) return;
		setValue('');
		inputRef.current?.blur();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [escapePressed]);

	// Value changed
	useEffect(() => {
		if (!props.onChange) return;
		clearTimeout(timer);
		setTimer(setTimeout(() => (props.onChange ? props.onChange(value) : undefined), debounceMs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	// Update state from props
	useEffect(() => {
		setDebounceMs(props.changeDebounceMs || 300);
	}, [props.changeDebounceMs]);

	// Normalize inputRef
	let inputRef = useRef<HTMLInputElement>(null);
	if (props.inputRef) inputRef = props.inputRef;
	const hasLabel = props.label && props.label !== '';

	// Global key bindings
	function globalKeyBindings(event: KeyboardEvent) {
		// Escape - cancel search
		if (event.key === 'Escape') {
			event.stopPropagation();
			event.preventDefault();
			setEscapePressed(Date.now());
			return;
		}
	}

	// TODO: handle props.inputType
	let component = (
		<div className={`dx-textbox${hasLabel ? ' with-label' : ''}`}>
			{props.icon ? <GenesysDevIcon icon={props.icon} className='input-icon' /> : undefined}
			<input
				className='dx-input'
				// type='text'
				type={props.inputType}
				value={value}
				placeholder={props.placeholder}
				onChange={(e) => setValue(e.target.value)}
				ref={inputRef}
				onFocus={() => {
					setIsFocused(true);
					if (props.onFocus) props.onFocus();
				}}
				onBlur={() => {
					setIsFocused(false);
					if (props.onBlur) props.onBlur();
				}}
			/>
			{props.clearButton && value ? (
				<GenesysDevIcon icon={GenesysDevIcons.AppTimes} className='clear-icon' onClick={() => setValue('')} />
			) : undefined}
		</div>
	);

	// Render
	return (
		<label className='dx-label'>
			{hasLabel ? <span className='label-text'>{props.label}</span> : undefined}
			{component}
		</label>
	);
}
