import styled from 'styled-components';

const StyledRadioButtonToolbar = styled.div`
  float: left;
  margin: 0 5px 0 0;
  width: 9rem;
  height: 40px;
  position: relative;

  label,
  input {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffe4e8;
    border: 1px solid pink;
    border-radius: 5px;
    font-family: var(--font-family);
    color: #666666;
  }

  input[type='radio'] {
    opacity: 0.011;
    z-index: 100;
    width: 8rem;
  }

  input[type='radio']:checked + label {
    background: #e31b54;
    border-radius: 4px;
    color: white;
    font-family: var(--font-family);
  }

  label {
    padding: 1rem 1.5rem;
  }
`;

export default StyledRadioButtonToolbar;
