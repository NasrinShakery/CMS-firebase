// import React from "react";
// import {
//    ResponsiveContainer,
//    LineChart,
//    Line,
//    XAxis,
//    GratesianGrid,
//    Tooltip,
//    CartesianGrid,
// } from "recharts";

// const Chart = ({ title, data, datakey, grid }) => {
//    return (
//       <div className="chart">
//          <h3 className="chartTitle">{title}</h3>
//          {/* <ResponsiveContainer width={"100%"} aspect={6} />
//       <LineChart data={data} >
//          <XAxis dataKey={"name"} stroke='#eddada'/>
//          <Line dataKey={datakey} stroke='#eddada'/>
//          <Tooltip/>
//          {grid && <CartesianGrid stroke={"#9a8802"} strokeDasharray={"5 5"}/> }
//       </LineChart> */}
//          <LineChart
//             width={600}
//             height={300}
//             data={data}
//             margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//          >
//             <Line type="monotone" dataKey={datakey} stroke="#8884d8" />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             {/* <YAxis /> */}
//          </LineChart>
//       </div>
//    );
// };

// export default Chart;




import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import  {xAxisDate} from "../../data"
import "./Chart.css"

export default function Chart({title, dataKey, grid}) {
  return (
      <div className="chart">
         {console.log(xAxisDate)}
          <h3 className='chartTitle'>{title}</h3>
          <ResponsiveContainer width="100%" aspect={4}>
              <LineChart data={xAxisDate}>
                  <XAxis dataKey="name" stroke='#ccc' />
                  <Line type="monotone" dataKey={"Sale"} stroke='#9a8802' />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='#eddada' strokeDasharray="10" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
  )
}