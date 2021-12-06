import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useEffect, useRef, useState } from 'react';
import DxLabel from '../dxlabel/DxLabel';
import { DxTextboxProps } from '..';

import './DxTextbox.scss';

export default function DxTextbox(props: DxTextboxProps) {
	const [debounceMs, setDebounceMs] = useState(props.changeDebounceMs || 300);
	const [value, setValue] = useState(props.initialValue || props.value || '');
	const [isFocused, setIsFocused] = useState(false);
	const [escapePressed, setEscapePressed] = useState(Date.now());
	const [step, setStep] = useState<string | number | undefined>(undefined);
	let [timer, setTimer] = useState(undefined as unknown as ReturnType<typeof setTimeout>);

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
		setValue(props.value || '');
	}, [props.value]);

	// Escape pressed
	useEffect(() => {
		if (!isFocused) return;
		setValue('');
		inputRef.current?.blur();
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
		} else if (props.inputType === 'integer') {
			// Overwrite value as integer to forcibly truncate floating point numbers
			setValue(parseInt(value).toString());
		}

		// Debounce onChange notification
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

	// Normalize input type
	let inputType: React.HTMLInputTypeAttribute | undefined = props.inputType;
	if (inputType === 'integer' || inputType === 'decimal') inputType = 'number';

	// TODO: handle props.inputType
	let component = (
		<div className={`dx-textbox${hasLabel ? ' with-label' : ''}${props.disabled ? ' disabled' : ''}`} style={{}}>
			{props.icon ? <GenesysDevIcon icon={props.icon} className='input-icon' /> : undefined}
			<input
				className='dx-input'
				type={inputType}
				step={step}
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
				disabled={props.disabled === true}
			/>
			{props.clearButton && (value || isFocused) && !props.disabled ? (
				<GenesysDevIcon icon={GenesysDevIcons.AppTimes} className='clear-icon' onClick={() => setValue('')} />
			) : undefined}
		</div>
	);

	// Render
	return (
		<DxLabel label={props.label} description={props.description} className={props.className}>
			{component}
		</DxLabel>
	);
}
