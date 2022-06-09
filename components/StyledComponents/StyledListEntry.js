import styled from 'styled-components';

const StyledListEntry = styled.li`
  border-bottom: solid 1px var(--tertiary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;

  a {
    text-decoration: none;
  }
`;

export default StyledListEntry;
