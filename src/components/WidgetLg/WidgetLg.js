import React from 'react'
import "./WidgetLg.css"
import {transactions} from "../../data"

const WidgetLg = () => {

  const Button = ({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transactions.map(transaction => (
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={transaction.img} className='widgetLgImg' alt="" />
            <span className="widgetLgName">soha</span>
          </td>
          <td className="widgetLgDate">
            {transaction.date}
          </td>
          <td className="widgetLgAmount">
            {transaction.amount}
          </td>
          <td className="widgetLgStatus">
            <Button type={transaction.status}/>
          </td>
        </tr>
        ))}
      </table>
    </div>
  )
}

export default WidgetLg