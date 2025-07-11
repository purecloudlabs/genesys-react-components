import React from 'react';
import { BaseComponentProps, VoidEventCallback } from '..';
import './DxButton.scss';
interface IProps extends BaseComponentProps {
    type?: 'primary' | 'secondary' | 'link';
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: VoidEventCallback;
    onClickRaw?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function DxButton(props: IProps): React.JSX.Element;
export {};
