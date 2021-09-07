import React from 'react'
import { Paper, Box, Typography } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import useStyles from './useStyles';

const data = [
    {
      name: '01 May',
      sales: 12,
      orders: 15,
      amt: 2400,
    },
    {
      name: '02 May',
      sales: 20,
      orders: 32,
      amt: 2210,
    },
    {
      name: '03 May',
      sales: 7,
      orders: 10,
      amt: 2290,
    },
    {
      name: '04 May',
      sales: 13,
      orders: 4,
      amt: 2000,
    },
    {
      name: '05 May',
      sales: 32,
      orders: 42,
      amt: 2181,
    },
    {
      name: '06 May',
      sales: 16,
      orders: 19,
      amt: 2500,
    },
    {
      name: '07 May',
      sales: 23,
      orders: 17,
      amt: 2100,
    },
    {
      name: '08 May',
      sales: 21,
      orders: 19,
      amt: 2100,
    },
    {
      name: '09 May',
      sales: 7,
      orders: 17,
      amt: 2100,
    },
  ];
  

const RevenueChart = () => {
    const classes = useStyles();
    return (
        <Box>
            <Paper>
                <Box p={1}>
                    <Box>
                        <Typography variant="h1">Sales Chart</Typography>
                    </Box>
                    <Box>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={data} className={classes.lineChart}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid />
                                <Line type="monotone" dataKey="orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default RevenueChart;
