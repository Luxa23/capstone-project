import {
  StyledAText,
  StyledListEntry,
  StyledButton,
} from '../components/StyledComponents';

import Link from 'next/link';

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
          <Link href={`/recipe/${id}`}>
            <StyledAText>{children}</StyledAText>
          </Link>
          <StyledButton className="button--deleteicon">
            <Binicon
              onClick={() => {
                deleteRecipe(id);
              }}
              width="20px"
              height="20px"
            />
          </StyledButton>
        </StyledListEntry>
      )}
    </>
  );
}
