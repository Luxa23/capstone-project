import { StyledH2, StyledListEntry } from '../components/StyledComponents';

import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Binicon from '../public/binicon.svg';

export default function ListEntry({ children, id }) {
  const hydrated = useHydration();

  const deleteRecipe = useStore(state => state.deleteRecipe);

  return (
    <>
      {hydrated && (
        <StyledListEntry>
          <StyledH2>{children}</StyledH2>

          <Binicon
            onClick={() => {
              deleteRecipe(id);
            }}
            width="20px"
            height="20px"
          />
        </StyledListEntry>
      )}
    </>
  );
}
