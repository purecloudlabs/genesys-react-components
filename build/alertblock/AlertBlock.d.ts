import React from 'react';
import './AlertBlock.scss';
interface IProps {
    title?: string;
    alertType?: 'info' | 'success' | 'critical' | 'warning' | 'toast';
    collapsible?: boolean;
    autoCollapse?: boolean;
    indentation?: number;
    children?: any;
    className?: string;
}
export default function AlertBlock(props: IProps): React.JSX.Element;
export {};
