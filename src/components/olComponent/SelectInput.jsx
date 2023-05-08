import React from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: absolute;
  z-index: 1;
`;

const SelectInput = () => {
  const datePicker = (e) => {
    const target = e.target;

    const dateInput = document.createElement("input");
    dateInput.type = "date";

    target.after(dateInput);
  };

  return (
    <SelectBox>
      <select>
        <option>유입</option>
        <option>유출</option>
      </select>
      <select>
        <option>기간 설정</option>
      </select>
      <select>
        <option>시간 설정</option>
      </select>
      <select>
        <option>성별 설정</option>
        <option>남자</option>
        <option>여자</option>
      </select>
      <select>
        <option>연령 설정</option>
      </select>
    </SelectBox>
  );
};

export default SelectInput;
