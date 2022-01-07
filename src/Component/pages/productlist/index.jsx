import "./product.css";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ProductRows } from "../../../Dammy";
import { useState } from "react";

export default function Productlist() {
  const [data, setData] = useState(ProductRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistuser">
            <img className="Productlistimg" src={params.row.img} alt="me" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
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
            <Link to={"/product/" + params.row.id}>
              <button className="productlistedit">Edit</button>
            </Link>
            <DeleteOutline
              className="productlistedelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productlist">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
