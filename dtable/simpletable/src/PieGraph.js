import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function PieGraph({ data }) {
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
        data: Object.keys(idData),
         show: false,
         name:'ID Count',
          
        },
      ],
      yAxis: [
        {
          type: 'value',
         // name: 'OriginIMSID Count',
        },
       
      ],
      
      tooltip: {
        trigger: 'item',
      // formatter:'{oriCounts} ms' ,
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        show:true,
        orient: 'vertical',
        left: 50,
        data: [
         { name: 'ID Count', icon: 'roundRect' },
          { name: 'OriginIMSID Count', icon: 'roundRect' },
        ],
      },
      series: [
        {
          name:'ID Count',
          data: Object.values(idCounts),
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'left'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
              formatter: '{b}',
            }
          },
          labelLine: {
            show: true
          },
          
        },
        {
          name: 'OriginIMSID Count',
          data: Object.values(oriCounts),
          type: 'pie',
          axisLabel: {
            rotate: 0,
            interval: 5,
          },
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
              formatter: '{b}',
            }
          },
          labelLine: {
            show: false
          },
          
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

  return <div ref={chartRef} style={{ width: "100%", height: "400%" }} />;
}
