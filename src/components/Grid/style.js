import styled from "styled-components";

const Cell = styled.div`
  width: 14.2857%;
  height: 55px;
  font-size: 0.7em;
  cursor: pointer;
  /* align-items: center;
  justify-content: center;
  display: flex;
  grid-gap: 5px; */
`;
Cell.PointsWrapper = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
  grid-gap: 3px;
  justify-content: center;
`;

Cell.Date = styled.div`
  display: flex;
  margin: 4px auto;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  align-self: center;
  justify-content: center;
  color: ${({ current }) => (current ? "#FF0000" : "#000")};
  font-weight: ${({ current }) => (current ? 700 : 500)};
  background: ${({ current }) => (current ? "#f7efc1" : "#fff")};
  border-radius: 100%;
`;

export { Cell };
