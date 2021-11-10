import { GenesysDevIcons } from 'genesys-dev-icons';
import React, { useRef } from 'react';
import DxTextbox from '../package/dxtextbox/DxTextbox';
import DxToggle from '../package/dxtoggle/DxToggle';

import './FormDemo.scss';

export default function FormDemo() {
	// Pass a ref to the input so you can focus/blur it from outside
	let inputRef = useRef<HTMLInputElement>(null);

	return (
		<div>
			<h2>DxTextbox</h2>
			<p>For text-ish inputs</p>
			<h3>Plain, no options</h3>
			<DxTextbox />
			<h3>Basic configuration options</h3>
			<DxTextbox label='Label text' placeholder='placeholder text' />
			<h3>Complex Usages</h3>
			<DxTextbox
				label='Has icon and clear button, logs value to console on change'
				placeholder='This is placeholder text'
				icon={GenesysDevIcons.AppSearch}
				clearButton={true}
				onChange={(value: string) => console.log('VAL1', value)}
			/>
			<DxTextbox
				label='1000ms debounce, removes focus on value change'
				placeholder='Instructions or whatever'
				icon={GenesysDevIcons.AppZoomZoomRight}
				clearButton={true}
				onChange={(value: string) => {
					console.log('VAL2', value);
					inputRef.current?.blur();
				}}
				changeDebounceMs={1000}
				inputRef={inputRef}
				onFocus={() => console.log('focus')}
				onBlur={() => console.log('blur')}
			/>
			<DxTextbox
				label='With initial value'
				placeholder="You won't see this value initially"
				icon={GenesysDevIcons.AppThumbsUp}
				clearButton={true}
				initialValue='this is an initial value'
			/>
			<h3>Other input types</h3>
			<DxTextbox
				inputType='password'
				label='Password input'
				placeholder='hunter2'
				icon={GenesysDevIcons.IaAuthorization}
				clearButton={true}
			/>
			<DxTextbox inputType='email' label='Email input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
			<DxTextbox inputType='date' label='Date input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
			<DxTextbox inputType='datetime-local' label='Datetime-local input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
			<DxTextbox inputType='time' label='Time input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
			<h2>DxToggle</h2>
			For boolean inputs
			<h3>Dual state</h3>
			<DxToggle />
			<DxToggle label='With a label' />
			<DxToggle
				label='Dark/light icons'
				onChange={(value) => console.log(value)}
				trueIcon={GenesysDevIcons.AppSun}
				falseIcon={GenesysDevIcons.AppMoon}
			/>
			<DxToggle
				label='Dark/light icons'
				initialValue={true}
				onChange={(value) => console.log(value)}
				trueIcon={GenesysDevIcons.AppSun}
				falseIcon={GenesysDevIcons.AppMoon}
			/>
			<h3>Tri-state</h3>
			<DxToggle label='Default (undefined)' isTriState={true} onChange={(value) => console.log(value)} />
			<DxToggle label='On' isTriState={true} onChange={(value) => console.log(value)} initialValue={true} />
			<DxToggle label='Off' isTriState={true} onChange={(value) => console.log(value)} initialValue={false} />
			<h3>Custom Icons</h3>
			<DxToggle
				label='Custom icons'
				isTriState={true}
				onChange={(value) => console.log(value)}
				trueIcon={GenesysDevIcons.AppStarSolid}
				falseIcon={GenesysDevIcons.AppStarStroke}
			/>
		</div>
	);
}
