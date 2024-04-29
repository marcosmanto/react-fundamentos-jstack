import styled from "styled-components";

export const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: pink;
  margin-bottom: 10px;
  padding: 15px;
  color: rgb(54, 54, 54);

  button:nth-child(2) {
    min-width: 113.64px;
  }

  &.deleted {
    pointer-events: none;
    opacity: 0.3;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    //background-color: aqua;
  }
`;

export const Subtitle = styled.small``;

export const Rate = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 11px;
  font-weight: bold;
  font-family: sans-serif;
  padding: 3px 0px;
  text-align: center;
  width: 80px;
  border: 1px solid #75595d;
  overflow: hidden;
  color: #423235;
  background-color: #b1868d;
  margin-bottom: 3px;
  margin-right: 3px;
  opacity: 0.8;
`;
