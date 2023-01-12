/// <reference types="react" />
import './CodeFence.scss';
declare global {
    interface Window {
        Prism: any;
    }
}
interface IProps {
    value: string | JSX.Element;
    noCollapse?: boolean;
    noHeader?: boolean;
    autoCollapse?: boolean;
    title?: string;
    language?: string;
    showLineNumbers?: boolean;
    indentation?: string;
    className?: string;
    jsonEditor?: boolean;
    innerRef?: any;
}
export default function CodeFence(props: IProps): JSX.Element;
export {};
