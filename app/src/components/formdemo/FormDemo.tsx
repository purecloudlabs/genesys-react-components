import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { Fragment, useRef, useState } from 'react';
import DxAccordion from '../package/dxaccordion/DxAccordion';
import DxAccordionGroup from '../package/dxaccordion/DxAccordionGroup';
import DxButton from '../package/dxbutton/DxButton';
import DxItemGroup from '../package/dxitemgroup/DxItemGroup';
import DxTabbedContent from '../package/dxtabbedcontent/DxTabbedContent';
import DxTabPanel from '../package/dxtabbedcontent/DxTabPanel';
import DxTextbox from '../package/dxtextbox/DxTextbox';
import DxToggle from '../package/dxtoggle/DxToggle';
import { DxItemGroupItem } from '../package/DxTypes';

import './FormDemo.scss';

export default function FormDemo() {
	// Pass a ref to the input so you can focus/blur it from outside
	let inputRef = useRef<HTMLInputElement>(null);
	let [displayMode, setDisplayMode] = useState<'accordion' | 'tabs'>('accordion');

	const itemGroupItems: DxItemGroupItem[] = [
		{ label: 'First thing', value: 'English' },
		{ label: 'вторая вещь', value: 'Russian' },
		{ label: 'Dritte Sache', value: 'German' },
		{ label: 'Ceathrú rud', value: 'Irish' },
		{ label: 'Vyfde ding', value: 'Afrikaans' },
		{ label: 'ആറാമത്തെ കാര്യം', value: 'Malayalam' },
		{ label: 'Yedinci şey', value: 'Turkish' },
		{ label: 'דבר שמיני', value: 'Hebrew' },
		{
			label:
				'For millions of years, mankind lived just like the animals. Then something happened which unleashed the power of our imagination. We learned to talk and we learned to listen. Speech has allowed the communication of ideas, enabling human beings to work together to build the impossible. Mankind\u0027s greatest achievements have come about by talking, and its greatest failures by not talking. It doesn\u0027t have to be like this. Our greatest hopes could become reality in the future. With the technology at our disposal, the possibilities are unbounded. All we need to do is make sure we keep talking.',
			value: 'Stephen Hawking',
		},
	];

	const demoSections = [
		{
			title: 'DxTextbox',
			content: (
				<Fragment>
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
					<DxTextbox
						inputType='integer'
						label='Integer input'
						icon={GenesysDevIcons.IaAuthorization}
						clearButton={true}
						onChange={(value) => console.log(value)}
					/>
					<DxTextbox
						inputType='decimal'
						label='Decimal input'
						icon={GenesysDevIcons.IaAuthorization}
						clearButton={true}
						onChange={(value) => console.log(value)}
					/>
					<DxTextbox inputType='email' label='Email input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
					<DxTextbox inputType='date' label='Date input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
					<DxTextbox inputType='datetime-local' label='Datetime-local input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
					<DxTextbox inputType='time' label='Time input' icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
				</Fragment>
			),
		},
		{
			title: 'DxToggle',
			content: (
				<Fragment>
					<p>For boolean inputs</p>
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
				</Fragment>
			),
		},
		{
			title: 'DxButton',
			content: (
				<Fragment>
					<p>Button go brrr</p>
					<h3>Buttons</h3>
					<DxButton type='primary' onClick={() => console.log('Primary clicked')}>
						Primary
					</DxButton>
					<DxButton type='secondary' onClick={() => console.log('Secondary clicked')}>
						Secondary
					</DxButton>
					<h3>Disabled buttons</h3>
					<DxButton type='primary' onClick={() => console.log('Primary (disabled) clicked')} disabled={true}>
						Primary
					</DxButton>
					<DxButton type='secondary' onClick={() => console.log('Secondary (disabled) clicked')} disabled={true}>
						Secondary
					</DxButton>
					<h3>Buttons with "creative" content</h3>
					<DxButton type='primary' onClick={() => console.log('Primary ROCKET LAUNCH!!!!')}>
						<div
							style={{
								fontSize: '100px',
								lineHeight: 0,
								color: '#9cff40',
								padding: '20px',
								margin: '20px',
								border: '8px dashed aqua',
								background:
									'radial-gradient(circle, rgba(225,13,19,1) 0%, rgba(244,150,0,1) 20%, rgba(249,233,0,1) 40%, rgba(2,147,56,1) 60%, rgba(62,73,153,1) 80%, rgba(197,29,131,1) 100%)',
							}}
						>
							<GenesysDevIcon icon={GenesysDevIcons.DestGetStarted} />
						</div>
					</DxButton>
					<DxButton type='secondary' onClick={() => console.log('Secondary ROCKET LAUNCH!!!!')}>
						<div
							style={{
								fontSize: '100px',
								lineHeight: 0,
								color: '#9cff40',
								padding: '20px',
								margin: '20px',
								border: '8px dashed aqua',
								background:
									'radial-gradient(circle, rgba(225,13,19,1) 0%, rgba(244,150,0,1) 20%, rgba(249,233,0,1) 40%, rgba(2,147,56,1) 60%, rgba(62,73,153,1) 80%, rgba(197,29,131,1) 100%)',
							}}
						>
							<GenesysDevIcon icon={GenesysDevIcons.AppStarStroke} />
						</div>
					</DxButton>
				</Fragment>
			),
		},
		{
			title: 'DxItemGroup',
			content: (
				<Fragment>
					<p>For selecting from a list of things</p>
					<h3>Dropdown</h3>
					<DxItemGroup items={itemGroupItems} format='dropdown' />
					<DxItemGroup title='Dropdown with a title' items={itemGroupItems} format='dropdown' />
					<h3>Multi-select</h3>
					<DxItemGroup items={itemGroupItems} format='multiselect' />
					<DxItemGroup title='Multi-select with a title' items={itemGroupItems} format='multiselect' />
					<h3>Checkboxes</h3>
					<DxItemGroup items={itemGroupItems} format='checkbox' />
					<DxItemGroup
						title='With a title'
						items={itemGroupItems}
						format='checkbox'
						onItemChanged={(item, isSelected) => console.log(`Check: ${item.label} (${item.value}) -> ${isSelected}`)}
						onItemsChanged={(items) => console.log('Check:', items)}
					/>
					<h3>Radio Buttons</h3>
					<DxItemGroup items={itemGroupItems} format='radio' />
					<DxItemGroup
						title='With a title'
						items={itemGroupItems}
						format='radio'
						onItemChanged={(item, isSelected) => console.log(`Radio: ${item.label} (${item.value}) -> ${isSelected}`)}
						onItemsChanged={(items) => console.log('Radio:', items)}
					/>
				</Fragment>
			),
		},
		{
			title: 'DxTabbedContent',
			content: (
				<Fragment>
					<p>Shows tab titles in a row and one content panel at a time</p>
					<DxTabbedContent>
						<DxTabPanel title='first panel'>super plain text</DxTabPanel>
						<DxTabPanel title='SECOND panel'>
							<p>interior content here</p>
							<h2>A heading inside</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat congue bibendum. Etiam ut congue arcu. Nunc eget
								ipsum vel justo dictum pretium. Praesent sed tortor rhoncus, bibendum nunc sit amet, lobortis nisi. Quisque lacinia
								efficitur erat at porttitor. Fusce vitae iaculis tortor. Etiam eget sollicitudin ante. Cras eu diam augue. Vivamus quis
								purus in neque vulputate rhoncus. Nulla efficitur, orci id pretium ultricies, elit arcu aliquam neque, sed iaculis dolor dui
								at sapien. Nunc volutpat nisi quis lacinia finibus. Donec semper ac eros eget ultricies. Vivamus massa tellus, scelerisque
								blandit sagittis ut, venenatis at ligula.
							</p>
							<p>
								Nulla nec urna mattis, convallis purus vel, eleifend odio. Phasellus eu velit iaculis, efficitur lorem quis, efficitur
								purus. Vestibulum dapibus venenatis mi, vel mattis neque gravida et. Sed vel purus id libero porta fringilla. Duis felis
								felis, placerat eget porta ut, condimentum nec risus. Phasellus elementum posuere ex at interdum. Nulla vitae cursus nisl.
							</p>
						</DxTabPanel>
						<DxTabPanel
							title={
								<span
									style={{
										backgroundImage: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										fontSize: '24px',
										lineHeight: '24px',
									}}
								>
									Obnoxiously <em>formatted</em> title
								</span>
							}
						>
							<p>interior content here</p>
						</DxTabPanel>
					</DxTabbedContent>
				</Fragment>
			),
		},
		{
			title: 'DxAccordionGroup',
			content: (
				<Fragment>
					<p>Shows a group of individually expandable accordion panels</p>
					<DxAccordionGroup>
						<DxAccordion title='first panel'>super plain text</DxAccordion>
						<DxAccordion title='SECOND panel'>
							<p>interior content here</p>
							<h2>A heading inside</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat congue bibendum. Etiam ut congue arcu. Nunc eget
								ipsum vel justo dictum pretium. Praesent sed tortor rhoncus, bibendum nunc sit amet, lobortis nisi. Quisque lacinia
								efficitur erat at porttitor. Fusce vitae iaculis tortor. Etiam eget sollicitudin ante. Cras eu diam augue. Vivamus quis
								purus in neque vulputate rhoncus. Nulla efficitur, orci id pretium ultricies, elit arcu aliquam neque, sed iaculis dolor dui
								at sapien. Nunc volutpat nisi quis lacinia finibus. Donec semper ac eros eget ultricies. Vivamus massa tellus, scelerisque
								blandit sagittis ut, venenatis at ligula.
							</p>
							<p>
								Nulla nec urna mattis, convallis purus vel, eleifend odio. Phasellus eu velit iaculis, efficitur lorem quis, efficitur
								purus. Vestibulum dapibus venenatis mi, vel mattis neque gravida et. Sed vel purus id libero porta fringilla. Duis felis
								felis, placerat eget porta ut, condimentum nec risus. Phasellus elementum posuere ex at interdum. Nulla vitae cursus nisl.
							</p>
						</DxAccordion>
						<DxAccordion
							title={
								<span
									style={{
										backgroundImage: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										fontSize: '24px',
										lineHeight: '24px',
									}}
								>
									Obnoxiously <em>formatted</em> title
								</span>
							}
						>
							<p>interior content here</p>
						</DxAccordion>
					</DxAccordionGroup>
				</Fragment>
			),
		},
	];

	let content: any = demoSections.map((section, i) =>
		displayMode === 'accordion' ? (
			<DxAccordion key={i} title={section.title}>
				{section.content}
			</DxAccordion>
		) : (
			<DxTabPanel key={i} title={section.title}>
				{section.content}
			</DxTabPanel>
		)
	);
	if (displayMode === 'accordion') {
		content = (
			<DxAccordionGroup>
				{demoSections.map((section, i) => (
					<DxAccordion key={i} title={section.title}>
						{section.content}
					</DxAccordion>
				))}
			</DxAccordionGroup>
		);
	} else {
		content = (
			<DxTabbedContent initialTabId={2}>
				{demoSections.map((section, i) => (
					<DxTabPanel key={i} title={section.title}>
						{section.content}
					</DxTabPanel>
				))}
			</DxTabbedContent>
		);
	}

	return (
		<div>
			<div className='display-toggle'>
				Accordions
				<DxToggle
					initialValue={true}
					trueIcon={GenesysDevIcons.AppChevronRight}
					falseIcon={GenesysDevIcons.AppChevronLeft}
					onChange={(value) => setDisplayMode(value ? 'tabs' : 'accordion')}
				/>
				Tabs
			</div>
			{content}
		</div>
	);
}
