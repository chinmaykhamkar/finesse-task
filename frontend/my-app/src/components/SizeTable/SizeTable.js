import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(size, us, bust, waist, hip) {
  return { size, us, bust, waist, hip };
}

const rows = [
  createData('XS', '0-2', '32.5"','25.5"','35.5"'),
  createData('S', '4-6', '34"','27"','37"'),
  createData('M', '8-10', '36"','29"','39"'),
  createData('L', '12-14', '38"','31"','41"'),
  createData('XL', '14-16', '40"','33"','43"'),
  createData('1X', '16-18', '44"','37"','47"'),
  createData('2X', '18-20', '46"','39"','49"'),
  createData('3X', '20-22', '48"','41"','51"')

];

export default function SizeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='table1-accordon' align="center">Size</TableCell>
            <TableCell className='table1-accordon' align="center">US</TableCell>
            <TableCell className='table1-accordon' align="center">Bust</TableCell>
            <TableCell className='table1-accordon' align="center">Waist</TableCell>
            <TableCell className='table1-accordon' align="center">Hip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.size}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.us}</TableCell>
              <TableCell align="center">{row.bust}</TableCell>
              <TableCell align="center">{row.waist}</TableCell>
              <TableCell align="center">{row.hip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
