import styled from "styled-components";

export default styled.h1`
  font-family: "BadaBoom BB", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.1em;
  color: ${(props) => props.inputcolor || "#7530e2"};
`;
