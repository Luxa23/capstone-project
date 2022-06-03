import styled from 'styled-components';

const StyledToastContainer = styled.div`
  font-family: var(--font-family);
  font-size: 16px;
  background-color: white;
  color: #666666;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  box-sizing: border-box;
  position: fixed;
  padding: 0 1rem;
  box-shadow: 0 0 30px var(--secondary-color);
  /* transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.7s; */
`;

export default StyledToastContainer;
