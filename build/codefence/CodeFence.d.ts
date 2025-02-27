/// <reference types="react" />
import './CodeFence.scss';
declare global {
    interface Window {
        Prism: any;
    }
}
interface IProps {
    value: string;
    noCollapse?: boolean;
    noHeader?: boolean;
    autoCollapse?: boolean;
    title?: string;
    language?: string;
    showLineNumbers?: boolean;
    indentation?: number;
    className?: string;
    jsonEditor?: boolean;
    innerRef?: any;
    disableSyntaxHighlighting?: boolean;
}
export default function CodeFence(props: IProps): JSX.Element;
export {};
