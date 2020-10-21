import React from 'react'
import { Table, TableHeader, TableRow, TableCell } from '../styles/TableStyle';
import { capitalized } from '../services/dataTypes.service';

const TableComponent = props => {
    const { data, headers, onRowClick } = props;
    return (
        <Table>
            <TableRow>
                {
                    // Render match headers that transmitted by props.
                    headers.map(header => <TableHeader>{capitalized(header)}</TableHeader>)
                }
            </TableRow>
            {
                // Render match data that transmitted by props.
                data.map(item =>
                    <TableRow onClick={() => onRowClick(item.id)}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.founded || item.position}</TableCell>
                        <TableCell>{item.address || item.nationality}</TableCell>
                    </TableRow>
                )
            }
        </Table>
    )
}

// To avoid error cases of undefined data and function calls.
TableComponent.defaultProps = {
    onRowClick: () => { },
    headers: [],
}

export default TableComponent;
