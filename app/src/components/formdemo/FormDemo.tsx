import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { Fragment, useRef, useState } from 'react';

import {
	DxAccordion,
	DxAccordionGroup,
	DxButton,
	DxItemGroup,
	DxTabbedContent,
	DxTabPanel,
	DxTextbox,
	DxToggle,
	DxItemGroupItem,
	DxCheckbox,
	DxItemGroupItemValue,
	CopyButton,
	Tooltip,
	LoadingPlaceholder,
	AlertBlock,
} from 'genesys-react-components';

import './FormDemo.scss';

const primaryItemGroupItems: DxItemGroupItem[] = [
	{ label: 'First thing', value: 'English' },
	{ label: 'вторая вещь', value: 'Russian' },
	{ label: 'Dritte Sache', value: 'German', isSelected: true },
	{ label: 'Ceathrú rud', value: 'Irish' },
	{ label: 'Vyfde ding', value: 'Afrikaans' },
	{ label: 'ആറാമത്തെ കാര്യം', value: 'Malayalam', disabled: true },
	{ label: 'Yedinci şey', value: 'Turkish', disabled: true },
	{ label: 'דבר שמיני', value: 'Hebrew' },
	{
		label:
			'For millions of years, mankind lived just like the animals. Then something happened which unleashed the power of our imagination. We learned to talk and we learned to listen. Speech has allowed the communication of ideas, enabling human beings to work together to build the impossible. Mankind\u0027s greatest achievements have come about by talking, and its greatest failures by not talking. It doesn\u0027t have to be like this. Our greatest hopes could become reality in the future. With the technology at our disposal, the possibilities are unbounded. All we need to do is make sure we keep talking.',
		value: 'Stephen Hawking',
	},
];
const alternateItemGroupItems: DxItemGroupItem[] = [
	{ label: 'Alternate first thing', value: 'English' },
	{ label: 'Өөр хоёр дахь зүйл', value: 'Mongolian' },
	{ label: 'Alternativ tredje tingen', value: 'Norwegian' },
	{ label: 'Alterna kvara afero', value: 'Esperanto' },
	{ label: '替代第五件事', value: 'Chinese (Traditional)' },
];

export default function FormDemo() {
	// Pass a ref to the input so you can focus/blur it from outside
	const inputRef = useRef<HTMLInputElement>(null);
	const [displayMode, setDisplayMode] = useState<'accordion' | 'tabs'>('accordion');
	const [boundString, setBoundString] = useState('');
	const [boundBoolean, setBoundBoolean] = useState<boolean | undefined>(true);
	const [itemGroupItems, setItemGroupItems] = useState(primaryItemGroupItems);
	const [boundItemGroupItems, setBoundItemGroupItems] = useState(primaryItemGroupItems);
	const [areAllExpanded, setAreAllExpanded] = useState<boolean | undefined>();
	const [areAllExpandedTrigger, setAreAllExpandedTrigger] = useState<any>();

	// This weird array thing allows this string to be collapsed in the IDE
	const doge = [
		'data:image/png;base64,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',
	][0];

	const onGroupItemsChanged = (items: DxItemGroupItemValue[]) => {
		let foundChanges = false;
		const newItems = [...boundItemGroupItems];
		newItems.forEach((item) => {
			const newItem = items.find((gi) => gi.item === item);
			// This intentionally conflates false and undefined
			// eslint-disable-next-line eqeqeq
			if (!newItem || item.isSelected == newItem.isSelected) return;
			item.isSelected = newItem.isSelected;
			foundChanges = true;
		});
		if (foundChanges) setBoundItemGroupItems(newItems);
	};

	const demoSections = [];
	demoSections.push({
		title: 'DxTextbox',
		content: (
			<Fragment>
				<p>For text-ish inputs</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxTextbox
	inputType='text'
	label='Label text'
	placeholder='Placeholder text...'
	icon={GenesysDevIcons.AppSearch}
	clearButton={true}
	onChange={(value: string) => console.log('value changed', value)}
	changeDebounceMs={1234}
	inputRef={inputRef}
	onFocus={() => console.log('focus')}
	onBlur={() => console.log('blur')}
	description='Informative description text'
/>`}
					</code>
				</pre>
				<h3>Basic usage</h3>
				<DxTextbox />
				<DxTextbox label="With a label and placeholder" placeholder="placeholder text" />
				<DxTextbox
					label="With a label and placeholder and description"
					placeholder="placeholder text"
					description="Time zone context used to calculate response intervals (this allows resolving DST changes). The interval offset is used even when timeZone is specified. Default is UTC. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London"
				/>
				<DxTextbox
					label="With a label, placeholder, icon, and clear button"
					placeholder="This is placeholder text"
					icon={GenesysDevIcons.AppSearch}
					clearButton={true}
				/>
				<DxTextbox
					label="disabled textbox"
					placeholder="This is placeholder text"
					initialValue="intial text"
					icon={GenesysDevIcons.AppSearch}
					clearButton={true}
					disabled={true}
				/>
				<h3>Complex Usages</h3>
				<DxTextbox
					label="1000ms debounce (default 300ms), uses inputRef to remove focus via onChange callback"
					placeholder="Focus will clear 1 second after you stop typing"
					icon={GenesysDevIcons.AppZoomZoomRight}
					clearButton={true}
					onChange={(value: string) => {
						console.log('1000ms debouncer triggered, clearing focus', value);
						inputRef.current?.blur();
					}}
					changeDebounceMs={1000}
					inputRef={inputRef}
					onFocus={() => console.log('focus')}
					onBlur={() => console.log('blur')}
				/>
				<DxTextbox
					label="With an initial value"
					placeholder="You won't see this value initially"
					icon={GenesysDevIcons.AppThumbsUp}
					clearButton={true}
					initialValue="this is an initial value"
				/>
				<h3>Textarea</h3>
				<p>
					Using <code>inputType='textarea'</code> displays the textbox using the HTML <code>textarea</code> element. Standard{' '}
					<code>DxTextboxProps</code> options are supported except <code>icon</code> and <code>clearButton</code>.
				</p>
				<DxTextbox inputType="textarea" />
				<DxTextbox
					inputType="textarea"
					label="With a label"
					placeholder="Some placeholder text..."
					onChange={(newValue) => console.log('textarea', newValue)}
				/>
				<DxTextbox
					inputType="textarea"
					label="With a label"
					placeholder="Some placeholder text..."
					initialValue={'this is initial\n\ntextarea text'}
					onChange={(newValue) => console.log('textarea2', newValue)}
				/>
				<h4>Value Binding</h4>
				<p>
					Setting and updating the <code>value</code> property allows the value of the input to be updated externally. These text boxes
					share a common state property for <code>value</code> and both update the value of that shared object when their value changes.
					This causes the text written to one input to be set as the value of the other.
				</p>
				<p>
					<em>
						Note: setting <code>initialValue</code> will cause <code>value</code> to be ignored.
					</em>
				</p>
				<DxTextbox
					label="Value-bound input A"
					placeholder="Type here and the text will show up in B"
					icon={GenesysDevIcons.AppZoomZoomDown}
					clearButton={true}
					value={boundString}
					onChange={(newValue) => setBoundString(newValue)}
				/>
				<DxTextbox
					label="Value-bound input B"
					placeholder="Type here and the text will show up in A"
					icon={GenesysDevIcons.AppZoomZoomUp}
					clearButton={true}
					value={boundString}
					onChange={(newValue) => setBoundString(newValue)}
				/>
				<DxTextbox
					inputType="textarea"
					label="Value-bound textarea"
					placeholder="Some placeholder text..."
					value={boundString}
					onChange={(newValue) => setBoundString(newValue)}
				/>
				<h3>Other input types</h3>
				<DxTextbox
					inputType="password"
					label="Password input"
					placeholder="hunter2"
					icon={GenesysDevIcons.IaAuthorization}
					clearButton={true}
				/>
				<DxTextbox
					inputType="integer"
					label="Integer input"
					icon={GenesysDevIcons.IaAuthorization}
					clearButton={true}
					onChange={(value) => console.log(value)}
				/>
				<DxTextbox
					inputType="decimal"
					label="Decimal input"
					icon={GenesysDevIcons.IaAuthorization}
					clearButton={true}
					onChange={(value) => console.log(value)}
				/>
				<DxTextbox inputType="email" label="Email input" icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
				<DxTextbox inputType="date" label="Date input" icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
				<DxTextbox inputType="datetime-local" label="Datetime-local input" icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
				<DxTextbox inputType="time" label="Time input" icon={GenesysDevIcons.IaAuthorization} clearButton={true} />
			</Fragment>
		),
	});
	demoSections.push({
		title: 'DxToggle',
		content: (
			<Fragment>
				<p>
					For boolean inputs, including a tri-state option allowing <em>undefined</em> as a value
				</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxToggle
	label='Toggle label'
	initialValue={true}
	isTriState={true}
	onChange={(value) => console.log(value)}
	trueIcon={GenesysDevIcons.AppSun}
	falseIcon={GenesysDevIcons.AppMoon}
	description='Informative description text'
/>`}
					</code>
				</pre>
				<h3>Dual state</h3>
				<DxToggle />
				<DxToggle label="With a label" />
				<DxToggle
					label="With a description"
					description="Time zone context used to calculate response intervals (this allows resolving DST changes). The interval offset is used even when timeZone is specified. Default is UTC. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London"
				/>
				<h3>Tri-state</h3>
				<DxToggle
					label="Default (undefined)"
					isTriState={true}
					onChange={(value) => console.log(value)}
					description="The default state is undefined; it is neither true nor false."
				/>
				<DxToggle label="On" isTriState={true} onChange={(value) => console.log(value)} initialValue={true} />
				<DxToggle label="Off" isTriState={true} onChange={(value) => console.log(value)} initialValue={false} />
				<h3>Custom Icons</h3>
				<DxToggle
					label="Dark/light icons"
					onChange={(value) => console.log(value)}
					trueIcon={GenesysDevIcons.AppSun}
					falseIcon={GenesysDevIcons.AppMoon}
				/>
				<DxToggle
					label="Dark/light icons"
					initialValue={true}
					onChange={(value) => console.log(value)}
					trueIcon={GenesysDevIcons.AppSun}
					falseIcon={GenesysDevIcons.AppMoon}
				/>
				<h3>Disabled</h3>
				<DxToggle label="Disabled" onChange={(value) => console.log(value)} disabled={true} />
				<DxToggle
					label="Disabled w/initialValue=true and custom icons"
					initialValue={true}
					onChange={(value) => console.log(value)}
					trueIcon={GenesysDevIcons.AppSun}
					falseIcon={GenesysDevIcons.AppMoon}
					disabled={true}
				/>
				<h3>Value Binding</h3>
				<p>
					Setting and updating the <code>value</code> property allows the value of the input to be updated externally. These toggles share a
					common state property for <code>value</code> and both update the value of that shared object when their value changes. This causes
					the value selected by one toggle to be set as the value of the other.
				</p>
				<DxToggle label="Value-bound toggle A" isTriState={true} value={boundBoolean} onChange={(value) => setBoundBoolean(value)} />
				<DxToggle label="Value-bound toggle B" isTriState={true} value={boundBoolean} onChange={(value) => setBoundBoolean(value)} />
			</Fragment>
		),
	});
	demoSections.push({
		title: 'DxCheckbox',
		content: (
			<Fragment>
				<p>For individual checkboxes</p>
				<h3>Example</h3>
				<pre>
					<code>{`<DxCheckbox
	label='Checkbox label}'
	value='item-value'
	description='A description'
	initialValue={true}
	name='name-string'
	className='clazzy-checkbox'
	onCheckChanged={(checked: boolean) => console.log('value changed: ' + checked)}
/>`}</code>
				</pre>
				<h3>Checkboxes</h3>
				{itemGroupItems.map((item, i) => (
					<DxCheckbox
						key={i}
						label={item.label}
						itemValue={item.value}
						onCheckChanged={(checked) => console.log(`${item.value} (${item.label}) -> ${checked}`)}
					/>
				))}
				<h3>Value Binding</h3>
				<p>
					Setting and updating the <code>checked</code> property allows the checked state of the checkbox to be updated externally. These
					two checkboxes share a common state property for <code>checked</code> and both update the value of that shared object when their
					value changes. This causes the value selected by one to be set as the value of the other.
				</p>
				<DxCheckbox
					label="Value-bound checkbox A"
					itemValue="check-a"
					checked={boundBoolean}
					onCheckChanged={(checked) => setBoundBoolean(checked)}
				/>
				<DxCheckbox
					label="Value-bound checkbox B"
					itemValue="check-B"
					checked={boundBoolean}
					onCheckChanged={(checked) => setBoundBoolean(checked)}
				/>
				<h3>Disabled Checkbox</h3>
				<DxCheckbox
					label="disabled checkbox"
					itemValue="dis"
					disabled={true}
					onCheckChanged={(checked) => console.log(`DISABLED -> ${checked}`)}
				/>
				<DxCheckbox
					label="disabled with an initial value of true"
					itemValue="dis"
					disabled={true}
					initiallyChecked={true}
					onCheckChanged={(checked) => console.log(`DISABLED -> ${checked}`)}
				/>
			</Fragment>
		),
	});
	demoSections.push({
		title: 'DxButton',
		content: (
			<Fragment>
				<p>Button go brrr</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxButton type='primary' onClick={() => console.log('clicked')} disabled={false}>
	Button text
</DxButton>`}
					</code>
				</pre>
				<h3>Buttons</h3>
				<DxButton type="primary" onClick={() => console.log('Primary button clicked')}>
					Primary
				</DxButton>
				<DxButton type="secondary" onClick={() => console.log('Secondary button clicked')}>
					Secondary
				</DxButton>
				<DxButton type="link" onClick={() => console.log('Link button clicked')}>
					Link button
				</DxButton>
				<h3>Disabled buttons</h3>
				<DxButton type="primary" onClick={() => console.log('Primary (disabled) clicked')} disabled={true}>
					Primary
				</DxButton>
				<DxButton type="secondary" onClick={() => console.log('Secondary (disabled) clicked')} disabled={true}>
					Secondary
				</DxButton>
				<DxButton type="link" onClick={() => console.log('Link button (disabled) clicked')} disabled={true}>
					Link button
				</DxButton>
				<h3>Buttons with "creative" content</h3>
				<DxButton type="primary" onClick={() => console.log('Primary ROCKET LAUNCH!!!!')}>
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
				<DxButton type="secondary" onClick={() => console.log('Secondary ROCKET LAUNCH!!!!')}>
					<div
						style={{
							fontSize: '100px',
							lineHeight: 0,
							color: 'transparent',
							padding: '20px',
							margin: '20px',
							border: '8px dashed aqua',
							borderRadius: '500px',
							background: `url('${doge}')`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<GenesysDevIcon icon={GenesysDevIcons.AppSun} />
					</div>
				</DxButton>
			</Fragment>
		),
	});
	demoSections.push({
		title: 'DxItemGroup',
		content: (
			<Fragment>
				<p>For selecting from a list of things</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxItemGroup
	title='Label text'
	items={itemGroupItems}
	format='dropdown'
	onItemChanged={(item, isSelected) => console.log('isSelected', isSelected)}
	onItemsChanged={(items) => console.log('Item list:', items)}
	description='Informative description text'
/>`}
					</code>
				</pre>
				<h3>Dropdown</h3>
				<DxItemGroup items={itemGroupItems} format="dropdown" />
				<DxItemGroup title="Dropdown with a title" items={itemGroupItems} format="dropdown" />
				<DxItemGroup
					title="Dropdown with a description"
					items={itemGroupItems}
					format="dropdown"
					description="Time zone context used to calculate response intervals (this allows resolving DST changes). The interval offset is used even when timeZone is specified. Default is UTC. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London"
					onItemChanged={(item, isSelected) => console.log('dropdown::onItemChanged', item, isSelected)}
					onItemsChanged={(items) => console.log('dropdown::onItemsChanged', items)}
				/>
				<DxItemGroup title="Disabled Dropdown" items={itemGroupItems} format="dropdown" disabled={true} />
				<h3>Multi-select</h3>
				<DxItemGroup items={itemGroupItems} format="multiselect" />
				<DxItemGroup title="Multi-select with a title" items={itemGroupItems} format="multiselect" />
				<DxItemGroup
					title="Multi-select with a description"
					items={itemGroupItems}
					format="multiselect"
					description="Time zone context used to calculate response intervals (this allows resolving DST changes). The interval offset is used even when timeZone is specified. Default is UTC. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London"
					onItemChanged={(item, isSelected) => console.log('dropdown::onItemChanged', item, isSelected)}
					onItemsChanged={(items) => console.log('dropdown::onItemsChanged', items)}
				/>
				<DxItemGroup title="Disabled Multi-select" items={itemGroupItems} format="multiselect" disabled={true} />
				<h3>Checkboxes</h3>
				<DxItemGroup items={itemGroupItems} format="checkbox" />
				<DxItemGroup
					title="With a title"
					items={itemGroupItems}
					format="checkbox"
					onItemChanged={(item, isSelected) => console.log(`Check: ${item.label} (${item.value}) -> ${isSelected}`)}
					onItemsChanged={(items) => console.log('Check:', items)}
				/>
				<DxItemGroup
					title="With a description"
					items={itemGroupItems}
					format="checkbox"
					onItemChanged={(item, isSelected) => console.log(`Check: ${item.label} (${item.value}) -> ${isSelected}`)}
					onItemsChanged={(items) => console.log('Check:', items)}
					description="Time zone context used to calculate response intervals (this allows resolving DST changes). The interval offset is used even when timeZone is specified. Default is UTC. Time zones are represented as a string of the zone name as found in the IANA time zone database. For example: UTC, Etc/UTC, or Europe/London"
				/>
				<h3>Radio Buttons</h3>
				<DxItemGroup items={itemGroupItems} format="radio" />
				<DxItemGroup
					title="With a title"
					items={itemGroupItems}
					format="radio"
					onItemChanged={(item, isSelected) => console.log(`Radio: ${item.label} (${item.value}) -> ${isSelected}`)}
					onItemsChanged={(items) => console.log('Radio:', items)}
				/>
				<h3>Value Binding</h3>
				<p>
					Setting and updating the <code>isSelected</code> property of a group item allows the checked/selected state to be updated
					externally. These groups share a common state property for <code>items</code> and both update the <code>isSelected</code> value of
					that items in the shared object when their value changes. This causes changes to one list to be reflected in the other list.
				</p>
				<DxItemGroup title="Value bound group A" items={boundItemGroupItems} format="radio" onItemsChanged={onGroupItemsChanged} />
				<DxItemGroup title="Value bound group C" items={boundItemGroupItems} format="checkbox" onItemsChanged={onGroupItemsChanged} />
				<DxItemGroup title="Value bound group D" items={boundItemGroupItems} format="multiselect" onItemsChanged={onGroupItemsChanged} />
				<DxItemGroup title="Value bound group E" items={boundItemGroupItems} format="dropdown" onItemsChanged={onGroupItemsChanged} />
			</Fragment>
		),
	});
	demoSections.push({
		title: 'DxTabbedContent',
		content: (
			<Fragment>
				<p>Shows tab titles in a row and one content panel at a time</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxTabbedContent>
	<DxTabPanel title='Panel Title'>Panel content</DxTabPanel>
</DxTabbedContent>`}
					</code>
				</pre>
				<DxTabbedContent>
					<DxTabPanel title="first panel">super plain text</DxTabPanel>
					<DxTabPanel title="SECOND panel">
						<p>interior content here</p>
						<h2>A heading inside</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat congue bibendum. Etiam ut congue arcu. Nunc eget ipsum
							vel justo dictum pretium. Praesent sed tortor rhoncus, bibendum nunc sit amet, lobortis nisi. Quisque lacinia efficitur erat
							at porttitor. Fusce vitae iaculis tortor. Etiam eget sollicitudin ante. Cras eu diam augue. Vivamus quis purus in neque
							vulputate rhoncus. Nulla efficitur, orci id pretium ultricies, elit arcu aliquam neque, sed iaculis dolor dui at sapien. Nunc
							volutpat nisi quis lacinia finibus. Donec semper ac eros eget ultricies. Vivamus massa tellus, scelerisque blandit sagittis
							ut, venenatis at ligula.
						</p>
						<p>
							Nulla nec urna mattis, convallis purus vel, eleifend odio. Phasellus eu velit iaculis, efficitur lorem quis, efficitur purus.
							Vestibulum dapibus venenatis mi, vel mattis neque gravida et. Sed vel purus id libero porta fringilla. Duis felis felis,
							placerat eget porta ut, condimentum nec risus. Phasellus elementum posuere ex at interdum. Nulla vitae cursus nisl.
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
	});
	demoSections.push({
		title: 'DxAccordionGroup',
		content: (
			<Fragment>
				<p>Shows a group of individually expandable accordion panels</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<DxAccordionGroup>
	<DxAccordion title='Accordion Title'>Accordion content</DxAccordion>
</DxAccordionGroup>`}
					</code>
				</pre>
				<DxAccordionGroup>
					<div className="control-buttons">
						<DxButton
							type="link"
							onClick={() => {
								setAreAllExpanded(false);
								setAreAllExpandedTrigger(Date.now());
							}}
						>
							Collapse All
						</DxButton>{' '}
						|{' '}
						<DxButton
							type="link"
							onClick={() => {
								setAreAllExpanded(true);
								setAreAllExpandedTrigger(Date.now());
							}}
						>
							Expand All
						</DxButton>
					</div>
					<DxAccordion title="Controlling open state programmatically" showOpen={areAllExpanded} showOpenTrigger={areAllExpandedTrigger}>
						<p>The "Collapse All"/"Expand All" buttons above demonstrate this functionality in the example app.</p>
						<p>
							Use <code>showOpen={'{true|false}'}</code> to set the initial state of the accordion.
						</p>
						<p>
							The <code>showOpen</code> property does react to state changes, but a trigger must be used to reconcile the property's value
							with the local state of the component based on user input. To do this, update the value for the <code>showOpenTrigger</code>{' '}
							property to trigger <code>showOpen</code> to be forcibly re-evaluated.
						</p>
					</DxAccordion>
					<DxAccordion title="SECOND panel" showOpen={areAllExpanded} showOpenTrigger={areAllExpandedTrigger}>
						<p>interior content here</p>
						<h2>A heading inside</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat congue bibendum. Etiam ut congue arcu. Nunc eget ipsum
							vel justo dictum pretium. Praesent sed tortor rhoncus, bibendum nunc sit amet, lobortis nisi. Quisque lacinia efficitur erat
							at porttitor. Fusce vitae iaculis tortor. Etiam eget sollicitudin ante. Cras eu diam augue. Vivamus quis purus in neque
							vulputate rhoncus. Nulla efficitur, orci id pretium ultricies, elit arcu aliquam neque, sed iaculis dolor dui at sapien. Nunc
							volutpat nisi quis lacinia finibus. Donec semper ac eros eget ultricies. Vivamus massa tellus, scelerisque blandit sagittis
							ut, venenatis at ligula.
						</p>
						<p>
							Nulla nec urna mattis, convallis purus vel, eleifend odio. Phasellus eu velit iaculis, efficitur lorem quis, efficitur purus.
							Vestibulum dapibus venenatis mi, vel mattis neque gravida et. Sed vel purus id libero porta fringilla. Duis felis felis,
							placerat eget porta ut, condimentum nec risus. Phasellus elementum posuere ex at interdum. Nulla vitae cursus nisl.
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
						showOpen={areAllExpanded}
						showOpenTrigger={areAllExpandedTrigger}
					>
						<p>interior content here</p>
					</DxAccordion>
				</DxAccordionGroup>
			</Fragment>
		),
	});

	demoSections.push({
		title: 'CopyButton',
		content: (
			<Fragment>
				<p>A copy button</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<CopyButton
	copyText='A text example'
	className='clazzy-copybutton'
	tooltipPosition='right'
/>`}
					</code>
				</pre>
				A text example
				<CopyButton copyText="A text example" className="clazzy-copybutton" tooltipPosition="right" />
			</Fragment>
		),
	});

	demoSections.push({
		title: 'Tooltip',
		content: (
			<Fragment>
				<p>A tooltip</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<Tooltip
	isShowing={true}
	text='Tooltip text example'
	position="right"
	className="clazzy-tooltip"
/>`}
					</code>
				</pre>
				<Tooltip isShowing={true} text="Tooltip text example" position="right" className="clazzy-tooltip" />
			</Fragment>
		),
	});

	demoSections.push({
		title: 'LoadingPlaceholder',
		content: (
			<Fragment>
				<p>
					Use the <code>LoadingPlaceholder</code> to display a visual element while awaiting an asynchronous operation. The text can be
					specified or randomized placeholder text will be used.
				</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<LoadingPlaceholder
	text='LoadingPlaceholder text example'
/>`}
					</code>
				</pre>
				<LoadingPlaceholder text="LoadingPlaceholder text example" />
			</Fragment>
		),
	});

	demoSections.push({
		title: 'AlertBlock',
		content: (
			<Fragment>
				<p>An alert block</p>
				<h3>Example</h3>
				<pre>
					<code>
						{`<AlertBlock
    title='AlertBlock title example'
    alertType='info'
    collapsible={false}
    autoCollapse={false}
    indentation={1}
    className='clazzy-alertblock'
/>`}
					</code>
				</pre>
				<AlertBlock title="Alert type <none>">
					<p>
						This is the default style if <code>alertBlock</code> is not specified.
					</p>
				</AlertBlock>
				<AlertBlock title="Alert type info" alertType="info">
					<p>
						Alert type <code>info</code>
					</p>
				</AlertBlock>
				<AlertBlock title="Alert type success" alertType="success">
					<p>
						Alert type <code>success</code>
					</p>
				</AlertBlock>
				<AlertBlock title="Alert type critical" alertType="critical">
					<p>
						Alert type <code>critical</code>
					</p>
				</AlertBlock>
				<AlertBlock title="Alert type warning" alertType="warning">
					<p>
						Alert type <code>warning</code>
					</p>
				</AlertBlock>
				<AlertBlock title="Alert type toast" alertType="toast">
					<p>
						Alert type <code>toast</code>
					</p>
				</AlertBlock>
			</Fragment>
		),
	});

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
			<DxTabbedContent initialTabId={0}>
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
			<p>
				View the source for this demo app on github:{' '}
				<a href="https://github.com/purecloudlabs/genesys-react-components/tree/master/app" target="_blank" rel="noreferrer">
					purecloudlabs/genesys-react-components <GenesysDevIcon icon={GenesysDevIcons.BrandGithub} />
				</a>
			</p>
			<div className="control-row">
				<div className="display-toggle">
					Accordions
					<DxToggle
						initialValue={true}
						trueIcon={GenesysDevIcons.AppChevronRight}
						falseIcon={GenesysDevIcons.AppChevronLeft}
						onChange={(value) => setDisplayMode(value ? 'tabs' : 'accordion')}
					/>
					Tabs
				</div>
				<DxButton
					onClick={() => setItemGroupItems(itemGroupItems === primaryItemGroupItems ? alternateItemGroupItems : primaryItemGroupItems)}
				>
					Swap item group items ({itemGroupItems === primaryItemGroupItems ? 'primary' : 'alternate'})
				</DxButton>
			</div>
			{content}
		</div>
	);
}
