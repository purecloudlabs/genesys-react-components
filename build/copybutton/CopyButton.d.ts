/// <reference types="react" />
import './CopyButton.scss';
interface IProps {
    copyText: string;
    className?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}
export default function CopyButton(props: IProps): JSX.Element;
export {};
