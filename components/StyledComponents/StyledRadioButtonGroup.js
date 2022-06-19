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
    transition: all 0.15s ease-out 0s;
    background: pink;
    _border: none;
    color: green;
    _display: inline-block;
    margin-right: 0.75rem;
    _outline: none;
    _position: relative;
    _z-index: 1000;
    border-radius: 50%;
  }

  input:checked {
    background: yellow;
  }

  input:checked::before {
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    _content: '\f00c';
  }

  &.radiobuttons-nextToEachOther {
    display: flex;
  }
`;

export default StyledRadioButtonGroup;
