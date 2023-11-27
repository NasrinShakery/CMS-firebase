import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import "./Chart.css"

export default function Chart({title, data,dataKey, grid}) {
  return (
      <div className="chart">
         {/* {console.log(data)} */}
          <h3 className='chartTitle'>{title}</h3>
          <ResponsiveContainer width="90%" aspect={5}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke='#ccc' />
                  {/* <YAxis dataKey="Sale" /> */}
                  <Line type="monotone" dataKey={dataKey} stroke='#9a8802' />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='#eddada' strokeDasharray="6" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
  )
}