import styled, { css } from 'styled-components';

const StyledIcon = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  fill: blue;

  ${({ variant = 'PlusIcon' }) =>
    variant === 'PlusIcon' &&
    css`
      fill: #e31b54;
    `}
`;

export default StyledIcon;
