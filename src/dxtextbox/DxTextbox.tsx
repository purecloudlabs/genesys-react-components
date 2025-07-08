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
		//Set initial value of date to avoid invalid format error
		if (inputType === 'date') {
			let parsedDate: Date;
			if (props.initialValue) {
				parsedDate = parseDate(props.initialValue);
			} else {
				parsedDate = parseDate(props.value);
			}
			const formattedDate = formatDate(parsedDate?.toISOString());
			setValue(formattedDate);
			// Ignore value changed if initial value was set; they're mutually exclusive
		} else if (!props.initialValue && inputType !== 'date') {
			setValue(props.value || '');
		}
	}, [props.value]);

	// Escape pressed
	useEffect(() => {
		if (!isFocused || !props.clearOnEscape) return;
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
	let inputRef; // = useRef<HTMLInputElement>(null);
	if (props.inputRef) inputRef = props.inputRef;
	else if (props.inputType === 'textarea') inputRef = useRef<HTMLTextAreaElement>(null);
	else inputRef = useRef<HTMLInputElement>(null);

	const hasLabel = props.label && props.label !== '';

	// Global key bindings
	function globalKeyBindings(event: KeyboardEvent) {
		if (props.onKeyboardEvent) {
			props.onKeyboardEvent(event);
		}

		// Escape - cancel search
		if (event.key === 'Escape' && props.clearOnEscape) {
			event.stopPropagation();
			event.preventDefault();
			setEscapePressed(Date.now());
			return;
		}
	}

	//Formats date to fit required HTML format
	const formatDate = (inputDate: string) => {
		const date = new Date(inputDate);
		if (isNaN(date.getTime())) return ''; // Return empty if invalid date

		// Format as YYYY-MM-DD for HTML date input
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const parseDate = (input: string) => {
		if (!input) return;
		const date = new Date(input);
		return isNaN(date.getTime()) ? null : date;
	};

	// Normalize input type
	let inputType: React.HTMLInputTypeAttribute | undefined = props.inputType;
	if (inputType === 'integer' || inputType === 'decimal') inputType = 'number';

	let component;
	switch (inputType) {
		case 'textarea': {
			component = (
				<textarea
					className="dx-textarea"
					placeholder={props.placeholder}
					ref={inputRef}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => {
						setIsFocused(true);
						if (props.onFocus) props.onFocus();
					}}
					onBlur={() => {
						setIsFocused(false);
						if (props.onBlur) props.onBlur();
					}}
					disabled={props.disabled === true}
					autoFocus={props.autoFocus}
				/>
			);
			break;
		}
		// TODO: special handling for other inputType values
		default: {
			component = (
				<div className={`dx-textbox${hasLabel ? ' with-label' : ''}${props.disabled ? ' disabled' : ''}`}>
					{props.icon ? <GenesysDevIcon icon={props.icon} className="input-icon" /> : undefined}
					<input
						className="dx-input"
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
						autoFocus={props.autoFocus}
					/>
					{props.clearButton && (value || isFocused) && !props.disabled ? (
						<GenesysDevIcon icon={GenesysDevIcons.AppTimes} className="clear-icon" onClick={() => setValue('')} />
					) : undefined}
				</div>
			);
		}
	}

	// Render
	return (
		<DxLabel id={props.id} label={props.label} description={props.description} className={props.className}>
			{component}
		</DxLabel>
	);
}
