import styled from "styled-components";

export const GridArea = styled.div`
  padding: 1rem;
  grid-area: ${props => props.area};
  width: 100%;
`;
