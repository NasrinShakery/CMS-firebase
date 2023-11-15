import React from 'react'
import Feature from '../../components/Features/Feature'
import Chart from '../../components/Chart/Chart'
// import  {xAxisDate} from "../../data"

import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      {/* {console.log(xAxisDate)} */}
      <Feature/>
      <Chart grid title="Month Sale"  dataKey="Sale" />
    </div>
  )
}

export default Home