import { ReactNode } from 'react';
import './DataTable.scss';
interface IProps {
    rows: DataTableRow[];
    headerRow?: DataTableRow;
    className?: string;
    indentation?: number;
    sortable?: boolean;
    filterable?: boolean;
    contentParser?: MarkdownRendererPlugin;
}
export interface DataTableRow {
    cells: DataTableCell[];
}
export interface DataTableCell {
    raw?: string;
    content: string;
    parsedContent?: string | number | Date;
    align?: 'left' | 'center' | 'right';
    copyButton?: boolean;
}
export interface MarkdownRendererPlugin {
    (node: string): ReactNode | undefined;
}
export default function DataTable(props: IProps): JSX.Element;
export {};
