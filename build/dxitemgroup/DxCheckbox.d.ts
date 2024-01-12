/// <reference types="react" />
import { CheckedChangedCallback } from '..';
import './DxCheckbox.scss';
interface IProps {
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
export default function DxCheckbox(props: IProps): JSX.Element;
export {};
