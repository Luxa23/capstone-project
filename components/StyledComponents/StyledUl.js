import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;

  & ul > li {
    border-top: solid 1px var(--tertiary-color);
  }
`;

export default StyledUl;
