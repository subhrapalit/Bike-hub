import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (

        //Display specific orders
        <Grid container spacing={2}>

            <Grid item xs={12} sm={7}>
                <Orders></Orders>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;