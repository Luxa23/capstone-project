import styled from 'styled-components';

const StyledButtonIcon = styled.button`
  color: #666666;
  background-color: transparent;
  border: none;

  &.button--deleteIcon {
    background-color: transparent;
    box-shadow: none;
    margin-left: auto;
  }

  &.button--starIcon {
    ${({ isActive }) => {
      if (isActive) {
        return `       
        color: #ffd700;
        padding: 0 0 0 1rem;
    `;
      } else {
        return `
        color: #eee3e8;
        padding: 0 0 0 1rem;`;
      }
    }}
  }
`;
export default StyledButtonIcon;
