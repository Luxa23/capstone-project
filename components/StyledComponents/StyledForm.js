import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff5f6;
  display: grid;

  &.form--other-active {
    grid-template-rows: 3rem 8rem 3rem 3rem 3rem 1fr;
    justify-items: center;
    row-gap: 0.75rem;
    padding: 1rem;
    overflow: auto;
    ${({ isActive }) =>
      isActive && `grid-template-rows: 3rem 8rem 3rem 3rem 7rem 7rem 1fr;`}
  }

  & button,
  & input {
    width: 17rem;
    align-self: end;
  }

  &.button--other-active {
    grid-row: 6 / span 1;

    ${({ isActive }) =>
      isActive &&
      `
  grid-row: 7 / span 1;
 
  `}
  }

  & p {
    font-family: var(--font-family);
  }
`;

export default StyledForm;
