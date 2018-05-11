import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const json = require('./data.json');
class TableClass extends Component {
    render() {
        const dataMapping = () => {
            return (json.map((e, i, a)=>{
                return (
                    <TableRow>
                        <TableRowColumn key={'company_column' + i}>{e.company}</TableRowColumn>
                        <TableRowColumn key={'estimate_column' + i}>{e.estimate_amount}</TableRowColumn>
                        <TableRowColumn key={'estimator_column' + i}>{e.estimator}</TableRowColumn>
                        <TableRowColumn key={'date_column' + i}>{e.date}</TableRowColumn>
                    </TableRow>
                )
            }))

        }


        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Company Name</TableHeaderColumn>
                        <TableHeaderColumn>Bid</TableHeaderColumn>
                        <TableHeaderColumn>Estimator</TableHeaderColumn>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataMapping()}
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