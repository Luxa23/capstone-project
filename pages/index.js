import ListEntry from '../components/ListEntry';
import {
  StyledButton,
  StyledH1Home,
  StyledUl,
  StyledTextHome,
} from '../components/StyledComponents';

import Link from 'next/link';
import useStore from '../hooks/useStore';
import PlusIcon from '../public/plusicon.svg';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);

  return (
    <>
      <StyledH1Home>my recipes</StyledH1Home>
      {recipeList.length === 0 && (
        <StyledTextHome>
          Welcome to my app &quot;my recipes&quot;. Add your first recipe with
          the plus-icon.
        </StyledTextHome>
      )}
      {recipeList.length > 0 && (
        <StyledUl>
          {recipeList.map(recipe => {
            return (
              <ListEntry id={recipe.id} key={recipe.id} recipe={recipe}>
                {recipe.recipeTitle}
              </ListEntry>
            );
          })}
        </StyledUl>
      )}

      <Link passHref href="/new-recipe">
        <StyledButton className="button--plusicon">
          <PlusIcon width="75px" height="75px" />
        </StyledButton>
      </Link>
    </>
  );
}
