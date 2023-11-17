import React, { useState } from "react";
import { products } from "../../data";
import "./Products.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";

const Products = () => {
  const [productsDatas, setProductsDatas] = useState(products);

   const userDelete = (productID) => {
      console.log(productID);
      setProductsDatas(productsDatas.filter((product) => product.id != productID));
   };

   const columns = [
      {
         field: "id",
         headerName: "ID",
         width: 90,
      },
      {
         field: "title",
         headerName: "Name",
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
                  <Link to={`/product/${params.row.id}`} className="link">
                     <div className="Product">
                        <img src={params.row.avatar} className="avatarImg" />
                        <span className="ProductName">
                           {params.row.title || ""}
                        </span>
                     </div>
                  </Link>
               </>
            );
         },
      },
      {
         field: "price",
         headerName: "Price",
         width: 200,
      },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={`/product/${params.row.id}`} className="link">
                     <button className="productsEditButton">Edit</button>
                  </Link>
                  <button
                     className="productsDeleteIcon"
                     onClick={() => userDelete(params.row.id)}
                  >
                     <DeleteOutlineIcon />
                  </button>
               </>
            );
         },
      },
   ];

   return (
      <div className="products">
         <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
               rows={productsDatas}
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
}

export default Products