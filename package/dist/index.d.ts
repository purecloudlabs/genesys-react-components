/// <reference types="react" />
import React from 'react';
import { GenesysDevIcons } from 'genesys-dev-icons';

interface IProps$5 {
    title: React.ReactNode;
    children: React.ReactNode;
    showOpen?: boolean;
}
declare function DxAccordion(props: IProps$5): JSX.Element;

interface IProps$4 {
    children: React.ReactNode;
}
declare function DxAccordionGroup(props: IProps$4): JSX.Element;

interface IProps$3 {
    type?: 'primary' | 'secondary';
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: VoidEventCallback;
}
declare function DxButton(props: IProps$3): JSX.Element;

interface IProps$2 {
    title?: string;
    description?: string;
    format: DxItemGroupFormat;
    items: DxItemGroupItem[];
    onItemChanged?: ItemChangedCallback;
    onItemsChanged?: ItemGroupChangedCallback;
}
declare type DxItemGroupFormat = 'checkbox' | 'radio' | 'dropdown' | 'multiselect';
declare function DxItemGroup(props: IProps$2): JSX.Element;

interface IProps$1 {
    children: React.ReactNode;
    initialTabId?: number;
}
declare function DxTabbedContent(props: IProps$1): JSX.Element;

interface IProps {
    title: React.ReactNode;
    children: React.ReactNode;
}
declare function DxTabPanel(props: IProps): JSX.Element;

declare type DxTextboxType = 'text' | 'password' | 'email' | 'date' | 'datetime-local' | 'time' | 'integer' | 'decimal';
interface DxTextboxProps {
    initialValue?: string;
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
}
declare function DxTextbox(props: DxTextboxProps): JSX.Element;

interface DxToggleProps {
    isTriState?: boolean;
    initialValue?: boolean;
    label?: string;
    description?: string;
    trueIcon?: GenesysDevIcons;
    falseIcon?: GenesysDevIcons;
    onChange?: BooleanChangedCallback;
}
declare function DxToggle(props: DxToggleProps): JSX.Element;

interface StringChangedCallback {
    (value: string): void;
}
interface BooleanChangedCallback {
    (value?: boolean): void;
}
interface VoidEventCallback {
    (): void;
}
interface DxItemGroupItem {
    label: string;
    value: string;
}
interface DxItemGroupItemValue {
    item: DxItemGroupItem;
    isSelected: boolean;
}
interface ItemChangedCallback {
    (item: DxItemGroupItem, isSelected: boolean): void;
}
interface ItemGroupChangedCallback {
    (items: DxItemGroupItemValue[]): void;
}

export { BooleanChangedCallback, DxAccordion, DxAccordionGroup, DxButton, DxItemGroup, DxItemGroupItem, DxItemGroupItemValue, DxTabPanel, DxTabbedContent, DxTextbox, DxToggle, ItemChangedCallback, ItemGroupChangedCallback, StringChangedCallback, VoidEventCallback };
