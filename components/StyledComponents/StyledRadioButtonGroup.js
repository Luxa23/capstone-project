import styled from 'styled-components';

const StyledRadioButtonGroup = styled.fieldset`
  font-family: var(--font-family);
  font-size: 16;
  color: #666666;
  border: none;

  label {
    height: 1.5rem;
    padding: 0.25rem;
  }

  input {
    appearance: none;
    position: relative;
    top: 0.4rem;
    bottom: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    background: #ffe4e8;
    border: 0.5px solid pink;
    color: white;
    margin-right: 0.75rem;
    border-radius: 50%;
    position: relative;
  }

  input:checked {
    background: #e31b54;
  }

  input:checked::before {
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    text-rendering: auto;
  }

  /* &.radiobuttons-nextToEachOther {
    display: flex;
  } */

  p {
    margin: 0;
    padding: 1.25rem 0.5rem 0;
    font-weight: 600;
  }
`;

export default StyledRadioButtonGroup;
