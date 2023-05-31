import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarGraph({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const oriData = data.map(user => user.OriginIMSID).flat();
    const idData = data.map(user => user.ID);
    const oriCounts = countOccurrences(oriData);
    const idCounts = countOccurrences(idData);

    const options = {
      xAxis: [
        {
          type: 'category',
          name:'ID Count',
          data: Object.keys(idData),
          axisLabel: {
            fontSize: 12 
          },
          nameTextStyle: {
            fontSize: 7 
          }
        },
        // {
        //   type: 'category',
        //   data: Object.keys(oriCounts),
        //   axisLabel: {
        //     // rotate: 45,
        //     // interval: 0,
        //   },
        // },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'OriginIMSID Count',
          nameTextStyle: {
            fontSize: 7 
          }
        },
        // {
        //   type: 'value',
        //   name: 'Date',
        // },
      ],
      // hoverBackgroundColor:'#E5E4E2',
      tooltip: {
       trigger: 'item'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
    },
   
      legend: {
        top: '05%',
        left: '30%',
        barWidth: '50%',
      },
      series: [
        {
          name: 'OriginIMSID',
    
          data: Object.values(oriCounts),
          type: 'bar',
          // xAxisIndex: 1,
          // yAxisIndex: 0,
          showBackground: true,
                backgroundStyle: {
                  color: 'rgba(180, 180, 180, 0.2)'
                },
                stack:"tot"
        },
        {
          name: 'ID',
          data: Object.values(idCounts),
          type: 'bar',
          // xAxisIndex: 0,
          // yAxisIndex: 1,
          stack:"tot"
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  // Helper function to count occurrences
  const countOccurrences = (dataArray) => {
    const counts = {};

    for (const data of dataArray) {
      counts[data] = (counts[data] || 0) + 1;
    }

    return counts;
  };

  return <div ref={chartRef} 
  style={{
     width: '100%', height: '400px'
      }} />;
}
