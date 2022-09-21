import styled from "styled-components";
import { ReactComponent as DoubleRight } from "../../assets/arrow-right-fill.svg";
import { ReactComponent as DoubleLeft } from "../../assets/arrow-left-fill.svg";
import { ReactComponent as Right } from "../../assets/arrow-left-line.svg";
import { ReactComponent as Left } from "../../assets/arrow-right-line.svg";

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  grid-gap: 3px;
`;

NavigationContainer.DoubleRight = styled(DoubleRight)`
  cursor: pointer;
`;
NavigationContainer.DoubleLeft = styled(DoubleLeft)`
  cursor: pointer;
`;
NavigationContainer.Right = styled(Right)`
  cursor: pointer;
`;
NavigationContainer.Left = styled(Left)`
  cursor: pointer;
`;

export { NavigationContainer };
