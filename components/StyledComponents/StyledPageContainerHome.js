import styled from 'styled-components';

const StyledPageContainerHome = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4rem 3rem 1fr auto;
  grid-template-areas:
    'header'
    'search'
    'sort'
    'main'
    'navigation';
  row-gap: 10px;

  & .radio-buttons {
    padding: 0.75rem 2rem 1rem 2.5rem;
  }
`;

export default StyledPageContainerHome;
