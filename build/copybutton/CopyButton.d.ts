import React from 'react';
import { BaseComponentProps } from '..';
import './CopyButton.scss';
interface IProps extends BaseComponentProps {
    copyText: string;
    className?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}
export default function CopyButton(props: IProps): React.JSX.Element;
export {};
