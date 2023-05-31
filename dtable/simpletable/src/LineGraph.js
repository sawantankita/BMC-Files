import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function LineGraph({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const idData = data.map(user => user.ID);
    const messageDRRNData = data.map(user => user.MessageDRRN);
    const idCounts = countOccurrences(idData);
    const messageDRRNCounts = countOccurrences(messageDRRNData);

    const options = {
      xAxis: {
        type: 'category',
        data: Object.keys(idCounts),
        name:'ID Count',
        nameTextStyle: {
          fontSize: 7 
        }
        // axisLabel: {
        //   rotate: 45,
        //   interval: 0,
        // },
      },
      yAxis: {
        type: 'value',
        name: 'MessageDRRN Count',
          nameTextStyle: {
            fontSize: 7 
          }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '05%',
        left: '30%',
        barWidth: '50%',
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
    },
      series: [
        {
          name: 'ID',
          data: Object.values(idCounts),
          type: 'line',
        },
        {
          name: 'MessageDRRN',
          data: Object.values(messageDRRNCounts),
          type: 'line',
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

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}
