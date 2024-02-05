import styled from "styled-components";

export const ProgressbarContainer = styled.div`
  width: 450px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  border-radius: 60px;
  background-color: #494b52;
  box-shadow: 0px 0px 20px #111;
  overflow: hidden;
`;

export const Progressbar = styled.div`
  width: 0%;
  background: rgb(255, 174, 105);
  background: green;
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const ProgressbarTextContainer =styled.div`
  width: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  color: aliceblue;
  font-size: 30px;
`;
