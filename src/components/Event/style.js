import styled from "styled-components";

const getColor = (status) => {
  status = status?.toLowerCase();
  switch (status) {
    case "business_activities":
      return { bg: "#00B533" };
    case "personal_schudle":
      return { bg: "#ff0000" };
    case "team_schudle":
      return { bg: "#04A6FB" };
    default:
      return { bg: "#EBF9EF" };
  }
};

const Point = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: ${({ status }) => getColor(status).bg};
  cursor: pointer;
`;

export { Point };
