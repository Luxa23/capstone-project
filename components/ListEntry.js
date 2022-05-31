import { StyledH2, StyledListEntry } from '../components/StyledComponents';
import Image from 'next/image';

export default function ListEntry({ children }) {
  return (
    <StyledListEntry>
      <StyledH2>{children}</StyledH2>
      <Image
        src={'/bin-icon.svg'}
        width="20px"
        height="20px
      "
      />
    </StyledListEntry>
  );
}
