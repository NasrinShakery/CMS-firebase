import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlneIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dashboard</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem active">
                     <LineStyleIcon  className="sidebarIcon" />
                     <span className="sidebarItemText">Home</span>
                  </li>
                  <li className="sidebarListItem">
                     <TimelineIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Analytics</span>
                  </li>
                  <li className="sidebarListItem">
                     <TrendingUpIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Sales</span>
                  </li>
               </ul>
            </div>

            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Quick Menu</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem ">
                     <PermIdentityIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Users</span>
                  </li>
                  <li className="sidebarListItem ">
                     <PermIdentityIcon className="sidebarIcon" />
                     <span className="sidebarItemText">New User</span>
                  </li>
                  <li className="sidebarListItem">
                     <StorefrontIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Products</span>
                  </li>
                  <li className="sidebarListItem">
                     <AttachMoneyIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Transaction</span>
                  </li>
                  <li className="sidebarListItem">
                     <BarChartIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Transaction</span>
                  </li>
               </ul>
            </div>

            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Notifications</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem">
                     <MailOutlneIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Mail</span>
                  </li>
                  <li className="sidebarListItem">
                     <DynamicFeedIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Feedback</span>
                  </li>
                  <li className="sidebarListItem">
                     <ChatBubbleOutlineIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Message</span>
                  </li>
               </ul>
            </div>

            <div className="sidebarMenu">
               <h3 className="sidebarTitle">staff</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem">
                     <WorkOutlineIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Manage</span>
                  </li>
                  <li className="sidebarListItem">
                     <TimelineIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Analytics</span>
                  </li>
                  <li className="sidebarListItem">
                     <ReportIcon className="sidebarIcon" />
                     <span className="sidebarItemText">Reports</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
