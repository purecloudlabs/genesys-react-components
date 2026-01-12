import React from 'react';
import { BaseComponentProps } from '..';
import './DxAccordionGroup.scss';
interface IProps extends BaseComponentProps {
    children: React.ReactNode;
    className?: string;
}
export default function DxAccordionGroup(props: IProps): React.JSX.Element;
export {};
