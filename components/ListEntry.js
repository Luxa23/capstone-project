import { StyledH2, StyledListEntry } from '../components/StyledComponents';
import Image from 'next/image';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';

export default function ListEntry({ children, id }) {
  const hydrated = useHydration();

  const deleteRecipe = useStore(state => state.deleteRecipe);

  return (
    <>
      {hydrated && (
        <StyledListEntry>
          <StyledH2>{children}</StyledH2>

          <Image
            onClick={() => {
              deleteRecipe(id);
            }}
            src={'/bin-icon.svg'}
            width="20px"
            height="20px"
          />
        </StyledListEntry>
      )}
    </>
  );
}
