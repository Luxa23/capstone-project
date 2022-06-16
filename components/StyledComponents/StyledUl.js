import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;
  grid-area: main;
  overflow: auto;

  li:first-child {
    border-top: solid 1px var(--tertiary-color);
  }
`;

export default StyledUl;
