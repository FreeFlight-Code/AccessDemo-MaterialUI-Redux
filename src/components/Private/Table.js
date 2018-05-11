import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class TableClass extends Component {
    render() {
        



        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Company Name</TableHeaderColumn>
                        <TableHeaderColumn>Estimator</TableHeaderColumn>
                        <TableHeaderColumn>Bid</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>

            </Table>
        );
    }
}

export default TableClass;

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
// const TableExampleSimple = () => (
//   <Table>
//     <TableHeader>
//       <TableRow>
//         <TableHeaderColumn>ID</TableHeaderColumn>
//         <TableHeaderColumn>Name</TableHeaderColumn>
//         <TableHeaderColumn>Status</TableHeaderColumn>
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       <TableRow>
//         <TableRowColumn>1</TableRowColumn>
//         <TableRowColumn>John Smith</TableRowColumn>
//         <TableRowColumn>Employed</TableRowColumn>
//       </TableRow>
//       <TableRow>
//         <TableRowColumn>2</TableRowColumn>
//         <TableRowColumn>Randal White</TableRowColumn>
//         <TableRowColumn>Unemployed</TableRowColumn>
//       </TableRow>
//       <TableRow>
//         <TableRowColumn>3</TableRowColumn>
//         <TableRowColumn>Stephanie Sanders</TableRowColumn>
//         <TableRowColumn>Employed</TableRowColumn>
//       </TableRow>
//       <TableRow>
//         <TableRowColumn>4</TableRowColumn>
//         <TableRowColumn>Steve Brown</TableRowColumn>
//         <TableRowColumn>Employed</TableRowColumn>
//       </TableRow>
//       <TableRow>
//         <TableRowColumn>5</TableRowColumn>
//         <TableRowColumn>Christopher Nolan</TableRowColumn>
//         <TableRowColumn>Unemployed</TableRowColumn>
//       </TableRow>
//     </TableBody>
//   </Table>
// );

// export default TableExampleSimple;