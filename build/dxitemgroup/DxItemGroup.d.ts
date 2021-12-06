/// <reference types="react" />
import { DxItemGroupItem, ItemChangedCallback, ItemGroupChangedCallback } from '..';
import './DxItemGroup.scss';
import './radiobutton.scss';
import './dropdown.scss';
import './multiselect.scss';
interface IProps {
    title?: string;
    description?: string;
    format: DxItemGroupFormat;
    items: DxItemGroupItem[];
    disabled?: boolean;
    onItemChanged?: ItemChangedCallback;
    onItemsChanged?: ItemGroupChangedCallback;
}
export declare type DxItemGroupFormat = 'checkbox' | 'radio' | 'dropdown' | 'multiselect';
export default function DxItemGroup(props: IProps): JSX.Element;
export {};
