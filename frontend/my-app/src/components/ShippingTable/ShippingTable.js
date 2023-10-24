import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(location, std, exp) {
  return { location, std, exp };
}

const rows = [
  createData('US', '5-9 business days', '2-5 business days*'),
  createData('UK', '5-8 business days', '2-5 business days*'),
  createData('AU', '5-8 business days', 'Not Available'),
  createData('DE', '5-12 business days', 'Not Available'),
];

export default function ShippingTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Standard Shipping</TableCell>
            <TableCell align="center">Express Shipping</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.location}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.std}</TableCell>
              <TableCell align="center">{row.exp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
