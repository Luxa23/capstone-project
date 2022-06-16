import styled from 'styled-components';

const StyledNavigation = styled.nav`
  grid-area: navigation;
  background: #fff1f3;
  /* position: fixed;
  bottom: 0; */
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    color: var(--primary-color);
    background-color: transparent;
    border: none;
  }
`;
export default StyledNavigation;
