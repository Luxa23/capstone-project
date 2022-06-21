import styled from 'styled-components';

const StyledA = styled.a`
  top: 15px;
  left: 15px;
  text-decoration: none;
  font-family: var(--font-family);
  color: #666666;
  display: flex;

  &.link--active {
    color: #b7a3a6;
    background-color: transparent;
    border: none;
    ${({ isActive }) =>
      isActive &&
      `       
        color: #726668;
        background-color: transparent;
    border: none;
    `};
  }
`;
export default StyledA;
