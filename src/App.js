import React from 'react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { AgGridReact } from "ag-grid-react";

const CellRenderer = () => {
  // 
  return <div style={{backgroundColor: "red", height: "50px", width: "100%"}}></div>;
};

const COLUMN_DEFS = [
  {
    headerName: "autoHeight column",
    cellRendererFramework: CellRenderer,
    autoHeight: true,
    width: 200
  }
];

const data = [{}, {}, {}];

function App() {
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "150px", // in theory, the red cells should cover more than the height of the table, but it doesn't do so
        width: "200px",
      }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={COLUMN_DEFS}
      /> 
    </div>
  );
}

export default App;
