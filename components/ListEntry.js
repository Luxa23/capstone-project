import { StyledH2, StyledListEntry } from '../components/StyledComponents';

export default function ListEntry({ children }) {
  return (
    <StyledListEntry>
      <StyledH2>{children}</StyledH2>
    </StyledListEntry>
  );
}
