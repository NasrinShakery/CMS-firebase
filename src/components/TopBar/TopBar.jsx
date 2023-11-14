import React from 'react'
import "./TopBar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className="topbarwrapper">
         
         <div className="topleft">
            <span className="logo">ShikolMolok <span className="logoBrand">&#9813;</span></span>
         </div>

         <div className="topRight">
            <div className="topbarIconsContainer">
               <NotificationsIcon/>
               <span className="badge">2</span>
            </div>
            <div className="topbarIconsContainer">
               <LanguageIcon/>
               <span className="badge">2</span>
            </div>
            <div className="topbarIconsContainer">
               <SettingsIcon/>
            </div>
            <img className='topbarAvatar' src="./images/nansi2.JPEG" alt="" />
         </div>

      </div>
    </div>
  )
}

export default TopBar