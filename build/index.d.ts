/// <reference types="react" />
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
import Tooltip from './tooltip/Tooltip';
import CopyButton from './copybutton/CopyButton';
export { DxAccordion, DxAccordionGroup, DxButton, DxItemGroup, DxCheckbox, DxLabel, DxTabbedContent, DxTabPanel, DxTextbox, DxToggle, Tooltip, CopyButton };
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
export interface DxItemGroupItem {
    label: string;
    value: string;
    disabled?: boolean;
    isSelected?: boolean;
}
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
export declare type DxTextboxType = 'text' | 'textarea' | 'password' | 'email' | 'date' | 'datetime-local' | 'time' | 'integer' | 'decimal';
export interface DxTextboxProps {
    initialValue?: string;
    value?: string;
    inputType?: DxTextboxType;
    label?: string;
    description?: string;
    placeholder?: string;
    icon?: GenesysDevIcons;
    clearButton?: boolean;
    onChange?: StringChangedCallback;
    changeDebounceMs?: number;
    inputRef?: React.RefObject<HTMLInputElement>;
    onFocus?: VoidEventCallback;
    onBlur?: VoidEventCallback;
    disabled?: boolean;
    className?: string;
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
export declare type DxItemGroupFormat = 'checkbox' | 'radio' | 'dropdown' | 'multiselect';
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
