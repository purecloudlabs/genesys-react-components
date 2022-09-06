import { ReactNode } from 'react';
import './Tooltip.scss';
interface IProps {
    text: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    children?: ReactNode;
    className?: string;
    isShowing?: boolean;
}
export default function Tooltip(props: IProps): JSX.Element;
export {};
