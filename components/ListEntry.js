import StyledH2 from './StyledComponents/Styledh2';
import StyledListEntry from './StyledComponents/StyledListEntry';

export default function ListEntry({ children }) {
  return (
    <StyledListEntry>
      <StyledH2>{children}</StyledH2>
    </StyledListEntry>
  );
}
