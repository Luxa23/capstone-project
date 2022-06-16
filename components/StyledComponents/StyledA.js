import styled from 'styled-components';

const StyledA = styled.a`
  top: 15px;
  left: 15px;
  text-decoration: none;
  font-family: var(--font-family);
  color: #666666;
  display: flex;

  &.link--active {
    color: #fea3b4;
    background-color: transparent;
    border: none;
    ${({ isActive }) =>
      isActive &&
      `       
        color: #89123E;
        background-color: transparent;
    border: none;
    `};
  }
`;
export default StyledA;
