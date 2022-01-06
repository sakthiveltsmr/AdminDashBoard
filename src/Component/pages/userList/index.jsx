import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserRows } from "../../../Dammy";
import { useState } from "react";
export default function Userlist() {
  const [data, setData] = useState(UserRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "UserName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userlistuser">
            <img className="userlistimg" src={params.row.avatar} alt="me" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlistedit">Edit</button>
            </Link>
            <DeleteOutline
              className="userlistedelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="container">
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
