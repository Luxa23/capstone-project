import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff5f6;
  display: grid;
  justify-items: center;
  align-content: start;
  row-gap: 1rem;
  position: fixed;
  top: 8rem;
  bottom: 0rem;
  left: 0;
  right: 0;
  padding: 1rem;

  & button,
  & input {
    width: 17rem;
  }

  & button {
    _position: fixed;
    _bottom: 2rem;
    z-index: 2;
  }

  & p {
    font-family: var(--font-family);
  }
`;

export default StyledForm;
