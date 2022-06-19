import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background: #f4efef;
  border-radius: 5px;
  border: none;
  padding: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #666666;
  width: 21rem;
  resize: none;

  ::placeholder {
    color: #c9c0c4;
  }
`;

export default StyledTextarea;
