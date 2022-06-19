import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;

  & li:nth-of-type(odd) {
    font-weight: 700;
    font-size: 20px;
    padding: 1rem 0 0.5rem;
  }

  & li:nth-of-type(even) {
    font-size: 20px;
  }

  & .li--structure {
    white-space: pre-line;
  }
`;

export default StyledList;
