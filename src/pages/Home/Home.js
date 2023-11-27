import React from 'react'
import Feature from '../../components/Features/Feature'
import Chart from '../../components/Chart/Chart'
import  {xAxisData} from "../../data.js"
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      {/* {console.log(xAxisData)} */}
      <Feature/>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
      </div>
    </div>
  )
}

export default Home