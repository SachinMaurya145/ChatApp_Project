
import './App.css';
import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './JsonData'

function App() {

  const flavanoidsData = Data.map((val) => {
    return val.Flavanoids;
  })

  const ashData = Data.map((val) => {
    return val.Ash;
  })

  const alcoholData = Data.map((val) => {
    return val.Alcohol;
  })

  const magnesiumData = Data.map((val) => {
    return val.Magnesium;
  })


  const firstChart = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: flavanoidsData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: ashData,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const secondChart = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: alcoholData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: magnesiumData,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };


  return (
    <div>
      <h2 >Chart to be drawn between “Flavanoids” on the horizontal axis and “Ash” on the
        vertical axis </h2>
      <ReactECharts option={firstChart} />
      <h2 >“Alcohol” categories on the horizontal axis and the
        minimum “Magnesium” value for each alcohol category on the vertical axis </h2>
      <ReactECharts option={secondChart} />
    </div>
  );
};

export default App;
