import './App.css';
import React, { Component } from 'react';
import { UserData } from "./Data";
import DataTable from './components/DataTable';
import BarGraph from './BarGraph';
import { useState } from 'react';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';



export default function App() {
  const [tableData, setTableData] = useState(UserData);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >

      {/* <h1>Data Table</h1> */}
      <DataTable tableData={tableData} /> 


      <div class='d1'>
        <BarGraph data={tableData} />
      </div>

      <div class='d1'>
        <LineGraph data={tableData} />
      </div>

      <div class='d1'>
        <PieGraph data={tableData} />
      </div>






    </div>


  );
}

