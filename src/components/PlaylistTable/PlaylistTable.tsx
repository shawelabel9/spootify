import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'number' | 'title' | 'album' | 'dateAdded' | 'duration';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: '#', minWidth: 50 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'album',
    label: 'Album', 
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'dateAdded',
    label: 'Date Added',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'duration',
    label: 'Duration',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  number: number,
  title: string,
  album: string,
  dateAdded: string,
  duration: string
}

function createData(
  number: number,
  title: string,
  album: string,
  dateAdded: string,
  duration: string
  
): Data {
  return { number, title, album, dateAdded, duration };
}

const rows = [
  createData(1, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(2, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(3, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(4, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(5, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(6, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(7, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(8, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(9, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(10, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(11, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(12, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(13, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(14, 'Looped', 'kiasmos', "3 days ago","6:01"),
  createData(15, 'Looped', 'kiasmos', "3 days ago","6:01"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',borderRadius:'0px' }}>
      <TableContainer sx={{ maxHeight: 440,  "&::-webkit-scrollbar": {
	  width: 20
    },
    "&::-webkit-scrollbar-track": {
	  backgroundColor: "rgb(39 39 42)"
    },
    "&::-webkit-scrollbar-thumb": {
	  backgroundColor: "gray",
	  borderRadius: 2
    } }}>
        <Table stickyHeader >
          <TableHead >
            <TableRow  >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,borderBottom:'2px solid gray', backgroundColor:'rgb(39 39 42)',color:'rgb(161 161 170)' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{}}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.number}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{borderBottom:'none', backgroundColor:'rgb(39 39 42)',color:'rgb(161 161 170)',cursor:'pointer',}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:'rgb(39 39 42)',color:'rgb(161 161 170)'}}
      />
    </Paper>
  );
}
