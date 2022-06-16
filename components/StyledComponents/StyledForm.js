import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff5f6;
  display: grid;
  grid-template-rows: 3rem 8rem 3rem 3rem 3rem 1fr;
  justify-items: center;
  row-gap: 0.75rem;
  padding: 1rem;
  grid-area: main;
  overflow: auto;

  & button,
  & input {
    width: 17rem;
  }

  & button {
    grid-row: 6 / span 1;
    align-self: end;
  }

  & p {
    font-family: var(--font-family);
  }
`;

export default StyledForm;
