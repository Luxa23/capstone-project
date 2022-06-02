import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--secondary-color);
  border: none;
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 999px;
  padding: 0.75rem;
  box-shadow: 0 0 30px var(--secondary-color);

  &.button--icon {
    background-color: white;
    box-shadow: none;
  }

  &.button--plusicon {
    background-color: white;
    box-shadow: none;
    position: fixed;
    bottom: 30px;
    right: 40px;
    padding: 0;
    fill: var(--primary-color);

    &:hover {
      fill: #89123e;
    }
  }
`;

export default StyledButton;
