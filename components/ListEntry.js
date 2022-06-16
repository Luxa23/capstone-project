import {
  StyledAText,
  StyledListEntry,
  StyledButtonIcon,
} from '../components/StyledComponents';

import Link from 'next/link';

import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import BinIcon from '../public/binicon.svg';
import StarIcon from '../public/starIcon.svg';

export default function ListEntry({ children, id, isActive }) {
  const hydrated = useHydration();
  const deleteRecipe = useStore(state => state.deleteRecipe);
  const toggleIsLiked = useStore(state => state.toggleIsLiked);

  return (
    <>
      {hydrated && (
        <StyledListEntry>
          <StyledButtonIcon
            onClick={() => {
              toggleIsLiked(id);
            }}
            className="button--starIcon"
            isActive={isActive}
          >
            <StarIcon width="25px" height="25px" />
          </StyledButtonIcon>

          <Link href={`/recipe/${id}`}>
            <StyledAText>{children}</StyledAText>
          </Link>
          <StyledButtonIcon className="button--deleteIcon">
            <BinIcon
              onClick={() => {
                deleteRecipe(id);
              }}
              width="20px"
              height="20px"
            />
          </StyledButtonIcon>
        </StyledListEntry>
      )}
    </>
  );
}
