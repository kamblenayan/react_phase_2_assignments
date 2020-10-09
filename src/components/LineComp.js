import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react'
import * as _ from 'lodash';
export default function LineComp(props) {

    console.log("Linechart")

    const maxdomain = _.maxBy(props.d, 'amount');

    const renderLineChart = (
        <LineChart width={400} height={400} data={props.d}>
            <Legend verticalAlign="top" height={36} />
            <Line name="customer spendings" type="monotone" dataKey="amount" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis type="number" dataKey="day" domain={[0, 31]}
                label={{ value: "Date of Month", position: 'insideBottomRight', offset: 0 }} />
            <YAxis type="number" domain={[0, parseInt(maxdomain.amount)]} label={{ value: "Amount", position: 'insideTopLeft' }} />
            <Tooltip />
        </LineChart>
    );
    return (
        <div>
            <section><h4>Customer spendings for current month</h4></section>
            <section>{renderLineChart}</section>
        </div>
    )
}
