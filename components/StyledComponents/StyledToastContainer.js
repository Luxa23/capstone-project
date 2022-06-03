import styled from 'styled-components';

const StyledToastContainer = styled.div`
  font-family: var(--font-family);
  font-size: 16px;
  background-color: white;
  color: #666666;
  border-radius: 5px;
  box-sizing: border-box;
  position: fixed;
  right: 10px;
  left: 10px;
  top: 10px;
  padding: 0 1rem;
  box-shadow: 0 0 30px var(--secondary-color);
`;

export default StyledToastContainer;
