import styled from 'styled-components';

const StyledPageContainerHome = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 5rem 1fr auto;
  grid-template-areas:
    'header'
    'search'
    'main'
    'navigation';
  row-gap: 10px;
`;

export default StyledPageContainerHome;
