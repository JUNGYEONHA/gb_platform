import React, { useEffect } from "react";
import styled from 'styled-components';
import '../../css/traffic.css'
import { Ol_Echar_flow, Bar, Line, Pie, Scatter, Pictorial, MultiBar, Radar } from '../../echartCompo';

const TrafficBox = styled.div`
`;

export const Card = () => {
  // useEffect(()=> {
  // },[]);
  return (
    <div id="traffic_wrap">
      <TrafficBox className="topMap">
        <Ol_Echar_flow width="670px" height="100%"/>
      </TrafficBox>
      <TrafficBox className="topChart">
        <div className="grid-item" id="item1">
          <Scatter width="250px" height="100%"/> 
        </div>
        <div className="grid-item" id="item2">
          <Line width="250px" height="100%"/> 
        </div>
        <div className="grid-item" id="item3">
          <Bar width="250px" height="100%"/>
        </div>
        <div className="grid-item" id="item4">
          <Pie width="250px" height="100%"/>
        </div>
      </TrafficBox>
      <TrafficBox className="bomChart">
        <MultiBar width="60%" height="100%"/> 
        <Radar width="250px" height="100%"/> 
        <Pictorial width="250px" height="100%"/> 
      </TrafficBox>
    </div>
  );
};
