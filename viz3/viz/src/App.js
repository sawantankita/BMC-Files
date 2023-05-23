import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import  echarts from 'echarts';
import { Chart as ChartJS } from "chart.js/auto";


function App() {
  
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Date),
    datasets: [
      {
        label: "Millis",
        data: UserData.map((data) => data.Millis),
        backgroundColor: [
         'rgba(42,113,208,0.6)',
          "#2a9bd0",
          "#2a8dd0",
          "#2a7fd0",
          "#2a71d0",
          "#dae7f8",
          "#a9c7ee"
        ],
        // borderColor: "red",
        borderWidth: 1,
      
        hoverBackgroundColor:'#E5E4E2',
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          barWidth: '80%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          offset:'true',
          containLabel: true
        },
      },
    ],
  });

  

  return (
    <div className="App">
      <div style={{ width: 700,  position: 'relative' }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;