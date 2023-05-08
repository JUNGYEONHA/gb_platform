import React, { useEffect } from "react";
import styled from "styled-components";
import "../../css/traffic.css";
import {
  Ol_Echar_flow,
  Bar,
  Line,
  Pie,
  Scatter,
  MultiBar,
  Radar,
  Pictorial,
} from "../../echartCompo";
import SelectInput from "../../olComponent/SelectInput";

const TrafficBox = styled.div`
  border: 1px solid #000;
`;

export const InOutFlow = () => {
  // useEffect(()=> {
  // },[]);
  return (
    <div id="traffic_wrap">
      <TrafficBox className="topMap">
        <SelectInput />
        <Ol_Echar_flow width="100%" height="100%" />
      </TrafficBox>
      <TrafficBox className="topChart">
        <div className="grid-item" id="item1">
          <Scatter width="100%" height="100%" />
        </div>
        <div className="grid-item" id="item">
          <Line width="250px" height="100%" />
        </div>
        <div className="grid-item" id="item3">
          <Bar width="250px" height="100%" />
        </div>
        <div className="grid-item" id="item4">
          <Pie width="250px" height="100%" />
        </div>
      </TrafficBox>
      <TrafficBox className="bomChart">
        {/* dfgdfgdf */}
        <MultiBar width="60%" height="100%" />
        <Radar width="250px" height="100%" />
        <Pictorial width="250px" height="100%" />
      </TrafficBox>
    </div>
  );
};
