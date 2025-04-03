import React from 'react';
import './DxLabel.scss';
interface IProps {
    label?: string;
    description?: string;
    useFieldset?: boolean;
    className?: string;
    children: React.ReactNode;
}
export default function DxLabel(props: IProps): React.JSX.Element;
export {};
