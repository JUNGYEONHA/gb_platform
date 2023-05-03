import React, { useEffect } from "react";
import styled from 'styled-components';
import { Ol_Echar_flow, Bar, Line, Pie } from '../../echartCompo';

const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
`;


export const InOutFlow = () => {
  // useEffect(()=> {
  // },[]);
  return (
    <Wrap>
      <Ol_Echar_flow/>
      <Line width="250px" height="300px"/> 
      <Bar width="250px" height="300px"/>
      <Pie width="250px" height="300px"/>
    </Wrap>
  );
};
