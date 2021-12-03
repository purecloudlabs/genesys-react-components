/// <reference types="react" />
import { BooleanChangedCallback } from '..';
import './DxCheckbox.scss';
interface IProps {
    label: string;
    value: string;
    description?: string;
    initialValue?: boolean;
    name?: string;
    className?: string;
    onCheckChanged?: BooleanChangedCallback;
    useRadioType?: boolean;
}
export default function DxCheckbox(props: IProps): JSX.Element;
export {};
