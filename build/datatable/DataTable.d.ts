/// <reference types="react" />
import { DataTableRow } from '..';
import './DataTable.scss';
interface IProps {
    rows: DataTableRow[];
    headerRow?: DataTableRow;
    className?: string;
    indentation?: number;
    sortable?: boolean;
    filterable?: boolean;
}
export default function DataTable(props: IProps): JSX.Element;
export {};
