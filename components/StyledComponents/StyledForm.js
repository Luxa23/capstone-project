import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff5f6;
  display: grid;
  grid-template-rows: 3rem 8rem 3rem 3rem 3rem 1fr;
  justify-items: center;
  align-content: start;
  row-gap: 1rem;
  padding: 1rem;

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
