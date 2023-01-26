import { GenesysDevIcons } from 'genesys-dev-icons';
import DxAccordion from './dxaccordion/DxAccordion';
import DxAccordionGroup from './dxaccordion/DxAccordionGroup';
import DxButton from './dxbutton/DxButton';
import DxItemGroup from './dxitemgroup/DxItemGroup';
import DxCheckbox from './dxitemgroup/DxCheckbox';
import DxLabel from './dxlabel/DxLabel';
import DxTabbedContent from './dxtabbedcontent/DxTabbedContent';
import DxTabPanel from './dxtabbedcontent/DxTabPanel';
import DxTextbox from './dxtextbox/DxTextbox';
import DxToggle from './dxtoggle/DxToggle';
import AlertBlock from './alertblock/AlertBlock';
import LoadingPlaceholder from './loadingplaceholder/LoadingPlaceholder';
import Tooltip from './tooltip/Tooltip';
import CopyButton from './copybutton/CopyButton';
import DataTable from './datatable/DataTable';
export {
	DxAccordion,
	DxAccordionGroup,
	DxButton,
	DxItemGroup,
	DxCheckbox,
	DxLabel,
	DxTabbedContent,
	DxTabPanel,
	DxTextbox,
	DxToggle,
	Tooltip,
	CopyButton,
	LoadingPlaceholder,
	AlertBlock,
	DataTable,
};

export interface StringChangedCallback {
	(value: string): void;
}

export interface BooleanChangedCallback {
	(value?: boolean): void;
}

export interface CheckedChangedCallback {
	(checked: boolean): void;
}

export interface VoidEventCallback {
	(): void;
}

// Item in a DxItemGroup
export interface DxItemGroupItem {
	label: string;
	value: string;
	disabled?: boolean;
	isSelected?: boolean;
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

export interface DxToggleProps {
	isTriState?: boolean;
	initialValue?: boolean;
	value?: boolean;
	label?: string;
	description?: string;
	trueIcon?: GenesysDevIcons;
	falseIcon?: GenesysDevIcons;
	disabled?: boolean;
	onChange?: BooleanChangedCallback;
	className?: string;
}

export type DxTextboxType = 'text' | 'textarea' | 'password' | 'email' | 'date' | 'datetime-local' | 'time' | 'integer' | 'decimal';

export interface DxTextboxProps {
	initialValue?: string;
	value?: string;
	inputType?: DxTextboxType;
	label?: string;
	description?: string;
	placeholder?: string;
	icon?: GenesysDevIcons;
	clearButton?: boolean;
	clearOnEscape?: boolean;
	onChange?: StringChangedCallback;
	changeDebounceMs?: number;
	inputRef?: React.RefObject<HTMLInputElement>;
	onFocus?: VoidEventCallback;
	onBlur?: VoidEventCallback;
	disabled?: boolean;
	className?: string;
	autoFocus?: boolean;
}

export interface DxAccordionProps {
	title: React.ReactNode;
	children: React.ReactNode;
	showOpen?: boolean;
	className?: string;
	expandTrigger?: any;
	showOpenTrigger?: any;
	containerId?: string;
	headingIcon?: any;
	headingColor?: string;
}

export interface DxItemGroupProps {
	title?: string;
	description?: string;
	format: DxItemGroupFormat;
	items: DxItemGroupItem[];
	disabled?: boolean;
	className?: string;
	onItemChanged?: ItemChangedCallback;
	onItemsChanged?: ItemGroupChangedCallback;
}

export type DxItemGroupFormat = 'checkbox' | 'radio' | 'dropdown' | 'multiselect';

export interface DxTabbedContentProps {
	children: React.ReactNode;
	initialTabId?: number;
	className?: string;
}

export interface DxTabPanelProps {
	title: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}

export interface DataTableRow {
	cells: DataTableCell[];
}

export interface DataTableCell {
	raw?: string;
	renderedContent: React.ReactNode;
	content: string;
	parsedContent?: string | number | Date;
	align?: 'left' | 'center' | 'right';
	copyButton?: boolean;
}
