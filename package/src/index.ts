export { default as DxAccordion } from './dxaccordion/DxAccordion';
export { default as DxAccordionGroup } from './dxaccordion/DxAccordionGroup';
export { default as DxButton } from './dxbutton/DxButton';
export { default as DxItemGroup } from './dxitemgroup/DxItemGroup';
export { default as DxTabbedContent } from './dxtabbedcontent/DxTabbedContent';
export { default as DxTabPanel } from './dxtabbedcontent/DxTabPanel';
export { default as DxTextbox } from './dxtextbox/DxTextbox';
export { default as DxToggle } from './dxtoggle/DxToggle';

export interface StringChangedCallback {
	(value: string): void;
}

export interface BooleanChangedCallback {
	(value?: boolean): void;
}

export interface VoidEventCallback {
	(): void;
}

// Item in a DxItemGroup
export interface DxItemGroupItem {
	label: string;
	value: string;
}

// Item value of a DxItemGroupItem in a DxItemGroup
export interface DxItemGroupItemValue {
	item: DxItemGroupItem;
	isSelected: boolean;
}

export interface ItemChangedCallback {
	(item: DxItemGroupItem, isSelected: boolean): void;
}

export interface ItemGroupChangedCallback {
	(items: DxItemGroupItemValue[]): void;
}

// Add this in your component file
require('react-dom');
(window as any).React2 = require('react');
console.log((window as any).React1 === (window as any).React2);
