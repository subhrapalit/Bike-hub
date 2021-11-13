import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('https://obscure-reaches-98124.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (

        // Display all orders to Admin
        <div>
            <h2>Manage All Orders</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Ordered Product</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="right">{order.product}</TableCell>

                                <TableCell>
                                    {/* <Button variant="outlined">Update Status</Button> */}
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;