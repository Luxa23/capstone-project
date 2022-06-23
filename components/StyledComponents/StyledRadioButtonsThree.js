import styled from 'styled-components';

const StyledRadioButtonsThree = styled.div`
  float: left;
  margin: 0 0.5rem 0 0;

  label,
  input {
    background: #e5cdd0;
    border-radius: 5px;
    font-family: var(--font-family);
    color: #666666;
  }
  input[type='radio'] {
    display: inline-block;
    position: absolute;
    opacity: 0;
    z-index: 100;
    width: 4rem;
  }

  input[type='radio']:checked + label {
    background: #5ea6af;
    border-radius: 4px;
    color: white;
    font-family: var(--font-family);
  }

  label {
    padding: 0.5rem 1rem;
  }
`;
export default StyledRadioButtonsThree;
