import React from 'react';
import { VoidEventCallback } from '..';
import './DxButton.scss';
interface IProps {
    type?: 'primary' | 'secondary' | 'link';
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: VoidEventCallback;
}
export default function DxButton(props: IProps): JSX.Element;
export {};
