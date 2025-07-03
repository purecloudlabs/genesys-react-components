import React from 'react';
import { BaseComponentProps } from '..';
import './LoadingPlaceholder.scss';
interface IProps extends BaseComponentProps {
    text?: string;
}
export default function LoadingPlaceholder(props: IProps): React.JSX.Element;
export {};
