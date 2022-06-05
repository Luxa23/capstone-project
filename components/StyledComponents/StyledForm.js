import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff5f6;
  display: grid;
  height: 18rem;
  justify-items: center;
  align-content: end;
  row-gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;

  & button,
  & input {
    width: 17rem;
  }

  & p {
    font-family: var(--font-family);
  }
`;

export default StyledForm;
