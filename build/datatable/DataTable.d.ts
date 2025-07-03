import React from 'react';
import { BaseComponentProps, DataTableRow } from '..';
import './DataTable.scss';
interface IProps extends BaseComponentProps {
    rows: DataTableRow[];
    headerRow?: DataTableRow;
    className?: string;
    indentation?: number;
    sortable?: boolean;
    filterable?: boolean;
}
export default function DataTable(props: IProps): React.JSX.Element;
export {};
