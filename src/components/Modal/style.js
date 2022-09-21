import styled from "styled-components";

const CustomModal = styled.div`
  background: white;
  position: absolute;
  width: 50%;
  text-align: center;
  left: 25%;
  top: 5%;
  border-radius: 5px;

  .inner {
    padding: 20px 30px 30px 30px;
  }

  h3 {
    margin: 0;
    background: #e6e6e6;
    padding: 12px;
    border-radius: 5px;
  }

  p {
    font-size: 0.8em;
    line-height: 1.5em;
  }

  .close {
    margin-top: 22px;
    font-size: 0.7em;
    display: block;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export { CustomModal, Overlay };
