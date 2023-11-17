import React, { useState } from "react";
import { userRows } from "../../data";
import "./UserList.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";

const UserList = () => {
   const [userDatas, setUserDatas] = useState(userRows);

   const userDelete = (userID) => {
      console.log(userID);
      setUserDatas(userDatas.filter((user) => user.id != userID));
   };

   const columns = [
      {
         field: "id",
         headerName: "ID",
         width: 90,
      },
      {
         field: "user",
         headerName: "User",
         width: 200,
         // rendeCell: (params) => {
         //    console.log(params);
         // },
         //
         // valueGetter: (params) =>{
         //    console.log(params)
         //    return(
         //    `${params.row.avatar || ""} ${params.row.username || ""}`
         // )},
         //
         renderCell: (params) => {
            console.log(params);
            return (
               <>
                  <Link to="/" className="link">
                     <div className="userListUser">
                        <img src={params.row.avatar} className="avatarImg" />
                        <span className="userListUserName">
                           {params.row.username || ""}
                        </span>
                     </div>
                  </Link>
               </>
            );
         },
      },
      {
         field: "email",
         headerName: "Email",
         width: 200,
      },
      {
         field: "status",
         headerName: "Status",
         width: 120,
      },
      {
         field: "transaction",
         headerName: "Transaction",
         width: 160,
      },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={`/user/${params.row.id}`} className="link">
                     <button className="userListEditButton">Edit</button>
                  </Link>
                  <button className="userListDeleteIcon" onClick={() => userDelete(params.row.id)}>
                     <DeleteOutlineIcon
                        
                        
                     />
                  </button>
               </>
            );
         },
      },
   ];

   return (
      <div className="userList">
         <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
               rows={userDatas}
               columns={columns}
               // pageSize={4}
               initialState={{
                  pagination: {
                     paginationModel: {
                        pageSize: 5,
                     },
                  },
               }}
               pageSizeOptions={[5]}
               // checkboxSelection
               disableRowSelectionOnClick
            />
         </Box>
      </div>
   );
};

export default UserList;
