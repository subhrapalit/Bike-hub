import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const url = `https://obscure-reaches-98124.herokuapp.com/orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    //Delete Order
    const handleDelete = id => {
        const url = `https://obscure-reaches-98124.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Sure to Delete This Order?')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);

                }

            })

    }
    return (
        //Display orders
        <div>
            <h2>You Made {orders.length} Orders </h2>


            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Ordered Product</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="right">{order.product}</TableCell>

                                <TableCell>
                                    <Button onClick={() => handleDelete(order._id)} variant="outlined" startIcon={<DeleteIcon />}>Delete Order</Button>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;