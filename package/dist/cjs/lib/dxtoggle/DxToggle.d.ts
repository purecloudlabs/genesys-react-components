/// <reference types="react" />
import { GenesysDevIcons } from 'genesys-dev-icons';
import { BooleanChangedCallback } from '..';
import './DxToggle.scss';
export interface DxToggleProps {
    isTriState?: boolean;
    initialValue?: boolean;
    label?: string;
    description?: string;
    trueIcon?: GenesysDevIcons;
    falseIcon?: GenesysDevIcons;
    onChange?: BooleanChangedCallback;
}
export default function DxToggle(props: DxToggleProps): JSX.Element;
