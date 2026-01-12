import React from 'react';
import { BaseComponentProps, CheckedChangedCallback } from '..';
import './DxCheckbox.scss';
interface IProps extends BaseComponentProps {
    label: string;
    itemValue: string;
    description?: string;
    checked?: boolean;
    initiallyChecked?: boolean;
    name?: string;
    className?: string;
    onCheckChanged?: CheckedChangedCallback;
    useRadioType?: boolean;
    disabled?: boolean;
}
export default function DxCheckbox(props: IProps): React.JSX.Element;
export {};
