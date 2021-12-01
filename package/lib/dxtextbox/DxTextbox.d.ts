import React from 'react';
import { GenesysDevIcons } from 'genesys-dev-icons';
import { StringChangedCallback, VoidEventCallback } from '..';
import './DxTextbox.scss';
export declare type DxTextboxType = 'text' | 'password' | 'email' | 'date' | 'datetime-local' | 'time' | 'integer' | 'decimal';
export interface DxTextboxProps {
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
export default function DxTextbox(props: DxTextboxProps): JSX.Element;
