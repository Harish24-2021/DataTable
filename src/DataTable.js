import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "User Name", width: 130 },
  {
    field: "city",
    headerName: "City",
    valueGetter: (params) => {
      return params.row.address.city;
    },
    width: 120
  },
  {
    field: "suite",
    headerName: "Suite",
    width: 100,
    valueGetter: (params) => {
      return params.row.address.suite;
    }
  },
  {
    field: "zipcode",
    headerName: "Zip Code",
    width: 110,
    valueGetter: (params) => {
      return params.row.address.zipcode;
    }
  }
];



export default function DataTable(props) {
  const [rows, setRows] = useState("");

  const getRows = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setRows(result);
      });
  };

  useEffect(() => {
    getRows();
  }, []);

  return (
    <div style={{ height: 800, width: "60%", }}>
      <button onClick={()=>props.setNewForm(true)} >+</button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />

    </div>
  );
}
