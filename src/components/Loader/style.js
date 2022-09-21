import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CustomLoader = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -70px;
  left: 50%;
  margin-left: -38px;
`;

export { Overlay, CustomLoader };
