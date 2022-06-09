import ListEntry from '../components/ListEntry';
import { StyledButton } from '../components/StyledComponents';

import Link from 'next/link';
import useStore from '../hooks/useStore';
import Plusicon from '../public/plusicon.svg';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  return (
    <>
      <ul>
        {recipeList.map(recipe => {
          return (
            <ListEntry id={recipe.id} key={recipe.id} recipe={recipe}>
              {recipe.recipeTitle}
            </ListEntry>
          );
        })}
      </ul>
      <Link passHref href="/new-recipe">
        <StyledButton className="button--plusicon">
          <Plusicon width="75px" height="75px" />
        </StyledButton>
      </Link>
    </>
  );
}
