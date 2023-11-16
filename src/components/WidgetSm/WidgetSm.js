import React from 'react'
import "./WidgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from '../../data'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
         {newMembers.map(member =>(
            <li className="widgetSmListItem">
            <img src={member.img} alt="" className="widgerSmImg" />
            <div className="widggetSmUser">
               <span className="widgetSmUserName">{member.username}</span>
               <span className="widgetSmUserTitle">{member.title}</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className='widgetSmIcon' style={{fontSize: "1rem"}}/>
            </button>
         </li>
         ))}
      </ul>
    </div>
  )
}

export default WidgetSm