import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--secondary-color);
  border: none;
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0.75rem;
  box-shadow: 0 0 30px var(--secondary-color);

  &.button--plusicon {
    background-color: transparent;
    box-shadow: none;
    position: fixed;
    bottom: 30px;
    right: 40px;
    padding: 0;
    fill: var(--primary-color);
    height: 5rem;

    &:hover {
      fill: #89123e;
    }
  }
`;

export default StyledButton;
