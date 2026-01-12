import React from 'react';
import { BaseComponentProps } from '..';
import './DxLabel.scss';
interface IProps extends BaseComponentProps {
    label?: string;
    description?: string;
    useFieldset?: boolean;
    className?: string;
    children: React.ReactNode;
}
export default function DxLabel(props: IProps): React.JSX.Element;
export {};
