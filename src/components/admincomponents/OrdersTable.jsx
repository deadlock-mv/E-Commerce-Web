import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  TablePagination
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

function createData(orderId, orderDate, orderStatus, customerId, address, productDetails, totalAmount) {
  return { orderId, orderDate, orderStatus, customerId, address, productDetails, totalAmount };
}

const rows = [
  createData('ORD001', '2023-01-15', 'Delivered', 'CUST001', '123 Main St, City, Country', 'Product A, Product B, Product C, Product D', '$100'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  createData('ORD002', '2023-01-16', 'Pending', 'CUST002', '456 Elm St, City, Country', 'Product C, Product D', '$200'),
  // Add more rows as needed
];

const OrdersTable = () => {
  const [openRow, setOpenRow] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowClick = (orderId) => {
    setOpenRow(openRow === orderId ? null : orderId);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper style={{width: "80%", height: "60vh", display: 'flex', flexDirection: 'column'}}>
      <TableContainer style={{maxHeight: "80%", overflowY: "auto", flex:1}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order ID</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Order Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <React.Fragment key={row.orderId}>
                <TableRow>
                  <TableCell>
                    <IconButton size="small" onClick={() => handleRowClick(row.orderId)}>
                      {openRow === row.orderId ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.orderId}</TableCell>
                  <TableCell>{row.orderDate}</TableCell>
                  <TableCell>{row.orderStatus}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openRow === row.orderId} timeout="auto" unmountOnExit>
                    <div style={{ margin: '10px 0' }}>
                        <Typography variant="h6" style={{ color: "#db6060" }} gutterBottom component="div">
                          Order Details
                        </Typography>
                        <div className="orders-collapse">
                          <div>
                            <Typography><span style={{ fontWeight: 'bold' }}>Customer ID:</span> {row.customerId}</Typography>
                          </div>
                          <div>
                            <Typography><span style={{ fontWeight: 'bold' }}>Address:</span> {row.address}</Typography>
                          </div>
                          <div>
                            <Typography><span style={{ fontWeight: 'bold' }}>Product Details:</span> {row.productDetails}</Typography>
                          </div>
                          <div>
                            <Typography><span style={{ fontWeight: 'bold' }}>Total Amount:</span> {row.totalAmount}</Typography>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination style={{ bottom: "5px"}}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OrdersTable;
