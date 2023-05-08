import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { TabCont } from "pages/유동인구/pages/TabCont";
import data1 from "data/경북 시군구.json";
import data2 from "data/경북 읍면동.json";

/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledHeader = styled.div`
  background-color: ivory;
  padding: 8px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
`;
const TabMenu = styled.ul`
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;

  .submenu {
    cursor: pointer;
    display: flex;
    width: 200px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid #000;
    align-items: center;
    justify-content: center;
  }

  .focused {
    background-color: rgb(255, 255, 255);
    color: rgb(21, 20, 20);
  }

  & div.desc {
  }
`;

export const Header = (props) => {
  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: "유입유출 인구분석", val: "Tab menu ONE" },
    { name: "인구이동 패턴", val: "Tab menu TWO" },
    { name: "카드사용 분석", val: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    props.setClickTab(index);
    clickTab(index);
  };
  return (
    <StyledHeader>
      <div>
        <input type="search" placeholder="대상지 검색" />
        <select>
          {data1.features.map((el, index) => (
            <option>{el.properties.SIG_KOR_NM}</option>
          ))}
        </select>
      </div>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            key={index}
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
    </StyledHeader>
  );
};